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
    <div className="relative overflow-hidden py-4">
      {/* Title Section */}
      <div className="w-full px-4 text-start md:text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-blue font-light mt-6 mb-8 lg:mt-10 lg:mb-10">
          <Bounce>Testimonials</Bounce>
        </h1>
        <div className="mx-auto lg:ml-5 my-1 w-20 sm:w-28 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-primary-orange to-primary-blue rounded-r-full mb-6 lg:mb-9 "></div>
      </div>

      {/* Slider Section */}
      <div className="relative h-auto">
        <Slider {...settings} className="pt-2">
          {Object.keys(logisticAllData.testimonials).map((key, index) => {
            const testimonial = logisticAllData.testimonials[key as keyof typeof logisticAllData.testimonials];
            return (
              <div key={index}>
                <div className="relative px-4 flex flex-col lg:flex-row items-center bg-primary-blue_tranparent h-auto lg:h-49vh">
                  {/* Text Section */}
                  <div className="lg:w-2/3 w-full text-center lg:text-left">
                    <p className="text-lg sm:text-xl md:text-2xl py-5 lg:py-7 leading-snug lg:leading-normal text-left pr-0 lg:pr-1 text-primary-text_clr">
                      {testimonial.paragraph}
                    </p>
                    <p className="leading-7 lg:leading-10 text-primary-text_clr text-lg text-left sm:text-xl lg:text-2xl font-bold">
                      {testimonial.name}<br />
                      {testimonial.director}<br />
                      {testimonial.logistics}
                    </p>
                  </div>
                  
                  {/* Image Section */}
                  <div className="relative h-48 lg:h-full w-full lg:w-1/3 mt-5 lg:mt-0">
                    <div className="absolute top-0 left-0 h-4/5 w-3/5 lg:w-7/10 bg-primary-orange"></div>
                    <div className="absolute h-4/5 w-3/5 lg:w-7/10 right-0 bottom-0 bg-primary-orange"></div>
                    <Image
                      src={image}
                      className="h-full z-10 relative rounded-md"
                      alt="Testimonial"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default RiyoLogisticsTestimonials;
