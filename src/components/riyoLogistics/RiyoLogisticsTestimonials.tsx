"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import image from '../../../public/Image/home/riyotestimosliderimgae.jpg';
import { Bounce } from 'react-awesome-reveal';

interface TestimonialData {
  paragraph: string;
  name: string;
  director: string;
  logistics: string;
}

interface RiyoLogisticsTestimonialsProps {
  logisticAllData: {
    testimonials: {
      slider1: TestimonialData;
      slider2: TestimonialData;
      slider3: TestimonialData;
      slider4: TestimonialData;
    };
  };
}

const RiyoLogisticsTestimonials: React.FC<RiyoLogisticsTestimonialsProps> = ({ logisticAllData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative overflow-hidden py-2">
      <div className="w-full px-4">
        <h1 className="text-7xl text-primary-blue font-light mt-10 mb-10 ml-5 ">
          <Bounce>Testimonials</Bounce>
        </h1>
        <div className="my-1 w-40 h-1 bg-gradient-to-r from-primary-orange to-primary-blue rounded-r-full mb-9 ml-5"></div>
      </div>
      <div className="relative h-auto">
        <Slider {...settings} className="pt-2">
          {Object.keys(logisticAllData.testimonials).map((key, index) => {
            const testimonial = logisticAllData.testimonials[key as keyof typeof logisticAllData.testimonials];
            return (
              <div key={index}>
                <div className="relative px-4 flex items-center bg-primary-blue_tranparent h-49vh">
                  <div className="w-2/3">
                    <p className="text-2xl py-7 -mt-6 leading-1 pr-1 text-primary-text_clr">{testimonial.paragraph}</p>
                    <p className="leading-10 text-primary-text_clr text-2xl">
                      <b>{testimonial.name}<br />
                        {testimonial.director} <br />
                        {testimonial.logistics}
                      </b>
                    </p>
                  </div>
                  <div className="absolute h-full w-1/3 right-4 bottom-1">
                    <div className="absolute top-0 left-0 h-4/5 w-7/10 bg-primary-orange"></div>
                    <div className="absolute h-4/5 w-7/10 right-0 bottom-0 bg-primary-orange"></div>
                    <Image src={image} className="h-full z-1 relative rounded-md" alt="Testimonial" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="slick-dots absolute bottom-1  flex items-center">
          {/* Dot styling */}
          <ul className=" w-1/4 h-10  ml-[25%] flex  ">
            {/* Use Tailwind classes or customize as needed */}
            <li><button className="text-primary-orange text-xl">•</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RiyoLogisticsTestimonials;
