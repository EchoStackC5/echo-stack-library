import { Link } from "react-router";
import Navbar from "@/components/Navbar";
import "@/styles/styles.css";

import boo02 from "../assets/images/boo02.svg";
import book1 from "../assets/images/book1.svg";
import book03 from "../assets/images/book03.svg";
import book04 from "../assets/images/book04.svg";
import book05 from "../assets/images/book05.svg";
import book7 from "../assets/images/book7.svg";
import richdad from "../assets/images/richdad.svg";

const bookImages = [boo02, book1, book04, book03, book05, book7, richdad];

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="px-4 sm:px-6 lg:px-16 font-satoshi">
        <div className="flex flex-col items-center py-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold md:text-5xl font-satoshi py-3">
            Smart Book Management
          </h1>
          <h1 className="font-satoshi font-bold md:text-5xl text-3xl">
            Made Simple
          </h1>
          <p className="text-sm text-secondary-text py-6 max-w-xl">
            Easy to organize, track and manage your entire library collection.
            From catalogue, new arrivals to tracking genre trends — all in one
            intuitive dashboard.
          </p>
        </div>

        <div className="flex sm:flex-row justify-center items-center gap-4 pb-10">
          <Link
            to="/dashboard"
            className="h-12 w-40 rounded-3xl bg-primary text-lg text-white flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
          >
            Get Started
          </Link>
          <button className="h-12 w-40 rounded-3xl text-sm bg-gradient-to-r from-blue-100 border border-light-border text-primary shadow-md to-white">
            Request a Live Demo
          </button>
        </div>

        {/* 🚀 Smooth Scrolling Book Carousel */}
        <div className="relative overflow-hidden w-full py-6">
          <div className="animate-scroll whitespace-nowrap flex gap-8">
            {[...bookImages, ...bookImages].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`book-${index}`}
                className="book-img shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
