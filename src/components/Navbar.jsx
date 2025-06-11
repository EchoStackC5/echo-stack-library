import bookLogo from '../assets/images/bookLogo.svg'
import { Link } from 'react-router'

export default function Navbar(){
    return(
        <nav className='flex py-6 justify-center'>
            <div className='flex justify-around h-15 w-[70%] p-5 bg-white rounded-4xl items-center shadow-xl'>
                <div className='flex'>
                    <img src={bookLogo} alt="Logo" />
                    <h1 className='font-md text-xs md:text-xl'>EchoBooks</h1>
                </div>

                <div className='text-sm space-x-5'>
                        <span><a href="">Home</a></span>
                        <span><a href="">About Us</a></span>
                        <span><a href="">Features</a></span>
                        <span><a href="">Contact</a></span>          

                </div>
                    
                <div className="flex space-x-5 md:text-xs text-xs">
                    <button className="h-7 w-20 bg-primary rounded-2xl text-white">Sign Up</button>
                    <button className="h-7 w-20 border border-primary rounded-2xl text-primary">Login</button>
                </div>
            </div>
        </nav>
    )
} 