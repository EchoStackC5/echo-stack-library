import { BookOpen,Biohazard,BookKey,BookX, FileDown, ArrowDownFromLine, MoveDownRight,MoveUpRight,   } from "lucide-react";
const CardsComponents = [
     {
    title: "350",
    subText: "Total Books",
    percentageChange: "3.46%",
    trend: "down", // or "up"
    icon: BookOpen,
     iconBg: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    title: "110",
    subText: "Borrowed Books",
    percentageChange: "3.46%",
    trend: "up",
    icon: Biohazard,
     iconBg: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    title: "18",
    subText: "Returned Books",
    percentageChange: "4.87%",
    trend: "down",
    icon: BookKey,
     iconBg: "bg-green-100",
    iconColor: "text-green-500"

  },   
  {
    title: "95",
    subText: "Missing Books",
    percentageChange: "64.76",
    trend: "down",
    icon: BookX,
     iconBg: "bg-red-100",
    iconColor: "text-red-500"

  }, 
  {
    title: "250",
    subText: "Downloaded Books",
    percentageChange: "8.90",
    trend: "up",
    icon: ArrowDownFromLine,
     iconBg: "bg-purple-100",
    iconColor: "text-purple-500"

  },         

]
export default CardsComponents;