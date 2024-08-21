"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
// import { useAppDispatch } from '@/utils/hooks'; // Assuming you have a custom hook for dispatch
// import { setCurrentPage } from '@/store/features/CurrentPages'; // Adjust the path according to your structure

const RiyoSurakhshaSection: FC = () => {
//   const dispatch = useAppDispatch();

const router = useRouter();

const handle = (value: string) => {
  router.push(`/riyologistics/riyo_surakhsha`);
};

return (
  <div className="h-[86vh] w-full flex justify-center items-center">
    <div className="h-[75vh] w-[94%] flex flex-col md:flex-row justify-center items-center">
      <div className="h-[45vh] md:h-[70vh] w-full md:w-[45%] relative flex justify-center md:justify-start">
        <div className="h-full w-[60%] bg-primary-orange rounded-lg">
          <div className="riyo-services-imgbox2"></div>
        </div>
      </div>

      <div className="h-[30vh] md:h-[75vh] w-full md:w-[50%] flex justify-center md:justify-end items-center mt-8 md:mt-0">
        <div className="h-[90%] w-[90%] flex flex-col gap-4">
          <div className="h-[21%] w-full flex items-center relative justify-center md:justify-start">
            {/* <div className="h-[5.25rem] w-[5.25rem] rounded-full bg-gradient-to-r from-primary-darkblue to-primary-orange animate-rotate"></div> */}
            <h1 className="text-[2.5rem] md:text-[3.7rem] text-primary-darkblue absolute font-bold font-sans text-center md:text-left">RIYO Logistics</h1>
          </div>
          <div className="h-auto md:h-[84%] w-full flex flex-col gap-4 text-center md:text-left">
            <p className="text-[1rem] md:text-[1.2rem] text-primary-black font-sans leading-[1.5rem] md:leading-[2rem]">
              <span className="text-primary-darkblue font-bold">At</span>
              <span className="font-bold text-primary-orange"> RIYO LOGISTICS,</span> we understand that each journey is unique, and each cargo holds its own set of challenges. That's why our approach is flexible, adaptive, and tailored to meet the specific needs of our clients. From real-time tracking and monitoring to proactive problem-solving, we are with our partners every step of the way, ensuring a hassle-free experience from start to finish.
            </p>

            <div className="flex justify-center md:justify-start">
              <button onClick={() => handle("riyoLogisticData")} className="h-[3.5rem] md:h-[4.6rem] w-[12rem] md:w-[15rem] bg-primary-darkblue text-primary-white text-[1.2rem] md:text-[1.4rem] rounded-md shadow-md border-none cursor-pointer">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default RiyoSurakhshaSection;
