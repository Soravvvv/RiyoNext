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
    <div className="relative flex items-center z-3 bg-gradient-to-r from-primary-orange to-primary-blue text-primary-white my-16 py-0 px-16 h-[65vh]">
      <div className="relative z-3 w-3/5">
        <h1 className="text-[6rem] font-semibold">
          <Bounce>{logisticAllData?.contact.heading}</Bounce>
        </h1>
      </div>
      <div className="relative z-3 w-1/2">
        <div className="flex items-center gap-4 z-3">
          <a href={`tel:${logisticAllData?.contact.mobilenumber}`} className="flex items-center gap-4">
            <div className="h-[50px] w-[50px] bg-gradient-to-br from-primary-blue to-primary-orange flex justify-center items-center rounded-full cursor-pointer transition-shadow duration-200 hover:shadow-primary-white">
              <LuPhone size={20} className="text-primary-white" />
            </div>
            <p className="text-lg">{logisticAllData?.contact.mobilenumber}</p>
          </a>
        </div>
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        <br />
        <div className="flex items-center gap-4 z-3">
          <a href={`mailto:${logisticAllData?.contact.email}`} className="flex items-center gap-4">
            <div className="h-[50px] w-[50px] bg-gradient-to-br from-primary-blue to-primary-orange flex justify-center items-center rounded-full cursor-pointer transition-shadow duration-200 hover:shadow-primary-white">
              <CiMail size={20} className="text-white" />
            </div>
            <p className="text-lg">{logisticAllData?.contact.email}</p>
          </a>
        </div>
      </div>
      <div className="absolute right-20 z-2">
        <Image src={Logo} alt="Riyo Logistics Logo" width={150} height={100} />
      </div>
    </div>
  );
};

export default RiyoLogisticsGetInTouch;
