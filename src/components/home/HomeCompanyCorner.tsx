"use client";
import React from 'react';
import Slider from 'react-slick';
// import Image from 'next/image';
// import sliderimage1 from '../../../public/Image/home/slider image 1.jpg';
// import sliderimage2 from '../../../public/Image/home/slider image 2.jpg';
// import sliderimage3 from '../../../public/Image/home/slider image 3.jpg';
// import sliderimage4 from '../../../public/Image/home/slider image 4.jpg';
// import sliderimage5 from '../../../public/Image/home/slider image 5.jpg';
// import sliderimage6 from '../../../public/Image/home/slider image 6.jpg';
// import sliderimage8 from '../../../public/Image/home/slider image 8.jpg';
// import sliderimage9 from '../../../public/Image/home/slider image 9.jpg';
// import sliderimage11 from '../../../public/Image/home/slider image 11.jpg';

const HomeCompanyCorner: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <></>,
                    prevArrow: <></>,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
            },
        ],
    };

    return (
        <div className="flex  md:flex-row w-full h-auto md:h-[70vh]">
            <div className="flex items-center justify-center w-[25%] h-full  md:w-[20%]  md:h-[65%]  ">
                <div className="relative flex items-center justify-center  top-[5rem] md:top-[7rem] w-[15rem] md:w-[25rem] h-[15rem] md:h-[25rem] rotate-[45deg] bg-[#f5ad9b] rounded-[1.875rem]  left-[-7.5rem] md:left-[-12.5rem]  p-0 md:p-[0rem_3.5rem]">
                    <div className="w-[11.25rem] md:w-[18.75rem] h-[11.25rem] md:h-[18.75rem] bg-[#0c4c78] rotate-[90deg] rounded-[1.875rem] left-[0.75rem] md:left-[-1.25rem]"></div>
                </div>
            </div>
            <div className="w-full md:w-[70%]">
                <div className="flex flex-col items-center justify-center h-[10vh] w-full mb-2">
                    <div className="flex flex-col items-start md:items-center justify-center w-full md:w-1/2 md:mt-10 ">
                        <h1 className="mt-5 text-[#0c4c78] font-bold text-2xl md:text-3xl">Company Corner</h1>
                        <div className="w-[45%] md:w-[40%] h-[0.25rem] md:h-[0.5rem] mt-2 rounded bg-gradient-to-r from-[#ee6c4d] to-[#0c4c78] mb-10"></div>
                    </div>
                </div>


                <Slider {...settings}>
                    <div className=" flex flex-col justify-between md:mt-10 items-center w-[16rem] md:w-[18.625rem] h-[18rem] md:h-[22rem]">

                        <div className="w-[15.875rem] h-[14.5rem] md:w-[17.875rem] md:h-[17.5rem] rounded-[0.3125rem] shadow-lg bg-primary-white  absolute ">
                            <div className='absolute h-[70%] w-[70%] rounded-lg top-0 left-0 bg-primary-orangefade z-40'></div>
                            <div className='sliderimage1 h-[70%] w-[70%] rounded-lg shadow-sm absolute top-[2.6vw] left-[2.6vw] z-50'></div>
                        </div>
                        <div className=" absolute left-0 top-[82%] w-[15.8125rem] md:w-[17.8125rem] h-[9.375rem]">
                            <p className="text-base md:text-lg font-normal text-[#505050]">Adhiraj Mishra <br /><span className="text-sm font-bold text-[#ee6c4d]">Chief Of Marketing</span></p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between md:mt-10 items-center w-[16rem] md:w-[18.625rem] h-[18rem] md:h-[22rem]">

                        <div className="w-[15.875rem] h-[14.5rem] md:w-[17.875rem] md:h-[17.5rem] rounded-[0.3125rem] shadow-lg bg-white  absolute ">
                            <div className='absolute h-[70%] w-[70%] rounded-lg bottom-0 right-0 bg-primary-blue_tranparent_25 z-40'></div>
                            <div className='sliderimage2 h-[70%] w-[70%] rounded-lg shadow-sm absolute top-[2.6vw] left-[2.6vw] z-50'></div>
                        </div>
                        <div className=" absolute left-0 top-[82%] w-[15.8125rem] md:w-[17.8125rem] h-[9.375rem]">
                            <p className="text-base md:text-lg font-normal text-[#505050]">Nivedita Tiwari <br /><span className="text-sm font-bold text-[#ee6c4d]">Director</span></p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between  md:mt-10 items-center w-[16rem] md:w-[18.625rem] h-[18rem] md:h-[22rem]">

                        <div className="w-[15.875rem] h-[14.5rem] md:w-[17.875rem] md:h-[17.5rem] rounded-[0.3125rem] shadow-lg bg-white  absolute ">
                            <div className='absolute h-[70%] w-[70%] rounded-lg top-0 left-0 bg-primary-orangefade z-40'></div>
                            <div className='sliderimage3 h-[70%] w-[70%] rounded-lg shadow-sm absolute top-[2.6vw] left-[2.6vw] z-50'></div>
                        </div>
                        <div className="absolute left-0 top-[82%] w-[15.8125rem] md:w-[17.8125rem] h-[9.375rem]">
                            <p className="text-base md:text-lg font-normal text-[#505050]">Sujit Mishra  <br /><span className="text-sm font-bold text-[#ee6c4d]">CEO</span></p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between md:mt-10 items-center w-[16rem] md:w-[18.625rem] h-[18rem] md:h-[22rem]">

                        <div className="w-[15.875rem] h-[14.5rem] md:w-[17.875rem] md:h-[17.5rem] rounded-[0.3125rem] shadow-lg bg-white  absolute ">
                            <div className='absolute h-[70%] w-[70%] rounded-lg bottom-0 right-0 bg-primary-blue_tranparent_25 z-40'></div>
                            <div className='sliderimage6 h-[70%] w-[70%] rounded-lg shadow-sm absolute top-[2.6vw] left-[2.6vw] z-50'></div>
                        </div>
                        <div className="absolute left-0 top-[82%] w-[15.8125rem] md:w-[17.8125rem] h-[9.375rem]">
                            <p className="text-base md:text-lg font-normal text-[#505050]">Kunal Dey <br /><span className="text-sm font-bold text-[#ee6c4d]">Operation Head</span></p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between md:mt-10 items-center w-[16rem] md:w-[18.625rem] h-[18rem] md:h-[22rem]">

                        <div className="w-[15.875rem] h-[14.5rem] md:w-[17.875rem] md:h-[17.5rem] rounded-[0.3125rem] shadow-lg bg-white  absolute ">
                            <div className='absolute h-[70%] w-[70%] rounded-lg top-0 left-0 bg-primary-orangefade z-40'></div>
                            <div className='sliderimage8 h-[70%] w-[70%] rounded-lg shadow-sm absolute top-[2.6vw] left-[2.6vw] z-50'></div>
                        </div>
                        <div className="absolute left-0 top-[82%] w-[15.8125rem] md:w-[17.8125rem] h-[9.375rem]">
                            <p className="text-base md:text-lg font-normal text-[#505050]">Ratul Dutta <br /><span className="text-sm font-bold text-[#ee6c4d]">Customer Relation Manager</span></p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between  md:mt-10 items-center w-[16rem] md:w-[18.625rem] h-[18rem] md:h-[22rem]">

                        <div className="w-[15.875rem] h-[14.5rem] md:w-[17.875rem] md:h-[17.5rem] rounded-[0.3125rem] shadow-lg bg-white  absolute ">
                            <div className='absolute h-[70%] w-[70%] rounded-lg bottom-0 right-0 bg-primary-blue_tranparent_25 z-40'></div>
                            <div className='sliderimage11 h-[70%] w-[70%] rounded-lg shadow-sm absolute top-[2.6vw] left-[2.6vw] z-50'></div>
                        </div>
                        <div className=" absolute left-0 top-[82%] w-[15.8125rem] md:w-[17.8125rem] h-[9.375rem]">
                            <p className="text-base md:text-lg font-normal text-[#505050]">Satyabrata Saha <br /><span className="text-sm font-bold text-[#ee6c4d]">Customer Relation Manager</span></p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between md:mt-10 items-center w-[16rem] md:w-[18.625rem] h-[18rem] md:h-[22rem]">

                        <div className="w-[15.875rem] h-[14.5rem] md:w-[17.875rem] md:h-[17.5rem] rounded-[0.3125rem] shadow-lg bg-white  absolute ">
                            <div className='absolute h-[70%] w-[70%] rounded-lg top-0 left-0 bg-primary-orangefade z-40'></div>
                            <div className='sliderimage9 h-[70%] w-[70%] rounded-lg shadow-sm absolute top-[2.6vw] left-[2.6vw] z-50'></div>
                        </div>
                        <div className=" absolute left-0 top-[82%] w-[15.8125rem] md:w-[17.8125rem] h-[9.375rem]">
                            <p className="text-base md:text-lg font-normal text-[#505050]">Priya Majumder <br /><span className="text-sm font-bold text-[#ee6c4d]">Customer Relation Manager</span></p>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* <div className="md:hidden w-[86%] h-auto">
                <Slider {...settings}>
                    <div className="relative flex flex-col items-center justify-start w-[18.625rem] h-[90%]">
                        <div className="w-[18.125rem] h-[17.5rem] rounded-[0.3125rem] shadow-sm bg-[#ee6c4d4d] overflow-hidden">
                            <Image src={sliderimage1} alt="slider 1" className="w-[10.75rem] h-[10.75rem] object-cover" />
                        </div>
                        <div className="mt-3 w-[15rem] h-[9.375rem]">
                            <p className="text-lg font-normal text-[#505050]">Adhiraj Mishra <br /><span className="text-sm font-bold text-[#ee6c4d]">Chief Of Marketing</span></p>
                        </div>
                    </div>
                   
                </Slider>
            </div> */}
        </div>
    )
}

export default HomeCompanyCorner;
