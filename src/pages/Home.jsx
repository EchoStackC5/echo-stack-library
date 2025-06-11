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
    const [bookimg1, setBookImg1] = useState(bookImages[0])
    const [bookimg2, setBookImg2] = useState(bookImages[1])
    const [bookimg3, setBookImg3] = useState(bookImages[2])
    const [bookimg4, setBookImg4] = useState(bookImages[3])
    const [bookimg5, setBookImg5] = useState(bookImages[4])
    const [bookimg6, setBookImg6] = useState(bookImages[5])
    const [bookimg7, setBookImg7] = useState(bookImages[6])

    useEffect(()=> {
        rotateBooks()
    }, [])
  
    const rotateBooks = () => {
        let ind1 = 1
        let ind2 = 2
        let ind3 = 3
        let ind4 = 4
        let ind5 = 5
        let ind6 = 6
        let ind7 = 0

        setInterval(() => {
            setBookImg1(bookImages[ind1])
            setBookImg2(bookImages[ind2])
            setBookImg3(bookImages[ind3])
            setBookImg4(bookImages[ind4])
            setBookImg5(bookImages[ind5])
            setBookImg6(bookImages[ind6])
            setBookImg7(bookImages[ind7])

            ind1 = ind1 + 1
            ind2++; ind3++; ind4++; ind5++; ind6++; ind7++;

            if (ind1 == 7){
                ind1 = 0
            }
            if (ind2 == 7) {
                ind2 = 0;
            }
            if (ind3 == 7) {
                ind3 = 0;
            }
            if (ind4 == 7) {
                ind4 = 0;
            }
            if (ind5 == 7) {
                ind5 = 0;
            }
            if (ind6 == 7) {
                ind6 = 0;
            }
            if (ind7 == 7) {
                ind7 = 0;
            }
            
        }, 3000)
    }

    return (
       
        
        <section className="px-4 sm:px-6 lg:px-16">
            <Navbar/>
            <div className="flex flex-col items-center py-10 text-center">
                <h1 className=" text-5xl sm:text-4xl md:text-5xl font-satoshi py-3">Smart Book Management</h1>
                <h1 className="font-satoshi md:text-5xl text-5xl">Made Simple</h1>
                <p className="text-sm text-secondary-text py-6 max-w-xl">Easy to organize, track and manage your entire libraray collection. From catalogue, new arrivals to tracking genre trends--all in one intuitive dashbord.</p>
            </div>

            <div className="flex sm:flex-row justify-center items-center gap-4 pb-10">
                <button className="h-12 w-40 rounded-3xl bg-primary text-xs text-white">Get Started</button>
                <button className="h-12 w-40 rounded-3xl bg-gradient-to-r from-blue-100 border border-light-border text-primary shadow-md to-white text-xs ">Request a Live Demo</button>
            </div>

            <div className="flex py-8 justify-center items-center flex-wrap">
                <img src={bookimg1} alt="book2" className="h-50 w-40" />
                <img src={bookimg2} alt="book1" className="h-50 w-40"/>
                <img src={bookimg3} alt="book4" className="h-50 w-40"/>
                <img src={bookimg4} alt="book3" className="h-70 w-60"/>
                <img src={bookimg5} alt="book5" className="h-50 w-40"/>
                <img src={bookimg6} alt="book7" className="h-50 w-40"/>
                <img src={bookimg7} alt="richdad" className="h-50 w-40"/>
            </div>
            
        </section>
    )
}

           