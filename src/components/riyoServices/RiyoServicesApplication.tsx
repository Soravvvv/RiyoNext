"use client";
import React from 'react';
import Image from 'next/image';
import RIYOBusinessQR from '../../../public/Image/riyobusiness/RiyoBusiness QR.png';
import RIYOLogisticsQR from '../../../public/Image/riyologistics/riyo logistics QR.png';
import RIYOShurakhshaQR from '../../../public/Image/riyosurakhsha/riyo suraksha QR.png';
import RIYOParivaarQR from '../../../public/Image/riyoparivaar/riyo parivaar QR.png';
import image from '../../../public/Image/image/Group 2914 (1).svg';
const RiyoServicesApplication: React.FC = () => {
    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="md:h-[50vh] md:w-[88%] px-4">
                <p className="text-2xl font-semibold text-primary-darkblue mb-8">RIYO Application is now available for download on Play Store.</p>

                <div className="flex  md:justify-between md:items-center md:w-full md:h-[40vh] xs:w-full">

                    <div className="md:w-[83%] grid grid-cols-2 gap-4 px-4 md:flex justify-between items-center w-[60%]">

                        <div className="flip-card ">
                            <div className="flip-card-inner  ">
                                <div className="flip-card-front ">
                                    <Image src={RIYOParivaarQR} alt="RIYO Parivaar" height={200} width={200} />
                                    <p className="md:text-lg text-xs text-primary-darkblue">RIYO Parivaar</p>
                                </div>
                                <div className="flip-card-back bg-primary-orange">
                                    <p className="text-base font-bold text-primary-white xs:text-xs">RIYO Parivar</p>
                                    <p className="text-sm text-primary-white">For Lorry Driver</p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image src={RIYOLogisticsQR} alt="RIYO Logistic" height={200} width={200} />
                                    <p className="md:text-lg text-xs text-primary-darkblue">RIYO Logistic</p>
                                </div>
                                <div className="flip-card-back bg-primary-orange">
                                    <p className="text-base font-bold text-primary-white">RIYO Logistic</p>
                                    <p className="text-sm text-primary-white">For Industry And Transport Company</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image src={RIYOBusinessQR} alt="RIYO Business" height={200} width={200} />
                                    <p className="md:text-lg text-xs text-primary-darkblue">RIYO Business</p>
                                </div>
                                <div className="flip-card-back bg-primary-orange">
                                    <p className="text-base font-bold text-primary-white">RIYO Business</p>
                                    <p className="text-sm text-primary-white">For Lorry Broker</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image src={RIYOShurakhshaQR} alt="RIYO Surakhsha" height={200} width={200} />
                                    <p className="md:text-lg text-xs text-primary-darkblue">RIYO Surakhsha</p>
                                </div>
                                <div className="flip-card-back bg-primary-orange">
                                    <p className="text-base font-bold text-primary-white">RIYO Surakhsha</p>
                                    <p className="text-sm text-primary-white">For Lorry Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:h-[35vh] md:w-[15%] w-[40%] flex justify-center items-center   ">
                        <Image src={image} alt="RIYO Logo" layout="responsive" height={200} width={200}/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default RiyoServicesApplication;
