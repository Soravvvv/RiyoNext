"use client";
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
// import { useSelector } from 'react-redux';
import Logo from '../../../public/Image/riyologistics/packagelogo.svg';

interface LogisticData {
  Parivahan: {
    Heading: string;
    subHeading: string;
    card1: {
      topHeading: string;
      lines: string[];
      bottomHeading: string;
    };
    card2: {
      topHeading: string;
      lines: string[];
      bottomHeading: string;
    };
  };
}

interface RiyoPackageProps {
  logisticAllData: LogisticData | undefined;
}

const RiyoPackage: React.FC<RiyoPackageProps> = ({ logisticAllData }) => {
  const [hidecard, setHidecard] = useState<boolean>(true);
  const [hidecards, setHidecards] = useState<boolean>(true);

  return (
    <div className="p-8 flex items-center min-h-[100vh] bg-gradient-to-r from-primary-orange to-primary-blue flex-col lg:flex-row">
      {/* Heading Section */}
      <div className="w-full lg:w-2/5 flex flex-col text-primary-white font-bold mb-8 lg:mb-0">
        <Slide>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-10xl font-medium text-primary-blue text-left">
            {logisticAllData?.Parivahan.Heading}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3.6xl xl:text-4xl 2xl:text-5xl font-normal">
            {logisticAllData?.Parivahan.subHeading}
          </h2>
        </Slide>
      </div>

      {/* Cards Section */}
      <div className="w-full lg:w-3/5 flex flex-col lg:flex-row gap-8">
        {hidecard && (
          <div className="w-full lg:w-[46%] bg-primary-white relative rounded-lg mb-8 lg:mb-0">
            <div className="bg-primary-orange rounded-t-lg py-4 text-center font-bold text-primary-white">
              <h3 className="font-semibold">{logisticAllData?.Parivahan.card1.topHeading}</h3>
            </div>
            {logisticAllData?.Parivahan.card1.lines.map((res, index) => (
              <div key={index} className="p-3 flex items-center gap-3 text-gray-700">
                <Image src={Logo} alt="Package Logo" className="h-5" />
                <p className="font-normal">{res}</p>
              </div>
            ))}
            <div className="bg-primary-blue rounded-b-lg py-4 text-center font-bold text-primary-white absolute bottom-0 w-full">
              <h3>{logisticAllData?.Parivahan.card1.bottomHeading}</h3>
            </div>
          </div>
        )}
        {hidecards ? (
          <div className="w-full lg:w-[46%] bg-primary-white relative rounded-lg">
            <div className="bg-primary-orange rounded-t-lg py-4 text-center font-bold text-primary-white">
              <h3 className="font-semibold">{logisticAllData?.Parivahan.card2.topHeading}</h3>
            </div>
            {logisticAllData?.Parivahan.card2.lines.map((res, index) => (
              <div key={index} className="p-3 flex items-center gap-3 text-primary-grey">
                <Image src={Logo} alt="Package Logo" className="h-5" />
                <p className="font-normal">{res}</p>
              </div>
            ))}
            <div className="bg-primary-blue rounded-b-lg py-4 text-center font-bold text-primary-white absolute bottom-0 w-full">
              <h3>{logisticAllData?.Parivahan.card2.bottomHeading}</h3>
            </div>
          </div>
        ) : (
          <h1 className="text-primary-white">Coming Soon!</h1>
        )}
      </div>
    </div>
  );
};

export default RiyoPackage;
