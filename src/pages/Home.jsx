import React from "react"
import { Calendar } from "@/components/ui/calendar"

export default function Home() {
    const [date, setDate] = React.useState(new Date())
    
    return (
        <section>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
            />
        </section>
    )
}