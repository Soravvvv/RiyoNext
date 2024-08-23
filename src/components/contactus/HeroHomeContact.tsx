import { FC } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const HeroHomeContact: FC = () => {
  return (
    <div className="contactusimage">
      <div className="w-[95%] h-full md:h-[80vh] flex flex-col lg:flex-row justify-between items-center opacity-90 bg-primary-blue">
        <div className="flex flex-col lg:flex-row justify-between w-[97%] h-[90%]">
          <div className="w-full lg:w-[65%] h-auto lg:h-[60vh] mb-8 lg:ml-7">
            <div className="w-full h-auto lg:h-[70vh]">
              <p className="text-xl md:text-[1.5rem] text-primary-orange py-4">For more queries</p>
              <h1 className="text-4xl font-bold md:text-[2.9rem] py-2 mb-5 text-primary-white">Get In Touch</h1>
              <div className="flex flex-col gap-6 h-auto lg:h-[49vh] w-full justify-center">
                <div className="flex  gap-5 w-full sm:flex-row">
                  <input type="text" placeholder="Enter Your First Name" className="h-[7vh] w-full sm:w-[50%] text-lg md:text-[1.4rem] text-primary-black rounded-lg border-none outline-none px-4 focus:bg-primary-orange focus:text-primary-white" />
                  <input type="text" placeholder="Enter Your Last Name" className="h-[7vh] w-full sm:w-[50%] text-lg md:text-[1.4rem] text-primary-black rounded-lg border-none outline-none px-4 focus:bg-primary-orange focus:text-primary-white" />
                </div>
                <div className="flex  gap-5 w-full sm:flex-row">
                  <input type="text" placeholder="Enter Your Phone Number" className="h-[7vh] w-full sm:w-[50%] text-lg md:text-[1.4rem] text-primary-black rounded-lg border-none outline-none px-4 focus:bg-primary-orange focus:text-primary-white" />
                  <input type="text" placeholder="Enter Your Email Address" className="h-[7vh] w-full sm:w-[50%] text-lg md:text-[1.4rem] text-primary-black rounded-lg border-none outline-none px-4 focus:bg-primary-orange focus:text-primary-white" />
                </div>
                <textarea placeholder="Enter Message" className="w-full h-[20vh] rounded-lg border-none outline-none text-lg md:text-[1.4rem] focus:bg-primary-orange focus:text-primary-white"></textarea>
                <div className="flex justify-center items-center">
                  <button className="w-[9.375rem] h-[3.125rem] rounded-lg border-none text-xl md:text-[1.4rem] text-primary-orange bg-primary-white hover:bg-primary-orange opacity-100 hover:text-primary-white">
                    <b>Submit</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[35%] h-[55vh] lg:h-[70vh] relative">
            <div className="w-full lg:w-[40%] h-full lg:h-[70vh] flex flex-col justify-between lg:ml-10">
              <div className="w-[50%] h-[30%] md:w-[60%] md:h-[20vh] bg-primary-darkblue opacity-90 rounded-lg border-l-[7px] border-t-[7px] border-primary-white ml-[-0.5rem]"></div>
              <div className="w-[50%] h-[30%] md:w-[60%] md:h-[20vh] bg-primary-darkblue opacity-90 rounded-lg border-l-[7px] border-b-[7px] border-primary-white ml-[-0.5rem]"></div>
            </div>
            <div className="absolute w-full lg:w-[88%] h-auto lg:mt-2 lg:h-[65vh] bg-primary-orange top-3 right-0 z-10 flex flex-col rounded-lg">
              <h2 className="text-primary-white text-center mt-[-0.5rem] py-6 text-[1.875rem]">Contact Info</h2>
              <div className="flex flex-col justify-around gap-5 h-auto lg:h-[50vh]">
                <div className="flex justify-center items-center py-3 md:py-0 px-5 gap-8 w-full">
                  <div className="flex justify-center items-center w-[4rem] h-[3rem] md:h-[5rem] md:w-[5rem] bg-primary-darkblue rounded-full">
                    <AiOutlineInfoCircle className="text-primary-white md:text-[4rem] text-3xl" />
                  </div>
                  <div className="flex flex-col w-full lg:w-[50%]">
                    <p className="font-bold text-primary-white">RIYO Office</p>
                    <p className="text-primary-white">2nd Floor SK Tower, Behind Reliance Market, Niranjanpur, Mandi, Dehradun, UK, 248001, India</p>
                  </div>
                </div>
                <a href="tel:03335561099" className="flex gap-6 items-center px-5 py-3 md:py-0 w-full no-underline">
                  <div className="flex justify-center items-center w-[4rem] h-[3rem] md:h-[5rem] md:w-[5rem] bg-primary-darkblue rounded-full lg:ml-12">
                    <AiOutlineInfoCircle className="text-primary-white  md:text-[4rem] text-3xl" />
                  </div>
                  <div className="flex flex-col w-full lg:w-[50%]">
                    <p className="font-bold text-primary-white">Phone Number</p>
                    <p className="text-primary-white">033 35561099</p>
                  </div>
                </a>
                <a href="mailto:Hello@riyorentitoverindia.com" className="flex gap-6 items-center px-5 py-3 md:py-0 w-full no-underline">
                  <div className="flex justify-center items-center w-[4rem] h-[3rem] md:h-[5rem] md:w-[5rem] bg-primary-darkblue rounded-full lg:ml-12">
                    <AiOutlineInfoCircle className="text-primary-white  md:text-[4rem] text-3xl" />
                  </div>
                  <div className="flex flex-col w-full lg:w-[50%]">
                    <p className="font-bold text-primary-white mt-3">Mail Us</p>
                    <p className="text-primary-white mt-1">Hello@riyorentitoverindia.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHomeContact;
