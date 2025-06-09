import { ChevronDown, Menu } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link,useLocation, useNavigate } from "react-router";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
import { Fragment } from "react/jsx-runtime";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const paths = pathname.substring(1).split("/");

  return (
    <header className="sticky w-full top-0 z-30 flex h-14 items-center gap-4 border-b-2 shadow-sm bg-background px-8 py-10">
      <Button size="icon" variant="outline">
        <Menu />
      </Button>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {paths.length > 1 &&
            paths.map((path, index) => {
              if (index + 1 == paths.length)
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbPage>{_.startCase(path)}</BreadcrumbPage>
                  </BreadcrumbItem>
                );
              else
                return (
                  <Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink onClick={() => navigate(-1)} asChild>
                        <Link to="#"> {_.startCase(path)}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />{" "}
                  </Fragment>
                );
            })}
        </BreadcrumbList>
      </Breadcrumb>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-auto">
          <Button variant="ghost" className="  flex gap-x-3 items-center p-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="flex items-center gap-x-2">
              Super Admin <ChevronDown size={16} />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;
