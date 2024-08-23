"use client";
import { FC } from 'react';
import Image from 'next/image';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';
import rig from '../../../public/Image/image/reg1.jpg'; // Adjust the path according to your structure
import rig1 from '../../../public/Image/image/reg2.png'; // Adjust the path according to your structure

const Download: FC = () => {
  return (
    <>
      <div className="mt-20 text-center text-4xl ">
        <h4 className="text-primary-darkblue md:text-6xl text-4xl font-semibold m-0">How to Register</h4>
      </div>

      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex  md:flex-row justify-start gap-14 items-center  h-4/5 w-11/12">
          <div className="flex flex-col justify-between items-center h-full w-1/5">
            <div className="h-1/4 w-full p-1 border border-primary-black shadow-lg rounded-md">
              <Image src={rig} alt="Register Image 1" className="object-cover h-full w-full" />
            </div>

            <div className="h-1/4 w-full p-1 border border-primary-black shadow-lg rounded-md">
              <Image src={rig1} alt="Register Image 2" className="object-cover h-full w-full" />
            </div>

            <div className="flex flex-col items-center justify-around h-1/4 w-full p-1 border border-primary-black shadow-lg rounded-md">
              <div className="flex justify-center gap-5">
                <div className="flex justify-center items-center h-12 w-12 border-primary-darkblue rounded-full">
                  <BiSolidLike className="text-primary-white text-lg" />
                </div>
                <div className="flex justify-center items-center h-12 w-12 border-primary-darkblue rounded-full">
                  <BiSolidDislike className="text-primary-white text-lg" />
                </div>
              </div>
              <div className="h-10 w-full bg-primary-orange_second_tranparent rounded-lg flex items-center justify-center">
                <p className="text-primary-white text-lg">Subscribe</p>
              </div>
            </div>
          </div>

          <div className="h-full w-[100%] flex  justify-between items-center gap-5">
            <div className="flex flex-col justify-end items-end w-[2%] h-full bg-gradient-to-b from-primary-darkblue to-primary-lightblue rounded-2xl p-4">
              <div className="flex flex-col justify-between items-center h-4/5">
                <div className="flex flex-col justify-between items-center h-full">
                  <div className="flex justify-end relative left-4 top-[-4rem] items-center h-8 w-8  bg-primary-orange rounded-full">
                    <IoMdCheckmark className="text-primary-white text-2xl" />
                  </div>
                  <div className="flex justify-end items-center relative left-4  top-[-4rem] h-8 w-8 bg-primary-orange rounded-full">
                    <IoMdCheckmark className="text-primary-white text-2xl" />
                  </div>
                  <div className="flex justify-end items-center relative left-4 top-[-4rem] h-8 w-8 bg-primary-orange rounded-full">
                    <IoMdCheckmark className="text-primary-white text-2xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center h-full w-full">
              <div className="flex flex-col justify-around h-1/3 w-full">
                <div className="flex flex-col justify-around w-full">
                  <div className="flex justify-center items-center h-16 w-16 bg-primary-orange rounded-full">
                    <h1 className="text-primary-white text-4xl font-medium">1</h1>
                  </div>
                  <h2 className="text-primary-darkblue font-bold text-2xl">Download</h2>
                  <p className="text-sm text-primary-black">Download the app, available on Play Store, App Store, and the Website.</p>
                </div>
              </div>
              <div className="flex flex-col justify-around h-1/3 w-full">
                <div className="flex flex-col justify-around">
                  <div className="flex justify-center items-center h-16 w-16 bg-primary-orange rounded-full">
                    <h1 className="text-primary-white text-4xl font-medium">2</h1>
                  </div>
                  <h2 className="text-primary-darkblue font-bold text-2xl">Fill up the details</h2>
                  <p className="text-sm text-primary-black">Fill up your Personal Information to verify your identity to initiate the process.</p>
                </div>
              </div>
              <div className="flex flex-col justify-around h-1/3 w-full">
                <div className="flex flex-col justify-around">
                  <div className="flex justify-center items-center h-16 w-16 bg-primary-orange rounded-full">
                    <h1 className="text-primary-white text-4xl font-medium">3</h1>
                  </div>
                  <h2 className="text-primary-darkblue font-bold text-2xl">Subscribe</h2>
                  <p className="text-sm text-primary-black">Subscribe to any package to get the best service across Indian highways.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Download;
