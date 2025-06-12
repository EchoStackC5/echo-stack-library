"use client"

import { TrendingUp } from "lucide-react"
import {   AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear area chart"

const data = [
  { day: "MON", readers: 3900 },
  { day: "TUE", readers: 450 },
  { day: "WED", readers: 1150 },
  { day: "THU", readers: 500 },
  { day: "FRI", readers: 1800 },
  { day: "SAT", readers: 2900 },
  { day: "SUN", readers: 1900 },
]

// export const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
// }

export function ChartAreaLinear() {
  return (
     <Card className="w-full shadow-none border border-light-border bg-white  font-satoshi">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardDescription className="text-secondary-text">Active readers</CardDescription>
            <CardTitle className="text-3xl text-darkestHeading">6,345</CardTitle>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium text-green-600 flex items-center gap-1">
              1.3% <TrendingUp className="h-4 w-4" />
            </span>
            <div className="text-muted-foreground text-xs">VS LAST WEEK</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[100px] md:h-[250px] w-full ">
        <div>
          
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReaders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide domain={[0, 4000]} />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black text-white text-xs px-2 py-1 rounded shadow">
                      {payload[0].value.toLocaleString()}
                    </div>
                  )
                }
                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="readers"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorReaders)"
              dot={{ r: 4, stroke: "#3b82f6", strokeWidth: 2, fill: "white" }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}