import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Dashboard from "./pages/dashboard/Dashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import BookDetails from "./pages/dashboard/BookDetails";
import RootLayout from "./layouts/rootLayout";
import AddBooks from "./pages/dashboard/AddBooks";

const echoBooksRoutes = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },

  {
    path: "/book-details",
    element: <BookDetails/>
  },
  {
    path: "/dashboard",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path: 'add-books',
        element:<AddBooks/>
      }
    ]
  }
  
])

export default function App(){
  return(
    <>
    <RouterProvider router={echoBooksRoutes}/>
    </>
  )
}