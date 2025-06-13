import bookLogo from '../assets/images/bookLogo.svg'
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router'


export default function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <nav>
            <div className='flex py-6 justify-center'>
                <div className='flex justify-between md:justify-around h-15 md:w-[70%] w-[90%] p-5 bg-white rounded-4xl items-center shadow-xl'>
                    <div className='md:hidden flex items-center'>
                        <img src={bookLogo} alt="Logo" />
                        <h1 className='font-md text-xs md:text-xl'>EchoBooks</h1>
                    </div>
                    <Menu className='md:hidden flex'
                        onClick={() => {
                            if (menu) {
                                setMenu(false)
                            }
                            else {
                                setMenu(true)
                            }
                        }}
                    />
                    <div className='md:flex hidden'>
                        <img src={bookLogo} alt="Logo" />
                        <h1 className='font-md text-xs md:text-xl'>EchoBooks</h1>
                    </div>
                    <div className='text-sm space-x-5 hidden md:flex'>
                        <Link to="/">Home</Link>
                        <Link to="#">About Us </Link>
                        <Link to="#">Features</Link>
                        <Link to="#">Contact Us</Link>
                    </div>

                    <div className="space-x-5 md:text-xs text-xs hidden md:flex">
                        <button className="h-7 w-20 bg-primary rounded-2xl text-white">Sign Up</button>
                        <button className="h-7 w-20 border border-primary rounded-2xl text-primary">Login</button>
                    </div>
                </div>
            </div>

            <div className=' w-[90%] md:hidden justify-end flex' style={{ display: menu ? 'flex' : 'none' }}>
                <div className='text-sm space-x-5 flex flex-col space-y-2'>
                    <Link to="/">Home</Link>
                    <Link to="dashboard">Dashboard</Link>
                    <Link to="Categories">Categories</Link>
                    <Link to="All books">All books</Link>
                    
                </div>
            </div>

        </nav>
    );

} 