"use client";
import { useState } from 'react';
import CountUp from '../../utils/CountUp';
import ScrollTrigger from '../../utils/ScrollTrigger';

export default function HomeAouImpact() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="bg-primary-white mt-4">
      <div className="p-4 flex flex-col justify-center items-center bg-blue-tranparent">
        <div className="flex w-[90%] justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-4xl md:text-6xl text-primary-blue font-bold">
                Our Impact
              </h1>
              <div className="w-[30%] h-1.5 bg-gradient-to-r from-primary-orange to-primary-blue rounded mt-2" />
            </div>
            <p className="text-text-clr mt-4 text-center">
              Turning insights into action has driven our impact on clients and
              communities over the years.
            </p>
          </div>
        </div>

        <div className="md:flex w-[90%] justify-evenly text-center grid grid-cols-[1fr_1fr_1fr] mt-8 md:flex-wrap ">
          {[
            { end: 225, label: 'Industries' },
            { end: 1467, label: 'Transport Companies' },
            { end: 2289, label: 'Lorry Brokers' },
            { end: 612, label: 'Lorry Suppliers' },
            { end: 25120, label: 'Lorry Drivers' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col  p-4  items-center"
            >
              <div className="relative w-20 h-20 md:w-48 md:h-48 bg-transparent rounded-full border-4 border-primary-orange border-dashed animate-spin-slow flex justify-center items-center">
                <div className="absolute top-0 left-0 w-20 h-20 md:w-48 md:h-48 flex justify-center items-center">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    <h1 className="text-xl md:text-4xl font-bold text-primary-blue">
                      {counterOn && (
                        <CountUp  end={item.end} duration={0.5} />
                      )}
                    </h1>
                  </ScrollTrigger>
                </div>
              </div>
              <p className="text-text-clr mt-4 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
