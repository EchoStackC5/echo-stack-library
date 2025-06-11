"use client"

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const chartData = [
  { month: "JAN", Tech: 30, Romance: 10, SciFic: 5, Drama: 5 },
  { month: "FEB", Tech: 45, Romance: 20, SciFic: 10, Drama: 10 },
  { month: "MAR", Tech: 50, Romance: 25, SciFic: 15, Drama: 10 },
  { month: "APR", Tech: 50, Romance: 30, SciFic: 20, Drama: 10 },
  { month: "MAY", Tech: 55, Romance: 30, SciFic: 20, Drama: 15 },
  { month: "JUN", Tech: 40, Romance: 20, SciFic: 15, Drama: 10 },
]

const chartConfig = {
  Tech: { label: "Tech", color: "#a855f7" }, // purple-500
  Romance: { label: "Romance", color: "#c084fc" }, // purple-400
  SciFic: { label: "Sci-Fic", color: "#d8b4fe" }, // purple-300
  Drama: { label: "Drama", color: "#ede9fe" }, // purple-100
}

export default function GenreBarChart() {
  return (
    <Card className="w-full max-w-full md:max-w-lg shadow-none bg-white border border-light-border rounded-xl">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-sm text-muted-foreground font-medium">Statistics</CardTitle>
          <CardDescription className="text-xl font-medium text-foreground">Books per Genre</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-sm flex gap-1 items-center">
              Last 6 months <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Last 6 months</DropdownMenuItem>
            <DropdownMenuItem>Last year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="pb-6">
        <ChartContainer config={chartConfig}>
          <BarChart width={500} height={260} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              fontSize={12}
              stroke="#888"
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            {Object.keys(chartConfig).map((key, idx) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={chartConfig[key].color}
                radius={idx === Object.keys(chartConfig).length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
