"use client";
import React from 'react';
import { Bounce } from 'react-awesome-reveal';

interface RiyoHeroProps {
  logisticAllData?: {
    heading: string;
    heading2: string;
    description: string;
  };
}

const RiyoHero: React.FC<RiyoHeroProps> = ({ logisticAllData }) => {
  if (!logisticAllData) {
  
    return <div>Loading...</div>; // You can replace this with a proper loading state or a fallback UI
  }else{
    console.log("Data1234::::",logisticAllData);
  }

  return (
    <div className="RiyoLogisticsHero">
      <div className="flex items-center justify-center bg-primary-black/20 h-full">
        <div className="text-primary-white p-[8%_2%] flex items-center justify-center w-[80%] h-[45%] sm:h-[25%] bg-gradient-to-b from-primary-blue to-primary-orange rounded-[1rem]">
          <div className="flex flex-col gap-[2rem]">
            <h1 className="flex text-[5rem] sm:text-[2rem] lg:text-[6rem]">
              <Bounce>
                <span className="font-bold">{logisticAllData.heading}</span>
                <span className="pl-[8px] font-light">{logisticAllData.heading2}</span>
              </Bounce>
            </h1>
            <p className="text-right font-medium sm:text-[10px] lg:text-[1rem] sm:mt-[-1.5rem]">
              {logisticAllData.description}
            </p>
          </div>
          <div className="absolute top-[22.3%] left-[10%] h-[30%] w-[13%]">
            <div className="flex justify-evenly h-full w-full">
              {[...Array(18)].map((_, index) => (
                <div key={index} className="h-full w-[0.0063rem] bg-primary-orange opacity-40"></div>
              ))}
            </div>
            <div className="absolute top-0 flex flex-col justify-evenly h-full w-full">
              {[...Array(14)].map((_, index) => (
                <div key={index} className="h-[0.0063rem] w-full bg-primary-orange opacity-40"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiyoHero;
