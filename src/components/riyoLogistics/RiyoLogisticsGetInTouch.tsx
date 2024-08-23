"use client";
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { LuPhone } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import Image from 'next/image';
import Logo from '../../../public/Image/riyologistics/GetintouchLogo.svg';

interface RiyoLogisticsGetInTouchProps {
  logisticAllData: {
    contact: {
      heading: string;
      mobilenumber: string;
      email: string;
    };
  };
}

const RiyoLogisticsGetInTouch: React.FC<RiyoLogisticsGetInTouchProps> = ({ logisticAllData }) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center z-3 bg-gradient-to-r from-primary-orange to-primary-blue text-primary-white my-16 py-8 px-4 lg:px-16 h-auto lg:h-[65vh]">
      {/* Text Section */}
      <div className="relative z-3 w-full lg:w-3/5 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl mb-3 sm:text-5xl md:text-6xl lg:text-[6rem] font-semibold">
          <Bounce>{logisticAllData?.contact.heading}</Bounce>
        </h1>
      </div>

      {/* Contact Information Section */}
      <div className="relative z-3 w-full lg:w-1/2">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 lg:mb-0">
          <a href={`tel:${logisticAllData?.contact.mobilenumber}`} className="flex items-center gap-4">
            <div className="h-[40px] w-[40px] bg-gradient-to-br from-primary-blue to-primary-orange flex justify-center items-center rounded-full cursor-pointer transition-shadow duration-200 hover:shadow-primary-white">
              <LuPhone size={18} className="text-primary-white" />
            </div>
            <p className="text-[0.8rem] lg:text-lg">{logisticAllData?.contact.mobilenumber}</p>
          </a>
          </div>
          <br className='hidden sm:block'/>
          <br className='hidden sm:block'/>
        <div className="flex flex-col md:flex-row md:items-center gap-4 z-3">
          <a href={`mailto:${logisticAllData?.contact.email}`} className="flex items-center gap-4">
            <div className="h-[40px] w-[40px] bg-gradient-to-br from-primary-blue to-primary-orange flex justify-center items-center rounded-full cursor-pointer transition-shadow duration-200 hover:shadow-primary-white">
              <CiMail size={18} className="text-white" />
            </div>
            <p className="text-[0.8rem] lg:text-lg">{logisticAllData?.contact.email}</p>
          </a>
        </div>
      </div>

      {/* Logo Section */}
      <div className="absolute right-4 lg:right-20 bottom-4 lg:top-[10rem] z-2">
        <Image src={Logo} alt="Riyo Logistics Logo" width={120} height={80} />
      </div>
    </div>
  );
};

export default RiyoLogisticsGetInTouch;
