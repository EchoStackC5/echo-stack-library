import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import BookDetails from "./pages/dashboard/BookDetails";

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
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/book-details",
    element: <BookDetails/>
  }
  
])

export default function App(){
  return(
    <>
    <RouterProvider router={echoBooksRoutes}/>
    </>
  )
}