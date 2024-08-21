"use client";
import React from 'react';

const RiyoServicesMobileApp: React.FC = () => {
  return (
    <div className="h-auto md:h-[35vh] w-full flex items-center justify-center p-4 md:p-0">
      <div className="h-auto md:h-[26vh] w-full md:w-[88%]">
        <p className="text-3xl md:text-[4.2rem] font-normal font-['Arial'] text-primary-darkblue">
          RIYO Mobile App
        </p>
        <div className="h-[2px] md:h-[2%] w-[30%] md:w-[10%] rounded-full mt-4 md:mt-10 bg-gradient-to-r from-[#ee6c4d] to-[#0c4c78]"></div>
        <p className="text-base md:text-[1.4rem] text-primary-black mt-4 md:mt-10 mb-6 md:mb-10 font-['Arial'] leading-[1.6rem] md:leading-[2rem]">
          A comprehensive highway assistance solution offering top-notch facilities and services to elevate your highway journey. From dining options to immediate SOS Emergency support, everything you need is at your fingertips. Access the app instantly by scanning the QR code provided or download it directly from the App Store or Play Store.
        </p>
      </div>
    </div>
  );
};

export default RiyoServicesMobileApp;
