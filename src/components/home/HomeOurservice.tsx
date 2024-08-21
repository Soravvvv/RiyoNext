"use client";
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from '../../../public/Image/logo/whitelogo.png';
import Icon1 from '../../../public/Image/home/icon1.png';
import Icon2 from'../../../public/Image/home/icon2.png';
import Icon3 from '../../../public/Image/home/icon3.png';
import Icon4 from '../../../public/Image/home/man.png';

const HomeOurservice: FC = () => {
    return (
        <div className="relative bg-primary-white text-center py-8 px-4 lg:px-16 mt-4 bg-gradient-to-b from-primary-blue via-primary-blue to-primary-orange text-primary-white">
            <Image src={Logo} alt="Background Logo" className="absolute right-0 w-32 lg:w-[25.6875rem] h-[94%] opacity-30 z-10" />

            <div className="flex flex-col lg:flex-row-reverse h-full">
                <div className="text-start w-full lg:w-[70%] h-full relative pb-4">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="text-2xl lg:text-[3rem] font-bold"
                    >
                        Our Services
                    </motion.h1>
                    <div className="w-[50%] lg:w-[30%] h-2 rounded bg-gradient-to-r from-primary-orange to-primary-blue mt-2 mb-4"></div>
                    <div className="relative z-20">
                        <p className="relative z-20 text-sm lg:text-base leading-6 lg:leading-7">
                            At RIYO, we take pride in our diverse range of services, meticulously crafted to meet the unique requirements of each client. Understanding the pivotal roles within the logistics industry, we have developed a comprehensive suite of offerings tailored to address the specific needs of various stakeholders. From manufacturers to shippers to carriers, we cater to a broad spectrum of clients, ensuring that every aspect of their operations is seamlessly supported. We firmly believe that the smooth operation of vehicles on the road hinges upon the synchronized functioning of all components. With this ethos in mind, we have curated specialized services designed to optimize performance and foster collaboration across the industry.
                        </p>
                        <Link href="/RiyoServices">
                            <button className="mt-7 py-2 lg:py-3 px-3 lg:px-4 rounded bg-primary-blue hover:bg-orange-500 text-primary-white transition-all relative z-20">
                                Know More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 w-full lg:w-[50%] md:flex flex-col lg:flex-row lg:gap-8  hidden">
                    <div className="flex justify-center lg:justify-start items-center relative">
                        <div className="flex flex-col justify-between items-center h-full absolute w-full">
                            <div className="bg-primary-blue w-10 h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center shadow-md">
                                <Image src={Icon1} alt="RIYO Logistics Icon" className="w-4 lg:w-5 h-4 lg:h-5" />
                            </div>
                            <div className="bg-primary-blue w-10 h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center shadow-md">
                                <Image src={Icon3} alt="RIYO Business Icon" className="w-4 lg:w-5 h-4 lg:h-5" />
                            </div>
                            <div className="bg-primary-blue w-10 h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center shadow-md">
                                <Image src={Icon2} alt="RIYO Surakhsha Icon" className="w-4 lg:w-5 h-4 lg:h-5" />
                            </div>
                            <div className="bg-primary-blue w-10 h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center shadow-md">
                                <Image src={Icon4} alt="RIYO Parivaar Icon" className="w-4 lg:w-5 h-4 lg:h-5" />
                            </div>
                        </div>
                        <div className="w-0.5 h-full bg-primary-white"></div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-0 justify-between items-start lg:items-center">
                        <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Logistics</p>
                        <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Business</p>
                        <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Surakhsha</p>
                        <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Parivaar</p>
                    </div>
                </div>
            </div>

            {/* Mobile responsive section */}
            <div className="flex flex-col lg:hidden mt-6">
                <div className="flex justify-around items-center">
                    <div className="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center shadow-md">
                        <Image src={Icon1} alt="RIYO Logistics Icon" className="w-4 h-4" />
                    </div>
                    <div className="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center shadow-md">
                        <Image src={Icon3} alt="RIYO Business Icon" className="w-4 h-4" />
                    </div>
                    <div className="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center shadow-md">
                        <Image src={Icon2} alt="RIYO Surakhsha Icon" className="w-4 h-4" />
                    </div>
                    <div className="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center shadow-md">
                        <Image src={Icon4} alt="RIYO Parivaar Icon" className="w-4 h-4" />
                    </div>
                </div>
                <div className="mt-4 flex md:flex-col items-center">
                    <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Logistics</p>
                    <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Business</p>
                    <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Surakhsha</p>
                    <p className="text-base lg:text-2xl font-bold text-primary-white">RIYO Parivaar</p>
                </div>
            </div>
        </div>
    );
};

export default HomeOurservice;
