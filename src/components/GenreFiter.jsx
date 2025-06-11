"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon,ListFilter } from "lucide-react"

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

const frameworks = [
  {
    value: "romance",
    label: "Romance",
  },
  {
    value: "fiction",
    label: "Fiction",
  },
  {
    value: "self-help",
    label: "Self-Help",
  },
  {
    value: "satire",
    label: "Satire",
  },
  {
    value: "drama",
    label: "Drama",
  },
]

export default function GenreFilter() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" font-satoshi flex shrink-0 items-center justify-center  rounded-full bg- w-[150px] text-lg px-2 py-2 border border-light-border font-semibold text-primary  md:text-base"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Filter..."}
          <ListFilter className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search genre..." />
          <CommandList>
            <CommandEmpty>No genre forund</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}