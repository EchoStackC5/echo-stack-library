"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon, ListFilter, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const filterCategories = {
  year: {
    label: "Year",
    items: [
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
      { value: "2020", label: "2020" },
    ]
  },
  genre: {
    label: "Genre",
    items: [
      { value: "Romance", label: "Romance" },
      { value: "Finance", label: "Finance" },
      { value: "Education", label: "Education" },
      { value: "Drama", label: "Drama" },
      { value: "Technology", label: "Technology" },
      { value: "Fantasy", label: "Fantasy" },
    ]
  }
}

export default function BooksTableFilter({ onFilterChange }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [expandedCategories, setExpandedCategories] = React.useState(new Set())

  const toggleCategory = (categoryKey) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryKey)) {
      newExpanded.delete(categoryKey)
    } else {
      newExpanded.add(categoryKey)
    }
    setExpandedCategories(newExpanded)
  }

  const getSelectedLabel = () => {
    if (!value) return "Filter..."
    
    // Find the selected item across all categories
    for (const [categoryKey, category] of Object.entries(filterCategories)) {
      const item = category.items.find(item => item.value === value)
      if (item) {
        return `${category.label}: ${item.label}`
      }
    }
    return "Filter..."
  }

  const handleSelect = (currentValue) => {
    const newValue = currentValue === value ? "" : currentValue
    setValue(newValue)
    setOpen(false)
    
    // Call the parent component's filter change handler
    if (onFilterChange) {
      onFilterChange(newValue)
    }
  }

  // Add clear filter functionality
  const clearFilter = () => {
    setValue("")
    if (onFilterChange) {
      onFilterChange("")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="font-satoshi flex shrink-0 items-center justify-center rounded-full w-full md:w-[180px] text-lg p-6 border border-light-border font-semibold text-primary md:text-base"
          >
            <span className="truncate">{getSelectedLabel()}</span>
            <ListFilter className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full md:w-[220px] p-0">
          <Command>
            <CommandInput placeholder="Search filters..." />
            <CommandList>
              <CommandEmpty>No filters found</CommandEmpty>
              
              {Object.entries(filterCategories).map(([categoryKey, category]) => (
                <CommandGroup key={categoryKey}>
                  {/* Category Header */}
                  <CommandItem
                    className="font-medium cursor-pointer hover:bg-accent"
                    onSelect={() => toggleCategory(categoryKey)}
                  >
                    {expandedCategories.has(categoryKey) ? (
                      <ChevronDownIcon className="mr-2 h-4 w-4" />
                    ) : (
                      <ChevronRightIcon className="mr-2 h-4 w-4" />
                    )}
                    {category.label}
                  </CommandItem>
                  
                  {/* Category Items */}
                  {expandedCategories.has(categoryKey) && category.items.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      className="pl-8"
                      onSelect={handleSelect}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === item.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      {/* Clear filter button */}
      {value && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilter}
          className="text-xs px-2"
        >
          Clear
        </Button>
      )}
    </div>
  )
}