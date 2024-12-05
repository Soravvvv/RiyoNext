"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import useAppDispatch from '../../utils/hooks';
// import { setCurrentPage } from '../../utils/Store/features/dataslice';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import Logo from '../../../public/Image/logo/RiyoWeb.png';

const Footer: React.FC = () => {
  // const dispatch = useAppDispatch();
  const [isMainLinksOpen, setIsMainLinksOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isSupportLinksOpen, setIsSupportLinksOpen] = useState(false);

  const toggleMainLinks = () => {
    setIsMainLinksOpen(!isMainLinksOpen);
    setIsQuickLinksOpen(false);
    setIsSupportLinksOpen(false);
  };

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
    setIsMainLinksOpen(false);
    setIsSupportLinksOpen(false);
  };

  const toggleSupportLinks = () => {
    setIsSupportLinksOpen(!isSupportLinksOpen);
    setIsMainLinksOpen(false);
    setIsQuickLinksOpen(false);
  };

  const handleChange = (value: string) => {
    // dispatch(setCurrentPage(value));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const redirectToWhatsApp = () => {
    window.location.href = `https://wa.me/+916289688570`;
  };

  return (
    <div className="p-[2%] bgpresence bg-gradient-to-b from-primary-blue to-primary-orange relative z-30">
      <div className="flex flex-col md:flex-row w-full justify-evenly items-end text-primary-white">
        <div className="w-full md:w-[35%] text-center md:text-left mb-8 md:mb-0">
          <Image src={Logo} alt="Logo" height={80} className='hidden md:block' />
          <p className="mt-3">
            At RIYO, we're your one-stop solution for all your logistics needs. From seamless transportation to efficient warehousing and supply chain management, we've got you covered. Our dedicated team and cutting-edge technology ensure your goods reach their destination on time, every time. Experience hassle-free logistics with RIYO today.
          </p>
        </div>

        <div className="hidden md:block h-[11rem] w-px bg-primary-white"></div>

        <div className="mt-6 p-2 h-auto md:h-[15rem]  w-full md:w-auto md:block flex flex-col justify-center items-center">
          <h1 className="cursor-pointer text-primary-white md:text-3xl text-xl" onClick={toggleMainLinks}>Main Links</h1>
          <div className={`mt-4 ${isMainLinksOpen ? 'block' : 'hidden'} md:block`}>
            <p className='cursor-pointer p-2' onClick={scrollTop}><Link href="/">Home</Link></p>
            <p className='cursor-pointer p-2' onClick={scrollTop}><Link href="/about">About Us</Link></p>
            <p className='cursor-pointer p-2' onClick={scrollTop}><Link href="/riyoServices">RIYO Services</Link></p>
            <p className='cursor-pointer p-2'>Gallery</p>
          </div>
        </div>

        <div className="hidden md:block h-[11rem] w-px bg-primary-white"></div>

        <div className="mt-6 p-2 h-auto md:h-[15rem] w-full md:w-auto  md:block flex flex-col justify-center items-center">
          <h1 className="cursor-pointer text-primary-white md:text-3xl text-xl" onClick={toggleQuickLinks}>Quick Links</h1>
          <div className={`mt-4 ${isQuickLinksOpen ? 'block' : 'hidden'} md:block`}>
            <p className='cursor-pointer p-2'>Blog</p>
            <p className='cursor-pointer p-2' onClick={() => handleChange("riyoLogisticData")}><Link href="/riyologistics/riyo_logistics">RIYO Logistics</Link></p>
            <p className='cursor-pointer p-2' onClick={() => handleChange("RiyoBusinessData")}><Link href="/riyologistics/riyo_business">RIYO Business</Link></p>
            <p className='cursor-pointer p-2' onClick={() => handleChange("RiyoShurakhshaData")}><Link href="/riyologistics/riyo_surakhsha">RIYO Surakhsha</Link></p>
            <p className='cursor-pointer p-2' onClick={() => handleChange("RiyoParivaarData")}><Link href="/riyologistics/riyo_parivaar">RIYO Parivaar</Link></p>
          </div>
        </div>

        <div className="hidden md:block h-[11rem] w-px bg-primary-white"></div>

        <div className="mt-6 p-2 h-auto md:h-[15rem] w-full md:w-auto  md:block flex flex-col justify-center items-center pb-5">
          <h1 className="cursor-pointer text-primary-white md:text-3xl text-xl" onClick={toggleSupportLinks}>Support</h1>
          <div className={`mt-4 ${isSupportLinksOpen ? 'block' : 'hidden'} md:block`}>
            <p className='cursor-pointer p-2' onClick={scrollTop}><Link href="/contactus">Contact us</Link></p>
            <p className='cursor-pointer p-2' onClick={scrollTop}><Link href="/term&condition">Terms and conditions</Link></p>
            <p className='cursor-pointer p-2' onClick={scrollTop}><Link href="/privacypolicy">Privacy Policy</Link></p>
          </div>
        </div>
      </div>

      <div className="mt-1 pt-2 flex justify-center md:justify-end">
        <div className="flex justify-evenly w-1/2 md:w-1/6">
          <Link href="https://www.facebook.com/share/8vVBgoU3yA1YYoZX/?mibextid=qi2Omg"><FaFacebookSquare size={40} className="text-black" /></Link>
          <Link href="https://www.instagram.com/riyoindia_?igsh=MXQ4MHc0eGV4OWt6NA=="><FaInstagramSquare size={40} className="text-black" /></Link>
          <FaWhatsappSquare size={40} className="text-black cursor-pointer" onClick={redirectToWhatsApp} />
        </div>
      </div>

      <div className="relative z-10 inset-0 mt-8 md:mt-0">
        <div className="grid grid-cols-12 gap-2 h-full w-full">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="h-full w-px bg-primary-orange opacity-30"></div>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col justify-evenly">
          {[...Array(21)].map((_, i) => (
            <div key={i} className="h-0.5 w-full bg-primary-orange opacity-30"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
