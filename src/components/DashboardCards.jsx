import { MoveDownRight,BookOpen, MoveUpRight  } from 'lucide-react';


export default function DashboardCards({cardData}){
     const IconComponent = cardData.icon;
  const TrendIcon = cardData.trend === 'up' ? MoveUpRight : MoveDownRight;
  const trendColor = cardData.trend === 'up' ? 'text-green-400 group-hover:text-green-300' : 'text-red-400 group-hover:text-red-300';
    return(
        <div className='group flex font-satoshi rounded-md px-4 py-4 hover:bg-gradient-to-t hover:from-sky-600 hover:to-blue-900 cursor-pointer active:bg-gradient-to-r active:from-purple-500 active:to-pink-500 justify-center items-center gap-6 text-darkestHeading bg-white border border-light-border w-[300px] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 transform'>
    
    <div className='space-y-2'>
        <h1 className='text-2xl font-satoshi group-hover:text-white transition-colors'>{cardData.title}</h1>
        <p className='text-secondary-text text-lg font-medium group-hover:text-white transition-colors'>{cardData.subText}</p>
        <div className='flex items-center'>
          <TrendIcon className={trendColor} />
          <p className='text-sm text-gray-600 group-hover:text-white transition-colors ml-1'>
            <span className={trendColor}>{cardData.percentageChange}</span> since last month
          </p>
        </div>
    </div>
    
    <div className={`${cardData.iconBg} px-2 py-3 w-10 h-10 rounded-full flex justify-center items-center group-hover:bg-white transition-all duration-300`}>
        <IconComponent className={`${cardData.iconColor} w-5 group-hover:text-purple-500 transition-colors`}/>
      </div>
</div>
    )
}