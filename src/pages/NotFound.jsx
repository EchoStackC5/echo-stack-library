import Navbar from "@/components/Navbar";
import notimg2 from '../assets/images/notimg2.png'
import { Link } from "react-router";

export default function NotFound() {

    return(
        <>
        <Navbar/>
        <section className="flex flex-col justify-center items-center">
            <img src={notimg2} alt=""  />
            <h1 className="font-bold text-2xl mb-6">Ooops!</h1>
            <p className="font-bold text-xs mb-7">The page you are looking for cannot be found</p>

            <Link to ="/" className="h-10 w-27 bg-primary rounded-3xl text-white text-center py-2">
                Go back
            </Link>
        </section>


        </>
        
        
    )
}