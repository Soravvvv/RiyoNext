"use client";
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import Image from 'next/image';
import Vector1 from '../../../public/Image/home/Vector (1).png';
import Vector2 from '../../../public/Image/home/Vector (2).png';
import Vector3 from '../../../public/Image/home/Vector (3).png';

const HomeGetTouch: React.FC = () => {
    return (
        <div className="w-full h-[60vh] z-4 flex justify-around items-center relative bg-gradient-to-b from-primary-orange to-primary-blue_tranparentGetintouch md:flex-row flex-col">
            <div className="md:w-1/2 flex items-center text-primary-white md:text-6xl text-[5vh] px-8 ml-5">
                <h1 className="font-semibold">
                    <Bounce>Get in Touch</Bounce>
                </h1>
            </div>
            <div className="md:w-1/2 h-1/2 flex justify-around items-center">
                <div className="w-full h-full">
                    <div className="flex gap-5 items-center">
                        <a href="tel:03335561099" className="flex gap-4 items-center no-underline">
                            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-b from-[#df510c] to-[#0c2c78]">
                                <Image src={Vector1} alt="Phone Icon" width={20} height={20} />
                            </div>
                            <p className="text-[1.375rem] font-light text-primary-white">033 35561099</p>
                        </a>
                    </div>
                    <div className="flex gap-5 items-center mt-4">
                        <a href="mailto:Hello@riyorentitoverindia.com" className="flex gap-4 items-center no-underline">
                            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-b from-[#df510c] to-[#0c2c78]">
                                <Image src={Vector2} alt="Email Icon" width={20} height={20} />
                            </div>
                            <p className="text-[1.375rem] font-light text-primary-white">Hello@riyorentitoverindia.com</p>
                        </a>
                    </div>
                    <div className="flex gap-5 items-center mt-4">
                        <div className="p-4 rounded-full bg-gradient-to-b from-[#df510c] to-[#0c2c78]">
                            <Image src={Vector3} alt="Location Icon" width={20} height={20} />
                        </div>
                        <p className="text-[1.375rem] font-light text-primary-white">
                            2nd Floor SK Tower, Behind Reliance Market, Niranjanpur, Mandi, Dehradun, UK, 248001, India
                        </p>
                    </div>
                </div>
                <div className=" ImageContact">
                    {/* <Image src={ImageContact} alt="Get in Touch Logo" layout="fill" objectFit="contain" /> */}
                </div>
            </div>
        </div>
    );
};

export default HomeGetTouch;
