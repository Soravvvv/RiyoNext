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
    <div className="px-[4%] py-[2%] h-auto">
      {/* Title Section */}
      <div className="text-3xl sm:text-5xl mt-10 text-primary-blue">
        <h1><Bounce>Other Benefits</Bounce></h1>
        <div className="mt-[2%] w-[8rem] sm:w-[10rem] h-[0.3rem] bg-gradient-to-r from-primary-orange to-primary-blue rounded-[0px_100px_100px_0px]"></div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex w-full h-auto relative mt-20 mb-10 justify-between">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
          <div
            key={index}
            className="p-[1%] w-[15%] py-[2%] bg-primary-blue_tranparent rounded-lg transition-transform duration-500 hover:scale-110 flex flex-col items-center"
          >
            <div className="flex items-center justify-center w-[70%] h-[60%] bg-primary-blue rounded-lg">
              <Image src={logo} alt={`Logo ${index + 1}`} className="h-[50%]" />
            </div>
            <p className="text-primary-blue mt-[6%] font-semibold text-[18px] text-center">
              {logisticAllData?.logos[index]}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden flex-wrap justify-between w-full h-auto mt-[3%]">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
          <div
            key={index}
            className="w-[48%] mb-6 flex flex-col bg-primary-blue_tranparent items-center rounded-lg transition-transform duration-500 hover:scale-110"
          >
            <div className="flex items-center justify-center w-[60%] h-[50%] bg-primary-blue rounded-lg mt-5">
              <Image src={logo} alt={`Logo ${index + 1}`} className="h-[50%]" />
            </div>
            <p className="text-primary-blue mt-4 font-semibold text-[1rem] mb-3 text-center">
              {logisticAllData?.logos[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RiyoLogo;
