"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
// import { useDispatch } from 'react-redux';
// import { setCurrentPage } from'../../utils/Store/features/dataslice';
import Link from 'next/link';

const RiyoLogSection: React.FC = () => {
//   const dispatch = useDispatch();
const router = useRouter();
  const handle = (value: string) => {
    router.push(`/riyologistics/${value}`);
  };

  return (
    <div className="h-[86vh] w-full flex justify-center items-center">
      <div className="h-[75vh] w-[94%] flex justify-center items-center">
        <div className="h-[70vh] w-[45%] relative flex">
          <div className="h-full w-[60%] bg-primary-orange rounded-lg">
            <div className="riyo-services-imgbox2" ></div>
          </div>
        </div>
        <div className="h-[75vh] w-[50%] flex justify-end items-center">
          <div className="h-[90%] w-[90%] flex flex-col gap-4">
            <div className="h-[21%] w-full flex items-center relative">
              {/* <div className="h-[5.25rem] w-[5.25rem] rounded-full bg-gradient-to-r from-primary-darkblue to-primary-orange animate-rotate"></div> */}
              <h1 className="text-[3.7rem] text-primary-darkblue absolute font-bold font-sans">RIYO Logistics</h1>
            </div>
            <div className="h-[84%] w-full flex flex-col gap-4">
              <p className="text-[1.2rem] text-primary-black font-sans leading-[2rem]">
                <span className="text-primary-darkblue font-bold">At</span>
                <span className="font-bold text-primary-orange"> RIYO LOGISTICS,</span> we understand that each journey is unique, and each cargo holds its own set of challenges. That's why our approach is flexible, adaptive, and tailored to meet the specific needs of our clients. From real-time tracking and monitoring to proactive problem-solving, we are with our partners every step of the way, ensuring a hassle-free experience from start to finish.
              </p>
              
                <button onClick={() => handle("riyoLogisticData")} className="h-[4.6rem] w-[15rem] bg-primary-darkblue text-primary-white text-[1.4rem] rounded-md shadow-md border-none cursor-pointer">
                  Know more
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiyoLogSection;
