"use client";
import React from 'react';

const AboutBusiness: React.FC = () => {
  return (
    <>
      <div className="custom-background">
        <div className="h-[10vh] w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-primary-white text-[2rem] md:text-[4.2rem] font-Arial">About Us</h1>
          <p className="text-primary-white text-[1rem] md:text-[1.2rem] font-Arial">
            Home {'>'} <span className="text-primary-orange">AboutUs</span>
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row py-8 md:py-20 bg-primary-white">
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:pl-[3.5rem]">
          <div className="w-[90%]">
            <p className="text-primary-orange text-[1.4rem] md:text-[1.6rem] font-Arial">
              About RIYO Business
            </p>
            <h5 className="text-[1.4rem] md:text-[1.6rem] mt-4 font-Arial text-primary-darkblue">
              WHAT MADE RIYO COME TO LIFE?
            </h5>
            <div className="h-[0.25rem] w-[20%] md:w-[10%] rounded-full mt-4 bg-gradient-to-r from-primary-orange to-primary-darkblue"></div>
            <p className="text-[1rem] md:text-[1.2rem] mt-[1.5rem] md:mt-[2.1rem] leading-6 md:leading-8 font-Arial text-primary-black">
              At RIYO, our mission is to revolutionize logistics through seamless technological integration. Leveraging the Riyo app, we connect industry segments, simplify operations, and optimize efficiency. Eco-system to transportation drivers and logistics-dependent industries, our platform fosters cohesion and streamlines operations. We unite stakeholders, distribute workloads, and enhance overall effectiveness. Dedicated to industry advancement, we cultivate collaboration and innovation. Our goal is to facilitate seamless interaction, driving improvement in logistics management.
            </p>
            <button className="h-[5vh] md:h-[6.6vh] w-[60%] md:w-[39%] rounded-[.4375rem] mt-8 md:mt-12 font-Arial border-none cursor-pointer text-primary-black bg-primary-white flex justify-center items-center font-semibold shadow-lg hover:bg-primary-orange hover:text-primary-white transition duration-1000">
              View Our Service
              <div className="h-[5vh] md:h-[70%] w-[10%] md:w-[12%] rounded-full bg-primary-darkblue ml-[1rem] md:ml-[1.875rem] flex items-center justify-center text-primary-white transform hover:rotate-45 transition duration-1000">
                <p className="text-[1.2rem] md:text-[1.5rem]">&#x2197;</p>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="h-[50vh] md:h-[60vh] w-[90%] md:w-[80%] flex flex-wrap gap-[1rem] md:gap-[2.1875rem] justify-end">
            <div className="h-[24vh] md:h-[60vh] w-[45%] md:w-[35%] rounded-[0.5rem] flex flex-col gap-[1rem] md:gap-[1.5625rem] justify-end">
              <div className="custom-image-box h-[12vh] md:h-[30vh]"></div>
              <div className="custom-image-box2 h-[12vh] md:h-[30vh]"></div>
            </div>
            <div className="h-[24vh] md:h-[60vh] w-[45%] md:w-[35%] rounded-[0.5rem] flex flex-col gap-[1rem] md:gap-[1.5625rem] justify-start">
              <div className="custom-image-box3 h-[12vh] md:h-[30vh]"></div>
              <div className="custom-image-box4 h-[12vh] md:h-[30vh]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBusiness;
