"use client";
import { FC } from 'react';
import { Bounce } from 'react-awesome-reveal';
// import Image from 'next/image';
import Link from 'next/link';

const HomeAboutUs: FC = () => {
    return (
        <div className="w-[100%] md:h-[60vh] h-full flex  bg-primary-white py-8 px-[4%] my-[1%] justify-between md:flex-row-reverse flex-col">

            <div className="md:w-1/3 flex items-center justify-around relative h-[20vh] py-4 px-2 md:p-0 w-full md:h-auto order-2 md:order-1">
                <div className="w-[38%] md:h-[38%] absolute top-0 left-0"></div>
                <div className="w-[38%] md:h-[38%] absolute bottom-0 right-0"></div>
                <div className="w-[100%] h-full items-center flex justify-between  gap-[1%]">    
                    <div className="w-1/2 h-full flex flex-col items-center justify-between gap-1 ">
                        <div className=" image1  w-full h-1/2 object-cover" ></div>
                        <div className=" homeAboutImage  w-full h-1/2 object-cover"></div>
                    </div>
                    <div className="w-1/2 h-full overflow-hidden flex flex-col relative gap-[1%] image3 rounded-md"></div>

                </div>
            </div>

            <div className="md:w-[60%] md:p-[1%_2%] w-[100%] order-1 md:order-2">
                <div>
                    <Bounce>
                        <h1 className="md:text-5xl text-2xl text-primary-blue">About Us</h1>
                    </Bounce>
                    <div className="w-1/5 h-2 bg-gradient-to-r from-[#ee6c4d] to-[#0c4c78] rounded-lg mb-5 mt-2"></div>
                </div>
                <p className="text-primary-grey leading-6">
                    At RIYO, our mission is to revolutionize the logistics ecosystem through seamless integration of cutting-edge technology. With the RIYO App, we aim not only to bridge the gap between all stakeholders in the industry but also to simplify their daily operations, making tasks more manageable and efficient. Operating across every facet of the sector, from commercial vehicle drivers to industries utilizing logistics services, we strive to bring together all key players onto a unified platform. Our objective is to empower them to streamline their workflows and enhance productivity.
                </p>
                <Link href="/about">
                    <button className="bg-primary-blue text-primary-white py-3 px-6 rounded-md transition duration-600 hover:bg-primary-orange mt-5">Know More</button>
                </Link>
            </div>

        </div>
    );
}

export default HomeAboutUs;
