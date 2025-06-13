import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router";
import Sidebar from "@/pages/dashboard/Sidebar";
// import Sidebar from "@/components/Sidebar";
// import Navbar from "@/components/Navbar";
import Navbar from "@/pages/dashboard/Navbar";

export default function RootLayout(){
    return(
        <div className="felx w-full">
        <TooltipProvider>
            <Sidebar/>
        </TooltipProvider>
        <div className="flex flex-col pl-1 md:pl-60 w-full">
            <Navbar  />
            <div className="bg-backgrounds min-h-screen p-2 md:p-8 ">
                <Outlet/>
            </div>
        </div>

        </div>
    )
}