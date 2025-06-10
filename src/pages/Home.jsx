import Navbar from "@/components/Navbar"
import boo02 from '../assets/images/boo02.svg'
import book1 from '../assets/images/book1.svg'
import book03 from '../assets/images/book03.svg'
import book04 from '../assets/images/book04.svg'
import book05 from '../assets/images/book05.svg'


export default function Home() {
    
    
    return (
        <>
        <Navbar/>
        <section className="px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col items-center py-10 text-center">
                <h1 className=" text-5xl sm:text-4xl md:text-5xl font-satoshi py-3">Smart Book Management</h1>
                <h1 className="font-satoshi md:text-5xl text-5xl">Made Simple</h1>
                <p className="text-xs text-secondary-text py-6 max-w-xl">Easy to organize, track and manage your entire libraray collection. From catalogue, new arrivals to tracking genre trends--all in one intuitive dashbord.</p>
            </div>

            <div className="flex sm:flex-row justify-center items-center gap-4 pb-10">
                <button className="h-12 w-40 rounded-3xl bg-primary text-xs text-white">Get Started</button>
                <button className="h-12 w-40 rounded-3xl bg-gradient-to-r from-blue-100 border border-light-border text-primary shadow-md to-white text-xs ">Request a Live Demo</button>
            </div>

            <div className="flex py-8 justify-center flex-wrap">
                <img src={boo02} alt="book2" />
                <img src={book1} alt="book1" />
                <img src={book04} alt="book4" />
                <img src={book03} alt="book3" />
                <img src={book05} alt="book5" />
                <img src={book04} alt="book4" />
                <img src={boo02} alt="book2" />
            </div>
            
        </section>
        </>
        
    )
}