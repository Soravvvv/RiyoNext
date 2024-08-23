"use client";
import React from 'react';

const HomeForm: React.FC = () => {
    return (
        <div className="w-full md:h-[50vh] h-[80vh] p-3 md:p-0  bg-primary-blue_tranparent bg-opacity-50 flex flex-col md:justify-center items-center ">
            <div className="w-full flex flex-col justify-center md:py-2 md:items-center">
                <h1 className="text-primary-blue font-bold text-xl md:text-4xl">See What&apos;s Happening at RIYO!!</h1>
                <div className="w-1/5 h-2 rounded-md bg-gradient-to-r from-[#ee6c4d] to-[#0c4c78] my-3"></div>
            </div>

            <div className="w-full h-[60vh] flex justify-around gap-2 md:items-center flex-col md:flex-row">
                <div className="md:w-[15%] flex flex-col justify-center items-center">
                    <span className="text-primary-orange text-2xl font-medium">Subscribe</span>
                    <p className="text-primary-blue text-xl font-medium mt-3 mb-5">To our newsletter</p>
                </div>

                <div className="md:w-[20%] h-[150px] flex flex-col">
                    <p className="text-[#505050] text-2xl font-medium hidden md:block">Name <span className="text-primary-orange">*</span></p>
                    <div className="w-full h-[60px] mt-3 flex border-l-4 border-[#0C4C78] rounded-lg">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="md:w-[95%] h-full px-4 outline-none rounded-r-lg w-[100%]"
                        />
                    </div>
                </div>

                <div className="md:w-[20%] h-[150px] flex flex-col">
                    <p className="text-[#505050] text-2xl font-medium hidden md:block">Email <span className="text-primary-orange">*</span></p>
                    <div className="w-full h-[60px] mt-3 flex border-l-4 border-[#0C4C78] rounded-lg">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="md:w-[95%] h-full px-4 outline-none rounded-r-lg w-[100%]"
                        />
                    </div>
                </div>

                <div className="md:w-[20%] h-[150px] flex flex-col  md:block">
                    <p className="text-[#505050] text-2xl font-medium">Phone <span className="text-primary-orange">*</span></p>
                    <div className="w-full h-[60px] mt-3 flex border-l-4 border-[#0C4C78] rounded-lg">
                        <input
                            type="text"
                            placeholder="Enter Your Phone Number"
                            className="md:w-[95%] h-full px-4 outline-none rounded-r-lg w-[100%]"
                        />
                    </div>
                </div>

                <div className="md:w-[15%] h-[140px] flex items-center">
                    <button className="w-[174px] h-[60px] rounded-lg bg-[#0C4C78] text-primary-white text-lg font-medium mb-3">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeForm;
