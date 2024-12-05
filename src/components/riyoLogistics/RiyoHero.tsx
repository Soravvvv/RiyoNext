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
    return <div>Loading...</div>; // Replace with a proper loading state or a fallback UI if needed
  } else {
    console.log("Data1234::::", logisticAllData);
  }

  return (
    <div className="RiyoLogisticsHero">
      <div className="flex items-center justify-center bg-primary-black/20 h-full">
        <div className="text-primary-white p-[8%_2%] flex items-center justify-center w-[90%] sm:w-[80%] h-[35%] sm:h-[45%] lg:h-[25%] bg-gradient-to-b from-primary-blue to-primary-orange rounded-[1rem]">
          <div className="flex flex-col gap-[1rem] sm:gap-[2rem]">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[6rem] flex flex-wrap justify-center sm:justify-start">
              <Bounce>
                <span className="font-bold">{logisticAllData.heading}</span>
                <span className="pl-[4px] sm:pl-[8px] font-light">{logisticAllData.heading2}</span>
              </Bounce>
            </h1>
            <p className="text-center sm:text-right font-medium text-[0.75rem] sm:text-[0.625rem] lg:text-[1rem] mt-[-1rem] sm:mt-[-1.5rem]">
              {logisticAllData.description}
            </p>
          </div>
          <div className="absolute top-[22.3%] left-[10%] h-[15%] sm:h-[30%] w-[8%] sm:w-[13%]">
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
