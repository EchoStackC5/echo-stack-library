import { Link, NavLink } from "react-router"
import SETUPS from "@/constants/sidebar";
// import EchoBookLogo from "@/assets/logo/echoBookLogo.svg";
import EchoBookLogo from "@/assets/images/echo-book-logo.svg"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Home, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/custom/modal";
export default function Sidebar(){
    return (
        <aside className="fixed inset-y-0 w-60 left-0 z-10 hidden shadow-sm gap-y-12 px-5 py-8 flex-col  border-r-2 bg-background sm:flex">
      <div className="flex flex-col items-center gap-y-12 w-full">
        <Link
          to="/"
          className=" flex shrink-0 items-center justify-center  rounded-full  text-lg font-semibold text-primary  md:text-base"
        >
          <img src={EchoBookLogo} alt="echobook logo" />
        </Link>
      </div>

      <nav className="flex flex-col items-start gap-y-10 sm:py-4 text-base">
        {/* <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-x-6 w-full justify-start hover:bg-primary hover:text-white px-3 py-2 rounded-md
                  ${isActive ? "bg-primary text-white " : ""} `
          }
          end
        >
          <Home className="w-5 h-5" />
          <span className="">Overview</span>
        </NavLink> */}

        <div className="flex flex-col gap-y-3 ">
          <span className="text-sm uppercase font-semibold">0verview</span>
          {SETUPS.map(({ icon, title, path }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-x-6 w-full justify-start hover:bg-primary hover:text-white px-3 py-2 rounded-md
                  ${isActive ? "bg-primary text-white " : ""} `
              }
              end
            >
              <span className="flex size-5">{icon}</span>
              <span className="">{title}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <nav className="mt-auto flex flex-col items-start gap-y-10 sm:py-4 text-base">
        <Tooltip>
          <TooltipTrigger asChild>
            <Modal
              trigger={
                <Button
                  variant="ghost"
                  className="flex items-center justify-center gap-x-7 rounded-lg p-0 transition-colors hover:text-foreground/60 hover:bg-transparent "
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </Button>
              }
              headerText="Do you want to logout?"
            />
          </TooltipTrigger>
          <TooltipContent side="right">Logout</TooltipContent>
          
        </Tooltip>
      </nav>
    </aside>
    )
}