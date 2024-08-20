"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TfiMenu } from 'react-icons/tfi';
import Logo from '../../../public/Image/logo/RiyoWeb.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-l from-primary-blue to-primary-orange px-[4%] sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <TfiMenu size={30} onClick={toggleMenu} className="text-primary-white md:hidden" />
        {/* <Image src={Logo} alt="RiyoWeb Logo" height={28} /> */}
      </div>
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row list-none text-primary-white justify-between m-0 p-0 absolute md:relative w-full md:w-auto top-[80%] left-0 bg-gradient-to-l from-primary-blue to-primary-orange z-5 md:z-auto`}
      >
        <li onClick={handleClick} className="flex items-center border-r-2 pr-20 cursor-pointer my-2 md:my-0 ">
          <Link href='/home'>Home</Link>
        </li>
        <div className="h-16 w-[2px] bg-white hidden md:block"></div>
        <li onClick={handleClick} className="flex items-center cursor-pointer border-r-2 pr-20  my-2 md:my-0">
          <Link href='/about'>About Us</Link>
        </li>
        <div className="h-16 w-[2px] bg-white hidden md:block"></div>
        <li onClick={handleClick} className="flex items-center cursor-pointer border-r-2 pr-20  my-2 md:my-0">
          <Link href='/riyoServices'>RIYO Services</Link>
        </li>
        <div className="h-16 w-[2px] bg-white hidden md:block"></div>
        <li className="flex items-center border-r-2 pr-20  justify-center">
          <Image src={Logo} alt="RiyoWeb Logo" height={50} />
        </li>
        <div className="h-16 w-[2px] bg-white hidden md:block"></div>
        <li className="flex items-center border-r-2 pr-20  cursor-pointer my-2 md:my-0">
          Gallery
        </li>
        <div className="h-16 w-[2px] bg-white hidden md:block"></div>
        <li className="flex items-center border-r-2 pr-20 cursor-pointer my-2 md:my-0">
          Blog
        </li>
        <div className="h-16 w-[2px] bg-white hidden md:block"></div>
        <li onClick={handleClick} className="flex items-center  cursor-pointer my-2 md:my-0">
          <Link href='/contactus'>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
