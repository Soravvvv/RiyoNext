"use client";
import Image from 'next/image';
import anima from '../../../public/Image/home/homesectionanimation.gif';

const HomeSection2: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row lg:h-[80%] gap-[0.1%] relative overflow-hidden">

        {/* Left Section */}
        <div className="w-full lg:w-[35%] flex justify-center items-center order-2 md:order-1 z-10">
          <div className="w-[95%] flex">
            <div className="md:mt-[35%] mt-2 lg:mt-[20%] h-60 lg:h-[20rem] w-full bg-cover bgRiyoBusiness2"></div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center px-4 lg:px-0 order-1 md:order-2 z-10">
          <div className="mt-8 lg:mt-[10%] w-full flex md:flex-col lg:flex-row items-center gap-4">
            <div className="flex justify-center items-center h-20 w-20 lg:h-28 lg:w-28 rounded-[5px] bg-[#0c4c78] relative">
              <div className="w-[50px] h-[50px] flex justify-center items-center">
                <Image src={anima} alt="logo" className="absolute" />
                <p className="text-white text-center text-xs lg:text-base">
                  <span className="text-[#ee6c4d] font-bold text-[1.1rem]">25</span> Years
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[80%] flex flex-col justify-center">
              <p className="text-[#0c4c78] text-[20px] lg:text-[30px] font-bold font-['Arial'] -mt-[10px]">
                Expertise you can count on
              </p>
              <div className="w-[30%] h-[5px] lg:h-[8px] rounded-[5px] bg-gradient-to-r from-[#ee6c4d] to-[#0c4c78] "></div>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <p className="text-sm lg:text-[1.25rem] font-['Arial']">
              With 25 years of industry experience, RIYO stands as a stalwart in the logistics and transportation sector, dedicated to fostering meaningful impact and value for its clients. Through decades of navigating the intricacies of the industry, Riyo has honed its expertise to deliver innovative solutions that drive success and sustainability. Committed to staying at the forefront of industry advancements, Riyo leverages its deep understanding of logistics and transportation dynamics to anticipate market shifts and deliver proactive strategies. By prioritizing client needs and maintaining a relentless pursuit of excellence, Riyo has established itself as a trusted partner in optimizing supply chain operations and driving business growth. Whether it's streamlining processes, implementing cutting-edge technologies, or navigating regulatory landscapes, Riyo's seasoned professionals are equipped to provide tailored solutions that propel clients towards their goals, cementing its reputation as a leader in the field.
            </p>
          </div>
        </div>

        {/* Design Pattern */}
        <div className="w-full lg:w-[20%] h-[30vh] lg:h-[70vh] md:flex items-center  mt-8 lg:mt-0 absolute -right-[50%] top-[20%]">
          <div className="w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] rounded-[30px] rotate-45 bg-[#f5ad9b] relative right-[-80px] lg:right-[-148px]">
            <div className="w-[200px] lg:w-[350px] h-[200px] lg:h-[350px] rounded-[30px] rotate-90 bg-[#0c4c78] relative right-[-10px] lg:right-[-20px]"></div>
          </div>
        </div>

        {/* New Right Section */}
        <div className="md:flex items-center justify-center w-[55%] h-full md:w-[25%] overflow-hidden md:h-[100%] rotate-[180deg] absolute hidden right-[-9%] top-8 z-20">
          <div className="relative flex items-center justify-center w-[15rem] md:w-[25rem] h-[15rem] md:h-[25rem] rotate-[45deg] bg-[#f5ad9b] rounded-[1.875rem] left-[-7.5rem] md:right-0 p-0 md:p-[0rem_3.5rem]">
            <div className="w-[11.25rem] md:w-[18.75rem] h-[11.25rem] md:h-[18.75rem] bg-[#0c4c78]  rounded-[1.875rem] left-[0.75rem] md:right-[1rem]"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default HomeSection2;
