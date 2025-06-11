import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import boo02 from '../assets/images/boo02.svg'
import book1 from '../assets/images/book1.svg'
import book03 from '../assets/images/book03.svg'
import book04 from '../assets/images/book04.svg'
import book05 from '../assets/images/book05.svg'
import book7 from '../assets/images/book7.svg'
import richdad from '../assets/images/richdad.svg'

export default function Home() {
    const bookImages = [boo02, book1, book04, book03, book05, book7, richdad]
    const [currentBooks, setCurrentBooks] = useState(bookImages.slice(0, 7))
    
    useEffect(() => {
        const interval = rotateBooks()
        
        // Cleanup interval on component unmount
        return () => clearInterval(interval)
    }, [])
  
    const rotateBooks = () => {
        let startIndex = 0
        
        return setInterval(() => {
            // Create a new array by rotating the books
            const rotatedBooks = []
            for (let i = 0; i < 7; i++) {
                rotatedBooks[i] = bookImages[(startIndex + i + 1) % bookImages.length]
            }
            
            setCurrentBooks(rotatedBooks)
            startIndex = (startIndex + 1) % bookImages.length
        }, 3000)
    }

    return (
        <>
            <Navbar/>
            <section className="px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col items-center py-10 text-center">
                    <h1 className="text-5xl sm:text-4xl md:text-5xl font-satoshi py-3">
                        Smart Book Management
                    </h1>
                    <h1 className="font-satoshi md:text-5xl text-5xl">Made Simple</h1>
                    <p className="text-sm text-secondary-text py-6 max-w-xl">
                        Easy to organize, track and manage your entire library collection. 
                        From catalogue, new arrivals to tracking genre trends--all in one intuitive dashboard.
                    </p>
                </div>

                <div className="flex sm:flex-row justify-center items-center gap-4 pb-10">
                    <button className="h-12 w-40 rounded-3xl bg-primary text-xs text-white">
                        Get Started
                    </button>
                    <button className="h-12 w-40 rounded-3xl bg-gradient-to-r from-blue-100 border border-light-border text-primary shadow-md to-white text-xs">
                        Request a Live Demo
                    </button>
                </div>

                <div className="flex py-8 justify-center items-center flex-wrap gap-2">
                    {currentBooks.map((book, index) => (
                        <img 
                            key={index} 
                            src={book} 
                            alt={`book-${index}`} 
                            className={`transition-all duration-500 ${
                                index === 3 ? 'h-70 w-60' : 'h-50 w-40'
                            }`}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}