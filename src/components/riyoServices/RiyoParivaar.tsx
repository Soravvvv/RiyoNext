"use client";
import { FC } from 'react';
// import { useAppDispatch } from '@/utils/hooks'; // Adjust the path according to your structure
// import { setCurrentPage } from '@/store/features/CurrentPages'; // Adjust the path according to your structure
import Link from 'next/link';

const RiyoParivaar: FC = () => {
//   const dispatch = useAppDispatch();

  const handle = (value: string) => {
    // dispatch(setCurrentPage(value));
  };

  return (
    <div className="h-[86vh] w-full flex justify-center items-center">
      <div className="h-[75vh] w-[94%] flex justify-between items-center">
       
        <div className="h-[75vh] w-[50%] flex justify-end items-center">
          <div className="h-[90%] w-[90%] ">
            <div className="h-[21%] w-full flex items-center relative">
              <h1 className="text-primary-darkblue font-bold font-arial text-[3.7rem]">RIYO Parivaar</h1>
            </div>
            <div className="h-[84%] w-full flex flex-col gap-4">
              <p className="text-[1.2rem] text-primary-black leading-[2rem] font-arial">
                <span className="text-primary-darkblue font-bold">At </span>
                <span className="text-primary-orange font-bold">RIYO PARIVAAR,</span> We unlock a smoother journey for
                commercial truck drivers navigating the diverse landscape of national highways. RIYO Rent It Over India
                Pvt Ltd introduces the RIYO Family policy, aimed at revolutionizing driving conditions for truckers. With
                a focus on addressing language barriers, cultural differences, and essential needs, RIYO's innovative
                mobile application streamlines access to vital services right on the highway, empowering drivers with
                convenience at their fingertips.
              </p>
              <Link href="/RiyoLogistics">
                <button
                  onClick={() => handle("RiyoParivaarData")}
                  className="h-[4.6rem] w-[15rem] cursor-pointer bg-primary-darkblue text-primary-white text-[1.4rem] rounded-md shadow-md"
                >
                  Know more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[70vh] w-[49%] mt-12">
          <div className="h-full w-[60%] bg-primary-orange rounded-md"></div>
          <div
            className="riyo-parivar-imgbox1"></div>
        </div>
      </div>
    </div>
  );
};

export default RiyoParivaar;
