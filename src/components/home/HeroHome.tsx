"use client";
import React from 'react';
import Slider, { Settings } from "react-slick";
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import grid from '../../../public/Image/image/grid.png';

// Image imports
import Logo from "../../../public/Image/logo/whitelogo.png";
import Icon1 from "../../../public/Image/home/Vector (4).png";
import Icon2 from "../../../public/Image/home/Vector (5).png";
import Icon3 from "../../../public/Image/home/Victor (9).png";
import Icon4 from "../../../public/Image/home/Vector (6).png";
import Icon5 from "../../../public/Image/home/Vector (8).png";
import Icon6 from "../../../public/Image/home/victor (7).png";

const HeroHome = () => {
    const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    customPaging: (i: number) => (
        <button
            style={{
                width: '0.625rem',
                height: '0.625rem',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
                margin: 0,
                cursor: 'pointer',
            }}
        >
            {/* You can also add content inside the button if needed */}
        </button>
    ),
    appendDots: (dots: React.ReactNode) => (
        <div
            style={{
                position: 'absolute',
                bottom: '1.25rem',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '50%',
                padding: '0.625rem',
            }}
        >
            <ul style={{ display: 'flex', margin: 0, padding: 0 }}>
                {React.Children.map(dots, (dot: React.ReactNode, index: number) => (
                    <li
                        key={index}
                        style={{
                            listStyleType: 'none', // Make sure this li style doesn't have default list styling
                            margin: '0 0.3125rem',
                        }}
                    >
                        {dot}
                    </li>
                ))}
            </ul>
        </div>
    ),
};
    
    
    
    const redirectToWhatsApp = () => {
        window.location.href = `https://wa.me/+916289688570`;
    };

    return (
        <div className=" w-full h-screen  overflow-hidden ">
            <div className="absolute flex flex-col justify-between items-center gap-[2%] top-0 left-0 w-[15%] h-full bg-gradient-to-b from-primary-orange to-primary-blue z-10 ">
                <div className='flex flex-col w-full justify-center items-center pt-6'>
                    <div className='h-[100%] pb-16 '>
                        <Image className='h-28 w-24' src={Logo} height={100} alt='RIYO Logo' />
                    </div>
                    <ul className=" pb-7 w-full  text-primary-white text-left  ">
                        <li className="hover:text-primary-orange py-2  text-primary-white w-full border-b-2 border-primary-white border-t-2 flex items-center justify-start pl-[15%]"><Link href='/home' >Home</Link></li>
                        <li className="hover:text-primary-orange py-2 text-primary-white w-full border-b-2 border-primary-white flex items-center justify-start pl-[15%] "><Link href='/about' >About Us</Link></li>
                        <li className="hover:text-primary-orange py-2 text-primary-white w-full border-b-2 border-primary-white flex items-center justify-start pl-[15%]"><Link href="/riyoServices" >Riyo Services</Link></li>
                        <li className="hover:text-primary-orange py-2 text-primary-white w-full border-b-2 flex border-primary-white items-center justify-start pl-[15%]"><Link href='/'>Gallery</Link></li>
                        <li className="hover:text-primary-orange py-2 text-primary-white w-full border-b-2 border-primary-white flex items-center justify-start pl-[15%]"><Link href='/'>Blog</Link></li>
                        <li className="hover:text-primary-orange text-primary-white w-full border-b-2 border-primary-white py-2 flex items-center justify-start pl-[15%]"><Link href="/contactus" >Contact Us</Link></li>   
                    </ul>
                </div>
                <div className='justify-between  w-full h-full flex flex-col items-center '>
                    <div className='w-full h-4/5 flex flex-col justify-around items-center'>
                        <div className=' w-24 h-11 opacity-100 z-10 rounded flex justify-center items-center font-bold text-lg cursor-pointer text-primary-orange  border-2 border-primary-orange'><Link href="https://riyorentitoverindia.in/">Log in</Link></div>
                        <div className='flex justify-around w-full  z-10 opacity-100 '>
                            <a href="#" onClick={redirectToWhatsApp} className="bg-primary-orange p-2 rounded  cursor-pointer">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="https://www.facebook.com/share/8vVBgoU3yA1YYoZX/?mibextid=qi2Omg" className="bg-primary-orange p-2 rounded  cursor-pointer">
                                <RiFacebookCircleLine size={20} />
                            </a>
                            <a href="https://www.instagram.com/riyoindia_?igsh=MXQ4MHc0eGV4OWt6NA==" className="bg-primary-orange p-2 rounded  cursor-pointer">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className='absolute h-[25%] opacity-50 w-[98%]  ;'>
                        <Image
                            src={grid}
                            alt=""
                            className="absolute h-full w-full left-[4%] top-0 opacity-40"
                        />
                    </div>
                </div>
            </div>

            <div className='absolute top-0 right-0 md:hidden w-1/6 h-full bg-gradient-to-b from-primary-orange to-primary-blue flex flex-col items-center pt-10'>
                <div className='w-24 h-24 mb-6'>
                    <Image src={Logo} height={100} alt='RIYO Logo' />
                </div>
                <div className='flex flex-col items-center space-y-8'>
                    <Link href='/' className="text-primary-white hover:text-primary-orange">
                        <Image src={Icon1} alt='logo' width={40} height={40} />
                    </Link>
                    <Link href='/AboutUsRiyoBusiness' className="text-primary-white hover:text-primary-orange">
                        <Image src={Icon2} alt='logo' width={40} height={40} />
                    </Link>
                    <Link href='/RiyoServices' className="text-primary-white hover:text-primary-orange">
                        <Image src={Icon3} alt='logo' width={40} height={40} />
                    </Link>
                    <Image src={Icon4} alt='logo' width={40} height={40} />
                    <Image src={Icon5} alt='logo' width={40} height={40} />
                    <Link href='/ContactUs' className="text-primary-white hover:text-primary-orange">
                        <Image src={Icon6} alt='logo' width={40} height={40} />
                    </Link>
                </div>
                <div className='flex  flex-col items-center space-y-4 mt-auto mb-4'>
                    <a href="#" onClick={redirectToWhatsApp} className="text-green-400 hover:text-green-600">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="https://www.facebook.com/share/8vVBgoU3yA1YYoZX/?mibextid=qi2Omg" className="text-blue-700 hover:text-blue-800">
                        <RiFacebookCircleLine size={20} />
                    </a>
                    <a href="https://www.instagram.com/riyoindia_?igsh=MXQ4MHc0eGV4OWt6NA==" className="text-pink-600 hover:text-pink-700">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>

            <div className="relative w-full h-full  pl-[15%]">
                <Slider {...settings} >
                    <div className="relative w-full h-screen bg-cover bg-center slideimg"  >
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-black opacity-40"></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">

                            <div className="text-center text-primary-white px-4 py-8 md:px-16 md:py-12">
                                <div className="mb-4">
                                    <button className="bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600 sm:hidden">Login</button>
                                </div>
                                <div className='w-[80%] h-auto flex flex-col'>
                                    <div className='w-[60%] h-auto'>
                                        <p className="text-4xl font-bold text-[#ee6c4d] -ml-[30%] mb-2">We are RIYO</p>
                                        <div className='w-[25%] h-1.5 rounded-xl bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] ml-[15%] -mt-1;'></div>
                                    </div>
                                    <h1 className="text-[2.38rem] leading-none text-[#ffffff] font-medium mt-9 text-start ml-[10%]">
                                        INDIA's first leading one stop Tech solution to revolutionize the logistics and transportation sector.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-screen bg-cover bg-center slideimg2">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-black opacity-40"></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-start text-primary-white px-4 py-8 md:px-16 md:py-12">
                                <div className="mb-4 ">
                                    <button className="bg-primary-orange sm:hidden text-primary-white px-4 py-2 rounded-md hover:bg-orange-600 ">Login</button>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold mb-2 text-primary-orange">
                                        <p className='text-[2.38rem] leading-none font-bold text-start  text-[#ee6c4d]'>What we do for?</p>
                                        <div className='w-60 h-2 rounded bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-2'></div>
                                    </div>
                                    <h1 className="w-[60%] h-full rounded-[2rem] pl-20 text-[4.75rem] leading-none font-normal text-[#ffffff] bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-10 text-start p-6 " >Industries</h1>
                                    <p className='text-base mb-4  text-primary-white mt-10'>
                                        We provide industry owners with a comprehensive suite of services, including load posting, verified transporters, lorry owners, drivers, and brokers. We prioritize material delivery with top-notch safety measures, ensuring client peace of mind. With timely updates throughout the transportation process, we assure transparency and reliability, empowering businesses to excel in today's competitive marketplace. Optimize your logistics strategy with our tailored solutions.
                                    </p>
                                    <div className='flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mt-10'>
                                        <Link href='/RiyoLogistics'>
                                            <button className='bg-primary-orange  text-primary-white px-4 py-2 rounded-md hover:bg-orange-600'>Know More</button>
                                        </Link>
                                        <a href='https://play.google.com/store/apps/details?id=com.riyo.riyo_logistics' className=' text-primary-white border-none text-[1.3rem] underline px-4 py-2 rounded-md font-bold'>Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-screen bg-cover bg-center slideimg3" >
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-black opacity-40"></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-primary-white px-4 py-8 md:px-16 md:py-12">
                                <div className="mb-4">
                                    <button className="bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-primary-orange-600 sm:hidden">Login</button>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold mb-2 text-primary-orange">
                                        <p className='text-[2.38rem] leading-none font-bold text-start text-[#ee6c4d]'>What we do for?</p>
                                        <div className='w-96 h-2 rounded bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-2'></div>
                                    </div>
                                    {/* class,ate */}
                                    <h1 className=" w-[70%] h-full rounded-[2rem] pl-20 text-[4.75rem] leading-none font-normal text-[#ffffff] bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-10 text-start p-6">Transport Company</h1>
                                    <p className='text-base mb-4 text-primary-white mt-9'>
                                        We provide industry owners with a comprehensive suite of services, including load posting, verified transporters, lorry owners, drivers, and brokers. We prioritize material delivery with top-notch safety measures, ensuring client peace of mind. With timely updates throughout the transportation process, we assure transparency and reliability, empowering businesses to excel in today's competitive marketplace. Optimize your logistics strategy with our tailored solutions.
                                    </p>
                                    <div className='flex flex-col md:flex-row space-y-4 md:space-x-7 md:space-y-0'>
                                        <Link href='/RiyoLogistics'>
                                            <button className='bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600'>Know More</button>
                                        </Link>
                                        <a href='https://play.google.com/store/apps/details?id=com.riyo.riyo_logistics' className=' text-primary-white border-none text-[1.3rem] underline px-4 py-2 rounded-md font-bold'>Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-screen bg-cover bg-center slideimg4" >
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-black opacity-40"></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-primary-white px-4 py-8 md:px-16 md:py-12">
                                <div className="mb-4">
                                    <button className="bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600 sm:hidden">Login</button>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold mb-2 text-primary-orange">
                                        <p className='text-[2.38rem] leading-none font-bold text-start text-[#ee6c4d]'>What we do for?</p>
                                        <div className='w-80 h-2 rounded bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-3'></div>
                                    </div>
                                    <h1 className="w-[60%] h-full rounded-[2rem] pl-20 text-[4.75rem] leading-none font-normal text-[#ffffff] bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-10 text-start p-6">Lorry Broker</h1>
                                    <p className='text-base mb-10 text-primary-white text-start mt-10'>
                                        We are innovative mobile application designed to empower lorry brokers by providing them with a comprehensive platform to expand and enhance their business. With RIYO Business, lorry brokers gain access to a range of powerful tools and features tailored to their needs, enabling them to efficiently manage their operations, connect with clients, and secure profitable business opportunities....
                                    </p>
                                    <div className='flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0'>
                                        <Link href='/RiyoLogistics'>
                                            <button className='bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600'>Know More</button>
                                        </Link>
                                        <a href='https://play.google.com/store/apps/details?id=com.riyo.riyo_logistics' className=' text-primary-white border-none text-[1.3rem] underline px-4 py-2 rounded-md font-bold'>Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-screen bg-cover bg-center slideimg5" >
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-black opacity-40"></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-primary-white px-4 py-8 md:px-16 md:py-12">
                                <div className="mb-4">
                                    <button className="bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600 sm:hidden">Login</button>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold mb-10 text-primary-orange">
                                        <p className='text-[2.38rem] leading-none text-start  font-bold text-[#ee6c4d]'>What we do for?</p>
                                        <div className='w-80 h-2 rounded bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-2'></div>
                                    </div>
                                    <h1 className="w-[60%] h-full rounded-[2rem] pl-20 text-[4.75rem] leading-none font-normal text-[#ffffff] bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-10 text-start p-6">Lorry Owner</h1>
                                    <p className='text-base mb-6 text-primary-white text-start mt-10'>
                                        We empowering commercial truck owners across India, RIYO Rentitover presents a groundbreaking solution tailored exclusively for them. In a market dominated by individual truck proprietors, who serve as the lifeline of various sectors including manufacturing, mining, and agriculture, RIYO acknowledges the challenges they face daily...
                                    </p>
                                    <div className='flex flex-col md:flex-row space-y-4 md:space-x-7 md:space-y-0'>
                                        <Link href='/RiyoLogistics'>
                                            <button className='bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600'>Know More</button>
                                        </Link>
                                        <a href='https://play.google.com/store/apps/details?id=com.riyo.riyo_logistics' className=' text-primary-white border-none text-[1.3rem] underline px-4 py-2 rounded-md font-bold'>Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-screen bg-cover bg-center slideimg6" >
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-black opacity-40"></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-primary-white px-4 py-8 md:px-16 md:py-12">
                                <div className="mb-4">
                                    <button className="bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600 sm:hidden">Login</button>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold mb-2 text-primary-orange justify-start">
                                        <p className='text-[2.38rem] leading-none font-bold text-start text-[#ee6c4d]'>What we do for?</p>
                                        <div className='w-80 h-2 rounded bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] -mt-5;'></div>
                                    </div>
                                    <h1 className="w-[60%] h-full rounded-[2rem] pl-20 text-[4.75rem] leading-none font-normal text-[#ffffff] bg-[linear-gradient(to_right,_#ee6c4d,_#0c4c78)] mt-10 text-start p-6">Lorry Driver</h1>
                                    <p className='text-base text-primary-white mt-10 text-start mb-10'>
                                        We unlock a smoother journey for commercial truck drivers navigating the diverse landscape of national highways. RIYO Rent It Over India Pvt Ltd introduces the RIYO Family policy, aimed at revolutionizing driving conditions for truckers. With a focus on addressing language barriers, cultural differences, and essential needs, RIYO's innovative mobile application streamlines access to vital services right on the highway....
                                    </p>
                                    <div className='flex flex-col md:flex-row  space-y-4 md:space-x-4 md:space-y-0'>
                                        <Link href='/RiyoLogistics'>
                                            <button className='bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-orange-600'>Know More</button>
                                        </Link>
                                        <a href='https://play.google.com/store/apps/details?id=com.riyo.riyo_logistics' className=' text-primary-white border-none text-[1.3rem] underline px-4 py-2 rounded-md font-bold'>Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HeroHome;
