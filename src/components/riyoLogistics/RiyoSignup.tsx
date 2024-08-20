"use client";
import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Logo from '../../../public/Image/riyologistics/Vector (4).svg';
import Image from 'next/image';
// import { useSelector } from 'react-redux';
import RIYOBusinessQR from "../../../public/Image/riyobusiness/RiyoBusiness QR.png";
import RIYOLogisticsQR from "../../../public/Image/riyologistics/riyo logistics QR.png";
import RIYOShurakhshaQR from "../../../public/Image/riyosurakhsha/riyo suraksha QR.png";
import RIYOParivaarQR from "../../../public/Image/riyoparivaar/riyo parivaar QR.png";

interface LogisticAllData {
  joinNowParagraph: string;
  link: string;
}

interface RiyoSignUpProps {
  logisticAllData?: LogisticAllData;
}

const RiyoSignUp: React.FC<RiyoSignUpProps> = ({ logisticAllData }) => {
//   const currentPage = useSelector((state: any) => state.Data.currentPage);
  const [image, setImage] = useState(RIYOLogisticsQR);

//   useEffect(() => {
//     switch (currentPage) {
//       case "RiyoBusinessData":
//         setImage(RIYOBusinessQR);
//         break;
//       case "RiyoShurakhshaData":
//         setImage(RIYOShurakhshaQR);
//         break;
//       case "RiyoParivaarData":
//         setImage(RIYOParivaarQR);
//         break;
//       default:
//         setImage(RIYOLogisticsQR);
//     }
//   }, [currentPage]);

  return (
    <div className="px-4 py-0">
      <div className="text-4xl font-semibold text-primary-blue">
        <h1>How To SignUp?</h1>
        <div className="w-36 h-1 bg-gradient-to-r from-primary-orange to-primary-blue rounded-full mt-1"></div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-8">
        <div className="flex gap-0 sm:gap-2 w-full sm:w-7/10">
          <Slide direction="right" duration={1000}>
            <div className="p-1 bg-primary-black rounded-lg flex justify-center items-center w-full sm:w-7/10 h-80">
              {/* <Image
                src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?t=st=1715441655~exp=1715445255~hmac=e68feaed46fd174c3793e76eccf94e4da21f92e75448a72cb2f3256dba6f6958&w=996"
                className="rounded-lg object-cover w-full h-full"
                alt=""
              /> */}
              <div className="absolute top-1 left-1 right-1 flex items-center justify-center h-6 w-2/4 bg-primary-black rounded-b-lg">
                <center>
                  {/* <Image
                    src="https://img.freepik.com/free-photo/speakers-with-extremely-high-volume-blue-background_23-2149625677.jpg?t=st=1714551444~exp=1714555044~hmac=5eecd16ca2ee9eb1e87f55f672d3b6fecf6919304e3cbf5542047db74f6bb932&w=740"
                    className="h-2.5"
                    alt=""
                  /> */}
                </center>
              </div>
            </div>
          </Slide>
          {/* Repeat Slide blocks for other images */}
        </div>
        <div className="flex flex-col items-center sm:items-start gap-4 mt-8 sm:mt-0 sm:ml-4">
          <div className="flex flex-col gap-2 text-lg text-primary-orange font-semibold text-center sm:text-start">
            <h1>Join Now</h1>
            <Image src={Logo} alt="" className="mt-3"/>
          </div>
          <p className="mt-3 text-gray-700 leading-8 text-base">
            {logisticAllData?.joinNowParagraph}
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-4 mt-8 sm:mt-0">
          <h2 className="font-semibold text-lg">Scan QR</h2>
          <div className="flex justify-center items-center p-4 bg-gray-300 rounded-lg w-2/4 h-24">
            <Image src={image} alt="QR Code" className="h-full" />
          </div>
          <div className="hidden sm:flex flex-col items-center justify-center">
            {/* <Image
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt=""
              className="h-12"
            /> */}
            <a href={logisticAllData?.link} className="text-primary-blue mt-2">
              Click to Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiyoSignUp;
