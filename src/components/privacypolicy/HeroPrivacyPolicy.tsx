import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/Image/image/Group 3426.png';
import grid from '../../../public/Image/image/grid.png';
import Truck from '../../../public/Image/image/truckimg.png';
import industry from '../../../public/Image/image/industry.png';

const HeroPrivacyPolicy: React.FC = () => {
  return (
    <div
      className="h-[50vh] bg-[url('https://img.freepik.com/premium-photo/orange-landscape-featuring-highly-detailed-illustration-forest-mountains-background-romantic-riverscape-is-depicted-with-earth-tone-color-palette-reminiscent-style_899449-96319.jpg')] bg-no-repeat bg-center bg-fixed bg-cover flex items-center justify-center">
      <div className="relative h-[60%] w-[70%] rounded-[3.7rem] bg-gradient-to-b from-primary-blue to-primary-orange  flex items-center overflow-hidden">
        <h1 className="text-[4.1rem] px-[4%] font-bold text-primary-white z-10">Privacy & Policy</h1>
        <Image
          src={grid}
          alt=""
          className="absolute h-full w-[20%] left-[4%] top-0 opacity-40"
        />
        <div className="absolute right-0 bottom-0 flex items-end justify-end w-[50%]">
          <Image
            src={Truck}
            alt=""
            className="h-[5rem] opacity-50"
          />
          <Image
            src={Truck}
            alt=""
            className="h-[5rem] opacity-50"
          />
          <Image
            src={industry}
            alt=""
            className="h-[5rem] opacity-50 mr-[20%]"
          />
        </div>
        <Image
          src={Logo}
          alt="Logo"
          className="absolute right-[1%] h-full w-40 opacity-30"
        />
      </div>
    </div>
  );
};

export default HeroPrivacyPolicy;
