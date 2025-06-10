import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DashboardCards from "@/components/DashboardCards";
import CardsComponents from "@/constants/CardsComponents";
// import ChartAreaLinear from "./Charts";
// import { ChartConfig } from './DashboardCharts'
import { ChartAreaLinear } from "./DashboardCharts";
import AvailableBooks from "@/pages/dashboard/AvailableBooks";
import AvailableBooksConstants from "@/constants/BooksAvailable";
import { ChevronRight } from "lucide-react";
import { Link, NavLink } from "react-router";
// import { chartConfig } from "./DashboardCharts";

export default function Dashboard() {
    return (
        <section className=" rounded-lg p-6 space-y-0.5 md:space-y-18">
            {/* Your dashboard content here - the stats cards, charts, etc. */}
            <div className="space-y-6">
                <div className="font-font-satoshi">
                    <h1 className="text-2xl font-bold text-darkestHeading ">Welcome, Gloria! 😊</h1>
                    <p className="text-muted-foreground">Manage all books here!</p>
                </div>

                {/* Your dashboard stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Add your stat cards here */}
                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {CardsComponents.map((card, index) => (
                    <DashboardCards key={index} cardData={card} />
                ))}
            </div>
            <div>
                <ChartAreaLinear />
            </div>
            <Card >
                <div className="flex items-center justify-between p-8 w-full ">
                    <h1 className="text-2xl text-darkestHeading font-satoshi">Available Books</h1>
                    <Link
                        to="/dashboard/add-books"
                        className=" font-satoshi flex shrink-0 items-center justify-center  rounded-full bg-backgrounds w-[150px] text-lg px-2 py-2 border border-light-border font-semibold text-primary  md:text-base"
                    > View All
                        <ChevronRight />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-4 p-8">
                    {AvailableBooksConstants.map((book, index) => (
                        <AvailableBooks key={index} booksData={book} />
                    ))}
                </div>

            </Card>

        </section>
    );
}