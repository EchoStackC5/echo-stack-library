import Navbar from "@/components/Navbar";
import notfound from '../assets/images/notfound.png'
import { Link } from "react-router";

export default function NotFound() {

    return(
        <>
        <Navbar/>
        <section>
            <img src={notfound} alt="" />
            <h1>Ooops!</h1>

            <Link to ="/" className="h-7 w-20 bg-primary rounded-2xl text-white">
                Back to home
            </Link>
        </section>


        </>
        
        
    )
}