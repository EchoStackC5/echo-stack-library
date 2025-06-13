import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
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
import BooksGenre from "./Genre";
import GenreFilter from "@/components/GenreFiter";
import { DotsSpinner } from "@/components/spinner";
// import { chartConfig } from "./DashboardCharts";

export default function Dashboard() {
    return (
        <section className="space-y-8 md:space-y-18">
          
            
            <div className="space-y-6">
                <div className="font-font-satoshi flex flex-col mt-6 items-center justify-between">
                    <h1 className=" text-xl md:text-2xl font-bold text-darkestHeading ">Welcome, Gloria! 😊</h1>
                    <p className="text-muted-foreground text-sm">Manage all books here!</p>
                </div>

                
  

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center ">
                {CardsComponents.map((card, index) => (
                    <DashboardCards key={index} cardData={card} />
                ))}
            </div>
            <div>
                <ChartAreaLinear />
            </div>
            <Card className="shadow-none border border-light-border md:justify-between justify-center  flex ">
                <div className="flex items-center justify-between p-8 w-full ">
                    <h1 className=" text-sm md:text-2xl text-darkestHeading font-satoshi">Available Books</h1>
                    <Link
                        to="/dashboard/add-books"
                        className=" font-satoshi flex shrink-0 items-center justify-center  rounded-full bg-backgrounds w-[100px] md:w-[150px] text-xs px-2 py-2 border border-light-border font-semibold text-primary  md:text-base"
                    > View All
                        <ChevronRight />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3  gap-4 p-2 md:p-8">
                    {AvailableBooksConstants.map((book, index) => (
                        <AvailableBooks key={index} booksData={book} />
                    ))}
                </div>

            </Card>
             <Card className="shadow-none border border-light-border">
                <div className="flex items-center justify-between p-8 w-full ">
                    <h1 className="text-lg md:text-2xl text-darkestHeading font-satoshi">Books Genre</h1>
                    <GenreFilter  />
                    
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3  gap-4 p-8">
                    {AvailableBooksConstants.map((book, index) => (
                        <BooksGenre key={index} booksData={book} />
                    ))}
                </div>

            </Card>

        </section>
    );
}