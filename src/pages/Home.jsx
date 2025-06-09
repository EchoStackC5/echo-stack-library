import Navbar from "@/components/Navbar"
export default function Home() {
    
    
    return (
        <>
        <Navbar/>
        <section>
            <div className="flex flex-col items-center py-10">
                <h1 className="font-bold text-5xl py-5">Smart Book Management</h1>
                <h1 className="font-bold text-5xl">Made Simple</h1>
                <p className="text-xs text-secondary-text py-10">Easy to organize, track and manage your entire libraray collection. From catalogue, new arrivals to tracking genre trends--all in one intuitive dashbord.</p>
            </div>

            <div className="space-x-6">
                <button className="h-10 w-35 rounded-3xl bg-primary text=xs text-white">Get Started</button>
                <button className="h-10 w-35 rounded-3xl text">Request a Live Demo</button>
            </div>
            
        </section>
        </>
        
    )
}