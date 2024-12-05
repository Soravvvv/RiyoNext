"use client";
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import Logo from '../../../public/Image/riyologistics/Vector (4).svg';

import RIYOBusinessQR from "../../../public/Image/riyobusiness/RiyoBusiness QR.png";
import RIYOLogisticsQR from "../../../public/Image/riyologistics/riyo logistics QR.png";
import RIYOShurakhshaQR from "../../../public/Image/riyosurakhsha/riyo suraksha QR.png";
import RIYOParivaarQR from "../../../public/Image/riyoparivaar/riyo parivaar QR.png";

interface RiyoSignUpProps {
  logisticAllData: {
    joinNowParagraph: string;
    link: string;
  };
}

const RiyoSignUp: React.FC<RiyoSignUpProps> = ({ logisticAllData }) => {
  const [image, setImage] = useState<string>(RIYOLogisticsQR);

  return (
    <div className="px-4 py-0">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-start mt-10 font-medium text-primary-blue">
          How To SignUp?
        </h1>
        <div className="w-24 sm:w-36 h-1 bg-gradient-to-r from-primary-orange to-primary-blue rounded-full mt-4 sm:mt-7 mb-8 sm:mb-10"></div>
      </div>

      <div className=" flex flex-col  gap-5 mt-8">
        <div className="grid grid-cols-[1fr_1fr] md:flex md:flex-col lg:flex-row w-full lg:w-7/12">
          {[1000, 2000, 3000, 4000].map((duration, index) => (
            <Slide direction="right" duration={duration} key={index}>
              <div className="p-1 bg-primary-black rounded-lg w-[70%] lg:w-[80%] h-[250px] sm:h-[300px] lg:h-[350px] flex justify-center relative mb-6 lg:mb-0">
                <img
                  src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg"
                  alt="Screenshot"
                  className="rounded-xl object-cover w-full h-full"
                />
                <div className="absolute top-1 h-5 w-1/2 bg-primary rounded-b-lg flex justify-center items-center">
                  <img
                    src="https://img.freepik.com/free-photo/speakers-with-extremely-high-volume-blue-background_23-2149625677.jpg"
                    alt="Notch"
                    className="h-2 rounded"
                  />
                </div>
              </div>
            </Slide>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between py-5 w-full lg:w-full lg:pl-4 mt-8 lg:mt-0">
          <div className="w-full lg:w-full mb-10">
            <Slide>
              <div className="flex flex-row items-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-7 font-medium text-primary-orange">
                  Join Now
                </h1>
                <Image src={Logo} alt="Logo" className="mt-7 ml-3 w-[1.2em]" />
              </div>
            </Slide>
            <p className="mt-4 sm:mt-7 text-primary-grey text-lg sm:text-xl w-full">
              {logisticAllData?.joinNowParagraph}
            </p>
          </div>

          <div className="flex flex-col items-center w-full lg:w-1/2 text-center">
            <h2 className="pb-3 font-semibold text-2xl sm:text-3xl text-primary-grey">
              Scan QR
            </h2>
            <div className="rounded-lg p-4 sm:p-6 bg-primary-clr_qr h-24 w-24 sm:h-30 sm:w-32 relative">
              <Image src={image} alt="QR Code" className="h-full w-full " />
            </div>
            <div className="flex flex-col items-center mt-4 lg:hidden">
              <a href={logisticAllData?.link} className="text-primary-blue underline mt-2">
                Click to Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiyoSignUp;
