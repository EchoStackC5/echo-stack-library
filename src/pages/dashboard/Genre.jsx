import Book1 from "@/assets/images/boo02.svg";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link, NavLink } from "react-router"

export default function BooksGenre({booksData}) {

    
    
    const getGradientClasses = (bgColor) => {
        const gradientMap = {
            'bg-orange-700': 'hover:from-orange-500 hover:via-orange-600 hover:to-orange-800',
            'bg-yellow-300': 'hover:from-yellow-400 hover:via-yellow-600 hover:to-yellow-800',
            'bg-blue-700': 'hover:from-blue-500 hover:via-blue-600 hover:to-blue-800',
            'bg-green-700': 'hover:from-green-500 hover:via-green-600 hover:to-green-800',
            'bg-purple-300': 'hover:from-purple-400 hover:via-purple-300 hover:to-purple-800',
            'bg-green-400': 'hover:from-green-500 hover:via-green-300 hover:to-green-800',
            'bg-gray-100': 'hover:from-gray-200 hover:via-gray-300 hover:to-gray-800',
            'bg-gray-200': 'hover:from-gray-100 hover:via-gray-200 hover:to-gray-400',
        };
        return gradientMap[bgColor] || 'hover:from-gray-500 hover:via-gray-600 hover:to-gray-800';
    };
    
    return(
        <section className="w-full max-w-[160px] xs:max-w-[180px] sm:max-w-[200px] mx-auto">
            
           <div className={`flex justify-center items-center ${booksData.bgColor} hover:bg-gradient-to-br ${getGradientClasses(booksData.bgColor)} rounded-t-md w-full py-4 px-3 xs:py-5 xs:px-4 sm:py-6 sm:px-6 cursor-pointer transition-all duration-300 ease-in-out`}>
                <img 
                    src={booksData.imageUrl} 
                    alt={booksData.title}
                    className="shadow-2xl drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 max-w-full h-auto object-contain" 
                />     
            </div>
            <div className="flex flex-col bg-backgrounds rounded-b-md w-full py-3 px-2 xs:py-3 xs:px-3 sm:py-4 sm:px-4 border border-gray-200">
                <p className="font-aceme text-gray-800 text-sm xs:text-base sm:text-lg font-medium line-clamp-2 leading-tight">{booksData.title}</p>
                <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mt-1.5 xs:mt-2">
                    {booksData.genre.map((singleGenre, index) => (
                        <p 
                            key={index}
                            className="text-gray-600 text-xs xs:text-xs sm:text-xs bg-white text-center px-2 py-0.5 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 rounded-full border border-dark-border cursor-pointer whitespace-nowrap"
                        >
                            {singleGenre}
                        </p>
                    ))}
                </div>
            </div>
            
        </section>
    )
}