export default function Navbar(){
    return(
            <nav className="Flex">
                <h1>EchoBooks</h1>
                <div>
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Features</span>
                    <span>Contact</span>
                </div>
                <div className=" flex space-x-5 text-white text-xs">
                    <button className="h-8 w-20 bg-primary rounded-2xl">Sign Up</button>
                    <button className="h-8 w-20 bg-primary rounded-2xl">Login</button>
                </div>
            </nav>
    )
}