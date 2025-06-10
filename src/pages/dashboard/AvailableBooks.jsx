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

export default function AvailableBooks({booksData}) {
    
    const getGradientClasses = (bgColor) => {
        const gradientMap = {
            'bg-orange-700': 'hover:from-orange-500 hover:via-orange-600 hover:to-orange-800',
            'bg-yellow-300': 'hover:from-yellow-400 hover:via-yellow-600 hover:to-yellow-800',
            'bg-blue-700': 'hover:from-blue-500 hover:via-blue-600 hover:to-blue-800',
            'bg-green-700': 'hover:from-green-500 hover:via-green-600 hover:to-green-800',
            'bg-purple-300': 'hover:from-purple-400 hover:via-purple-300 hover:to-purple-800',
        };
        return gradientMap[bgColor] || 'hover:from-gray-500 hover:via-gray-600 hover:to-gray-800';
    };
    return(
        <section>
            
            
           <div className={`flex justify-center items-center ${booksData.bgColor} hover:bg-gradient-to-br ${getGradientClasses(booksData.bgColor)} rounded-t-md w-[200px] py-6 px-6 cursor-pointer transition-all duration-300 ease-in-out`}>
                <img 
                    src={booksData.imageUrl} 
                    alt={booksData.title}
                    className="shadow-2xl drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 " 
                />     
            </div>
            <div className="flex flex-col bg-backgrounds rounded-b-md w-[200px] py-4 px-4 border border-gray-200">
                <p className="font-aceme text-gray-800 text-lg font-medium line-clamp-2">{booksData.title}</p>
                <p className="text-gray-600 text-sm mt-1">{booksData.author}</p>
            </div>
            
        </section>
    )
}