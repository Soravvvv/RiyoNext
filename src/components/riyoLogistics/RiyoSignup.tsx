"use client";
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
// import { useSelector } from 'react-redux';
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
  // const currentPage = useSelector((state: any) => state.Data.currentPage);
  const [image, setImage] = useState<string>(RIYOLogisticsQR);

  // useEffect(() => {
  //   if (currentPage === "RiyoBusinessData") {
  //     setImage(RIYOBusinessQR);
  //   } else if (currentPage === "RiyoShurakhshaData") {
  //     setImage(RIYOShurakhshaQR);
  //   } else if (currentPage === "RiyoParivaarData") {
  //     setImage(RIYOParivaarQR);
  //   } else { 
  //     setImage(RIYOLogisticsQR);
  //   }
  // }, [currentPage]);

  return (
    <div className="px-4 py-0">
      <div className="text-center">
        <h1 className="text-5xl text-start mt-10 font-medium text-primary-blue">How To SignUp?</h1>
        <div className="w-36 h-1 bg-gradient-to-r from-primary-orange to-primary-blue rounded-full mt-7 mb-10"></div>
      </div>

      <div className="flex flex-col gap-5 mt-8">
        <div className="flex lg:w-7/12">
          {[1000, 2000, 3000, 4000].map((duration, index) => (
            <Slide direction="right" duration={duration} key={index}>
              <div className="p-1 bg-primary-black rounded-lg w-[80%] h-[350px] flex justify-center">
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

        <div className="flex flex-row lg:flex-row items-center justify-between py-5 w-full lg:w-full lg:pl-4 mt-8 lg:mt-0">
          <div className="w-full mb-10 lg:w-full">
            <Slide>
              <div className="flex flex-row">
                <h1 className="text-4xl mt-7 font-medium  text-primary-orange">Join Now</h1>
                <Image src={Logo} alt="Logo"   className=" mt-7 ml-3 w-[1.2em]" />
              </div>
            </Slide>
            <p className="mt-7 text-primary-grey text-xl w-full  ">
              {logisticAllData?.joinNowParagraph}
            </p>
          </div>

          <div className="flex flex-col items-center w-full lg:w-1/2 text-center">
            <h2 className="pb-3 font-semibold text-3xl text-primary-grey">Scan QR</h2>
            <div className="rounded-lg p-6 bg-primary-clr_qr h-30 w-32 relative">
              <Image src={image} alt="QR Code" className="h-full w-full " />
            </div>
            <div className="flex flex-col items-center mt-4 lg:hidden">
              {/* <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Download"
                height={100} width={100}
                className="h-12"
              /> */}
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
