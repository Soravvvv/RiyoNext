"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';
// import { useAppDispatch } from '@/utils/hooks'; // Assuming you have a custom hook for dispatch
// import { setCurrentPage } from '@/store/features/CurrentPages'; // Adjust the path according to your structure

const RiyoBusinessSection: FC = () => {
//   const dispatch = useAppDispatch();

const router = useRouter();

  const handle = (value: string) => {
    router.push(`/riyologistics/riyo_business`);
  };

  return (
    <div className="h-[86vh] w-full flex justify-center items-center">
      <div className="h-[75vh] w-[94%] flex justify-center items-center">
      
        <div className="h-[75vh] w-[50%] flex justify-end items-center">
          <div className="h-[90%] w-[90%] flex flex-col gap-4">
            <div className="h-[21%] w-full flex items-center relative">
            {/* <div className="h-[5.25rem] w-[5.25rem] rounded-full bg-gradient-to-r from-primary-darkblue to-primary-orange animate-rotate"></div> */}
              <h1 className="text-[3.7rem] text-primary-darkblue font-bold font-arial">RIYO Business</h1>
            </div>
            <div className="h-[84%] w-full flex flex-col gap-4 text-black">
              <p className="text-[1.2rem] leading-[2rem]">
                <span className="text-primary-darkblue font-bold">At</span>{' '}
                <span className="text-primary-orange font-bold">RIYO BUSINESS,</span> is an innovative mobile application
                designed to empower lorry brokers by providing them with a comprehensive platform to expand and enhance
                their business. With RIYO Business, lorry brokers gain access to a range of powerful tools and features
                tailored to their needs, enabling them to efficiently manage their operations, connect with clients, and
                secure profitable business opportunities.
              </p>
              
                <button
                  onClick={() => handle("riyoLogisticData")}
                  className="h-[4.6rem] w-[15rem] bg-primary-darkblue text-primary-white text-[1.4rem] rounded-md shadow-md"
                >
                  Know more
                </button>
            </div>
          </div>
        </div>
        <div className="h-[70vh] w-[43%] flex relative">
          <div className="h-full w-[60%] bg-primary-orange rounded-md"></div>
          <div className="riyo-business-imgbox2"></div>
        </div>
      </div>
    </div>
  );
};

export default RiyoBusinessSection;
