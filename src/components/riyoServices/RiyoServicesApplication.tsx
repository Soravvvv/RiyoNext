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
        <div className="w-full flex justify-center items-center py-32">
            <div className="h-[50vh] w-[88%]">
                <p className="text-2xl font-semibold text-primary-darkblue mb-8">RIYO Application is now available for download on Play Store.</p>
                <div className="flex justify-between items-center h-[40vh]">
                    <div className="w-[83%] flex justify-between items-center">

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image src={RIYOParivaarQR} alt="RIYO Parivaar" height={100} width={200} />
                                    <p className="text-lg">RIYO Parivaar</p>
                                </div>
                                <div className="flip-card-back bg-primary-orange">
                                    <p className="text-base font-bold text-primary-white">RIYO Parivar</p>
                                    <p className="text-sm text-primary-white">For Lorry Driver</p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image src={RIYOLogisticsQR} alt="RIYO Logistic" height={100} width={200} />
                                    <p className="text-lg">RIYO Logistic</p>
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
                                    <Image src={RIYOBusinessQR} alt="RIYO Business" height={100} width={200} />
                                    <p className="text-lg">RIYO Business</p>
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
                                    <Image src={RIYOShurakhshaQR} alt="RIYO Surakhsha" height={100} width={200} />
                                    <p className="text-lg">RIYO Surakhsha</p>
                                </div>
                                <div className="flip-card-back bg-primary-orange">
                                    <p className="text-base font-bold text-primary-white">RIYO Surakhsha</p>
                                    <p className="text-sm text-primary-white">For Lorry Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[35vh] w-[15%] -mt-11">
                        <Image src={image} alt="RIYO Logo" layout="responsive" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiyoServicesApplication;
