import React, { Children } from 'react'

interface HeroSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({leftContent, rightContent, className=''}) => {
  return (
    <div>
      {/* <div className="{`w-full ${className}`}"> */}
        <div className={`w-full ${className} mx-auto flex flex-wrap lg:flex-nowrap gap-4 px-[120px] py-[70px] items-center justify-between`}>
          <div className='w-full lg:w-[70%]'>
          {leftContent}
          </div>
          <div className='w-full lg:w-[85%]'>
          {rightContent}
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default HeroSection