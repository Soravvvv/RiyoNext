"use client";
import React, { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import CountUp from '../../utils/CountUp';
import ScrollTrigger from '../../utils/ScrollTrigger';

interface Collaboration {
  heading: string;
  heading2?: number;
  heading3?: number;
  heading4?: number;
  detail: string;
}

interface LogisticAllData {
  collaborations: Collaboration[];
}

interface RiyoOurCollaborationsProps {
  logisticAllData: LogisticAllData;
}

const RiyoOurCollaborations: React.FC<RiyoOurCollaborationsProps> = ({ logisticAllData }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center bg-gradient-to-r from-primary-orange to-primary-blue p-6 lg:p-[9%] text-primary-white">
      
      {/* Heading Section */}
      <div className="lg:w-[50%] text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-2">
          <Bounce>{logisticAllData?.collaborations[0].heading}</Bounce>
        </h1>
      </div>
      
      {/* Counter Section 1 */}
      <div className="w-full text-center mb-6 lg:mb-0 lg:w-[25%]">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-1">
            <Bounce>
              {counterOn && (
                <CountUp
                  start={0}
                  end={logisticAllData?.collaborations[1].heading2 || 0}
                  duration={2}
                  delay={0}
                />
              )}
            </Bounce>
          </h1>
        </ScrollTrigger>
        <h3 className="font-bold mt-2 sm:mt-4 text-base sm:text-lg">
          {logisticAllData?.collaborations[1].detail}
        </h3>
      </div>
      
      {/* Counter Section 2 */}
      <div className="w-full text-center mb-6 lg:mb-0 lg:w-[25%]">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-1">
            <Bounce>
              {counterOn && (
                <CountUp
                  start={0}
                  end={logisticAllData?.collaborations[2].heading3 || 0}
                  duration={2}
                  delay={0}
                />
              )}
            </Bounce>
          </h1>
        </ScrollTrigger>
        <h3 className="font-bold mt-2 sm:mt-4 text-base sm:text-lg">
          {logisticAllData?.collaborations[2].detail}
        </h3>
      </div>
      
      {/* Counter Section 3 */}
      <div className="w-full text-center lg:w-[25%]">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-1">
            <Bounce>
              {counterOn && (
                <CountUp
                  start={0}
                  end={logisticAllData?.collaborations[3].heading4 || 0}
                  duration={2}
                  delay={0}
                />
              )}
            </Bounce>
          </h1>
        </ScrollTrigger>
        <h3 className="font-bold mt-2 sm:mt-4 text-base sm:text-lg">
          {logisticAllData?.collaborations[3].detail}
        </h3>
      </div>
    </div>
  );
};

export default RiyoOurCollaborations;
