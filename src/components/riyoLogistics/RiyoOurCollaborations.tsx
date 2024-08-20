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
  logisticAllData?: LogisticAllData;
}

const RiyoOurCollaborations: React.FC<RiyoOurCollaborationsProps> = ({ logisticAllData }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="flex justify-between items-center p-[9%_4%] bg-gradient-to-r from-primary-orange to-primary-blue text-primary-white md:flex-col md:items-start md:p-[4%_0%] md:grid md:grid-rows-[auto_auto_auto] md:grid-cols-2 md:gap-[0.625rem]">
      <div className="w-[42%] text-5xl font-bold p-[0%_2%] md:w-full md:text-center  md:row-[1/2] md:col-[1/-1]">
        <h1><Bounce>{logisticAllData?.collaborations[0].heading}</Bounce></h1>
      </div>

      <div className="text-center font-bold p-[0%_1%] text-5xl w-full md:row-[2/3] md:col-[1/2] md:text-3xl">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <h1>
            <Bounce>
              {counterOn && logisticAllData?.collaborations[1].heading2 !== undefined && (
                <CountUp
                  end={logisticAllData.collaborations[1].heading2}
                  duration={2}
                />
              )}
            </Bounce>
          </h1>
        </ScrollTrigger>
        <h3 className="mt-4">{logisticAllData?.collaborations[1].detail}</h3>
      </div>

      <div className="text-center font-bold p-[0%_1%] text-5xl w-full md:row-[2/3] md:col-[2/3] md:text-3xl">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <h1>
            <Bounce>
              {counterOn && logisticAllData?.collaborations[2].heading3 !== undefined && (
                <CountUp
                  end={logisticAllData.collaborations[2].heading3}
                  duration={2}
                />
              )}
            </Bounce>
          </h1>
        </ScrollTrigger>
        <h3 className="mt-4">{logisticAllData?.collaborations[2].detail}</h3>
      </div>

      <div className="text-center font-bold p-[0%_1%] text-5xl w-full md:row-[3/4] md:col-[1/-1] md:text-3xl">
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <h1>
            <Bounce>
              {counterOn && logisticAllData?.collaborations[3].heading4 !== undefined && (
                <CountUp
                  end={logisticAllData.collaborations[3].heading4}
                  duration={2}
                />
              )}
            </Bounce>
          </h1>
        </ScrollTrigger>
        <h3 className="mt-4">{logisticAllData?.collaborations[3].detail}</h3>
      </div>
    </div>
  );
};

export default RiyoOurCollaborations;
