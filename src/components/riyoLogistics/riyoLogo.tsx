"use client";
import React from 'react'
import Image from 'next/image';
import { Bounce } from 'react-awesome-reveal'
import logo1 from '../../../public/Image/riyologistics/Vector.svg'
import logo2 from '../../../public/Image/riyologistics/Vector2.svg'
import logo3 from '../../../public/Image/riyologistics/Vector 3.svg'
import logo4 from '../../../public/Image/riyologistics/Vector 4.svg'
import logo5 from '../../../public/Image/riyologistics/Vector 5.svg'

interface RiyoLogoProps {
  logisticAllData?: {
    logos: string[]
  }
}

const RiyoLogo: React.FC<RiyoLogoProps> = ({ logisticAllData }) => {
  return (
    <div className="px-[4%] py-[2%] h-[50vh] md:h-auto">
      <div className="text-4xl font-light text-primary-blue">
        <h1><Bounce>Other Benefits</Bounce></h1>
        <div className="mt-[2%] w-[10rem] h-[0.3rem] bg-gradient-to-r from-primary-orange to-c rounded-[0px_100px_100px_0px]"></div>
      </div>
      <div className="w-full h-[40%] relative mt-[3%] flex justify-between md:hidden">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
          <div key={index} className="p-[1.4%] w-[15%] h-full bg-primary-blue rounded-lg transition-transform duration-500 hover:scale-110">
            <div className="flex items-center justify-center w-[70%] h-[60%] bg-primary-blue rounded-lg">
              <Image src={logo} alt="" className="h-[50%]" />
            </div>
            <p className="text-primary-blue mt-[6%] font-semibold text-[18px]">{logisticAllData?.logos[index]}</p>
          </div>
        ))}
      </div>

      {/* Mobile responsive */}
      <div className="hidden md:block w-full h-[40%] relative mt-[3%]">
        <div className="flex justify-between w-full">
          {[logo1, logo2, logo3].map((logo, index) => (
            <div key={index} className="relative w-[28%] h-auto flex flex-col items-center justify-center px-[2%]">
              <div className="flex items-center justify-center w-[40%] h-[40%]">
                <Image src={logo} alt="" />
              </div>
              <p className="text-[10px]">{logisticAllData?.logos[index]}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[5%] gap-8">
          {[logo4, logo5].map((logo, index) => (
            <div key={index} className="relative w-[28%] h-auto flex flex-col items-center justify-center px-[2%]">
              <div className="flex items-center justify-center w-[40%] h-[40%]">
                <Image src={logo} alt="" />
              </div>
              <p className="text-[10px]">{logisticAllData?.logos[index + 3]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RiyoLogo
