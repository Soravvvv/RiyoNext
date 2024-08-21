"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import OurPresencemap from '../../../public/Image/logo/Map.png';

const HomeOurPresence: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center sm:h-[80vh] bgpresence sm:flex-row sm:justify-around sm:items-center ">
      <div className="md:w-[45%] w-full text-primary-white">
        <div className="flex flex-col">
            <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="text-[3rem] font-bold"
                    >
                       Our Presence
                    </motion.h1>
          <div className="h-2 md:w-[30%] w-full bg-gradient-to-r from-primary-orange to-primary-blue  "></div>
        </div>
        <p className="mt-4">
          We are thrilled to announce that we are on our way to serving the entire country! Our goal is to reach every corner of the nation, providing top-notch services to all our valued customers. While we continue to work towards this ambitious goal, we are excited to share that we have already extended our services to several new locations.
        </p>
        <p className="mt-4">
          We understand that waiting can be challenging, but we want you to know that we are working diligently to expand our reach. Our commitment to excellence and customer satisfaction drives us to move forward with our expansion plans at a rapid pace. In the meantime, we are pleased to inform you that our services are now available in the following locations:
        </p>
      </div>
      <div className="relative md:w-[35%] w-full flex justify-center items-center">
        <Image src={OurPresencemap} alt="Map showing our presence" />
      </div>
    </div>
  );
};

export default HomeOurPresence;
