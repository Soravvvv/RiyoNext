"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
// import { useAppDispatch } from '@/utils/hooks'; // Adjust the path according to your structure
// import { setCurrentPage } from '@/store/features/CurrentPages'; // Adjust the path according to your structure

const RiyoParivaar: FC = () => {
//   const dispatch = useAppDispatch();

const router = useRouter();

const handle = (value: string) => {
  router.push(`/riyologistics/riyo_parivaar`);
};

  return (
    <div className="h-auto lg:h-[86vh] w-full flex flex-col lg:flex-row justify-center items-center">
    <div className="h-auto lg:h-[75vh] w-full lg:w-[94%] py-7 flex flex-col lg:flex-row justify-center items-center">
      <div className="h-[35vh] lg:h-[70vh] w-[90%] md:w-full lg:w-[45%] relative hidden lg:flex order-2 lg:justify-start mb-6 lg:mb-0">
        <div className="h-full w-[80%] lg:w-[60%] bg-primary-orange rounded-lg">
          <div className="riyo-services-imgbox2"></div>
        </div>
      </div>
      <div className="h-auto lg:h-[75vh] w-full lg:w-[50%] flex justify-center lg:justify-end items-center">
        <div className="h-auto lg:h-[90%] w-[90%] flex flex-col gap-4">
          <div className="h-auto lg:h-[21%] w-full flex items-center p-2 lg:justify-start relative">
            {/* <div className="h-[5.25rem] w-[5.25rem] rounded-full bg-gradient-to-r from-primary-darkblue to-primary-orange animate-rotate"></div> */}
            <h1 className="text-[2rem] lg:text-[3.7rem] text-primary-darkblue absolute font-bold font-sans text-center lg:text-left">RIYO Parivaar</h1>
          </div>
          <div className="h-auto lg:h-[84%] w-full flex flex-col gap-4">
            <p className="text-[1rem] lg:text-[1.2rem] text-primary-black font-sans leading-[2rem] text-start  lg:text-left">
              <span className="text-primary-darkblue font-bold">At</span>
              <span className="font-bold  text-primary-orange"> RIYO PARIVAAR,</span> We unlock a smoother journey for commercial truck drivers navigating the diverse landscape of national highways. RIYO Rent It Over India Pvt Ltd introduces the RIYO Family policy, aimed at revolutionizing driving conditions for truckers. With a focus on addressing language barriers, cultural differences, and essential needs, RIYO's innovative mobile application streamlines access to vital services right on the highway, empowering drivers with convenience at their fingertips. 
            </p>

            <div className="flex justify-start py-4">
              <button
                onClick={() => handle("riyoLogisticData")}
                className="h-[3.5rem] lg:h-[4.6rem] w-[10rem]  lg:w-[15rem] bg-primary-darkblue text-primary-white text-[1rem] lg:text-[1.4rem] rounded-md shadow-md border-none cursor-pointer"
              >
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[35vh] lg:h-[70vh] w-[90%] md:w-full lg:w-[45%] relative  lg:hidden flex  lg:justify-start mb-6 lg:mb-0">
        <div className="h-full w-[80%] lg:w-[60%] bg-primary-orange rounded-lg">
          <div className="riyo-services-imgbox2"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RiyoParivaar;
