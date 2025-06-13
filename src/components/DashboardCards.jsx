import { MoveDownRight, BookOpen, MoveUpRight } from 'lucide-react';

export default function DashboardCards({ cardData }) {
  const IconComponent = cardData.icon;
  const TrendIcon = cardData.trend === 'up' ? MoveUpRight : MoveDownRight;
  const trendColor = cardData.trend === 'up' ? 'text-green-400 group-hover:text-green-300' : 'text-red-400 group-hover:text-red-300';
  
  return (
    <div className='group flex flex-col sm:flex-row font-satoshi rounded-md px-3 py-3 sm:px-4 sm:py-4 hover:bg-gradient-to-t hover:from-sky-600 hover:to-blue-900 cursor-pointer active:bg-gradient-to-r active:from-purple-500 active:to-pink-500 justify-center items-center gap-3 sm:gap-6 text-darkestHeading bg-white border border-light-border w-full max-w-[280px] sm:max-w-[300px] mx-auto hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 transform'>
      
      <div className='space-y-1 sm:space-y-2 flex-1 text-center sm:text-left'>
        <h1 className='text-base sm:text-lg md:text-2xl font-satoshi group-hover:text-white transition-colors'>{cardData.title}</h1>
        <p className='text-secondary-text text-xs sm:text-sm md:text-lg font-medium group-hover:text-white transition-colors'>{cardData.subText}</p>
        <div className='flex items-center justify-center sm:justify-start'>
          <TrendIcon className={`${trendColor} w-3 h-3 sm:w-4 sm:h-4`} />
          <p className='text-xs sm:text-sm text-gray-600 group-hover:text-white transition-colors ml-1'>
            <span className={trendColor}>{cardData.percentageChange}</span> since last month
          </p>
        </div>
      </div>
      
      <div className={`${cardData.iconBg} px-2 py-2 sm:px-2 sm:py-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center group-hover:bg-white transition-all duration-300 flex-shrink-0`}>
        <IconComponent className={`${cardData.iconColor} w-4 sm:w-5 group-hover:text-purple-500 transition-colors`}/>
      </div>
    </div>
  )
}