"use client";
import { FC } from 'react';
// import { useAppDispatch } from '@/utils/hooks'; // Assuming you have a custom hook for dispatch
// import { setCurrentPage } from '@/store/features/CurrentPages'; // Adjust the path according to your structure
import Link from 'next/link';

const RiyoSurakhshaSection: FC = () => {
//   const dispatch = useAppDispatch();

  const handle = (value: string) => {
    // dispatch(setCurrentPage(value));
  };

  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="h-[80vh] w-[94%] flex justify-between items-center">
        <div className="h-[70vh] w-[49%] flex relative">
          <div className="h-full w-[60%] bg-primary-orange rounded-md"></div>
          <div
            className="riyo-surakhsha-imgbox1"></div>
        </div>
        <div className="h-[80vh] w-[45%] flex justify-start items-center">
          <div className="h-full w-[90%]">
            <div className="h-[21%] w-full flex items-center relative">
              <h1 className="text-[3.4rem] text-primary-darkblue font-bold font-arial">RIYO Surakhsha</h1>
            </div>
            <div className="h-[81%] w-full flex flex-col gap-4">
              <p className="text-[1.2rem] leading-[2rem] text-primary-black">
                <span className="text-primary-darkblue font-bold">At</span>{' '}
                <span className="text-primary-orange font-bold">RIYO SURAKHSHA,</span> We empower commercial truck owners
                across India. RIYO Rentitover presents a groundbreaking solution tailored exclusively for them. In a
                market dominated by individual truck proprietors, who serve as the lifeline of various sectors including
                manufacturing, mining, and agriculture, RIYO acknowledges the challenges they face daily. From
                overseeing truck operations to managing driver issues and grappling with RTO-related hurdles, truck
                owners endure significant mental and financial strain.
              </p>
              <Link href="/RiyoLogistics">
                <button
                  onClick={() => handle("RiyoShurakhshaData")}
                  className="h-[4.6rem] w-[15rem] bg-primary-darkblue text-primary-white text-[1.4rem] rounded-md shadow-md"
                >
                  Know more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiyoSurakhshaSection;
