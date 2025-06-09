import { LayoutDashboard,LibraryBig,Shapes, Settings, CircleHelp ,LogOut} from "lucide-react";
export default  [
        {
            icon: <LayoutDashboard/>,
            title: "Dashboard",
            path: "/",
        },
        {
            icon: <LibraryBig/>,
            title: "Add Books",
            path: "/add-books"
        },
        {
            icon: <Shapes/>,
            title: "Categories",
            path: "/categories"
        },
        {
            icon: <Settings/>,
            title: "Settings",
            path: "/settings"
        },
        {
            icon: <CircleHelp/>,
            title: "Help",
            path: "/help"
        },
        {
            icon: <LogOut/>,
            title:"Logout",
            path: "/logout"
        }

    ]