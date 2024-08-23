"use client"
import { FC } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import img1 from "../../../public/Image/image/sliderimg1.png";
import img2 from "../../../public/Image/image/sliderimg2.png";
import img3 from "../../../public/Image/image/sliderimg3.png";
import img4 from "../../../public/Image/image/sliderimg4.png";

const MissionVision: FC = () => {
  const setting: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className="h-auto md:h-[80vh] w-full flex justify-center items-center py-8 md:py-0">
      <div className="h-auto md:h-[70vh] w-full md:w-[90%] flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
        <div className="h-[50vh] md:h-[65vh] w-[90%] md:w-[35%] rounded-lg bg-primary-darkblue md:clip-path-custom-1 clip-path-custom-3 flex justify-center items-center p-4 md:p-0">
          <div className="w-[90%]">
            <h5 className="text-primary-orange text-xl md:text-2xl font-bold font-sans">Mission</h5>
            <p className="text-primary-white text-sm md:text-base mt-2 leading-6 md:leading-7 font-sans">
              RIYO is committed to transforming logistics through seamless tech
              integration. Our Riyo app connects industry facets, streamlining
              operations for stakeholders. Operating across logistics, we unify
              major players for efficient workload management. Our mission
              prioritizes industry enhancement, fostering collaboration in an
              interactive space. We empower stakeholders, driving optimization
              and innovation in logistics management.
            </p>
          </div>
        </div>
        <div className="h-[40vh] md:h-[90%] w-[90%] md:w-[30%] rounded-xl overflow-hidden">
          <Slider {...setting}>
            <div>
              <Image
                src={img1}
                alt="Slide Image 1"
                className="w-full h-[35vh] md:h-[63vh]"
              />
            </div>
            <div>
              <Image
                src={img2}
                alt="Slide Image 2"
                className="w-full h-[35vh] md:h-[63vh]"
              />
            </div>
            <div>
              <Image
                src={img3}
                alt="Slide Image 3"
                className="w-full h-[35vh] md:h-[63vh]"
              />
            </div>
            <div>
              <Image
                src={img4}
                alt="Slide Image 4"
                className="w-full h-[35vh] md:h-[63vh]"
              />
            </div>
          </Slider>
        </div>
        <div className="h-[50vh] md:h-[65vh] w-[90%] md:w-[35%] bg-primary-darkblue rounded-lg md:clip-path-custom-2 clip-path-custom-4 flex justify-center items-center p-4 md:p-0">
          <div className="w-[90%]">
            <h5 className="text-primary-orange text-xl md:text-2xl font-bold font-sans">Vision</h5>
            <p className="text-primary-white text-sm md:text-base mt-2 leading-6 md:leading-7 font-sans">
              Our vision is to optimize India's highways by consolidating and
              refining critical services for national roadways. We strive to
              broaden and enhance our solutions across all Indian national
              highways, establishing ourselves as a premier provider of
              efficient logistics solutions to tackle industry challenges
              effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
