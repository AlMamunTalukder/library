
"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "./Slider.css"

import img1 from "../../../assets/images/slider/s.png";
import img2 from "../../../assets/images/slider/s2.jpg";
import img3 from "../../../assets/images/slider/s3.png";
import img4 from "../../../assets/images/slider/s4.png";
import img5 from "../../../assets/images/slider/s5.png";

const slides = [
  {
    img: img1,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img2,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img3,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img4,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img5,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
];

const Slider = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
 

  return (
    <>
      <div>
        <Swiper
          effect="fade"
          // navigation={{
          //   prevEl: ".swiper-button-prev", 
          //   nextEl: ".swiper-button-next", 
          // }}
          // navigation={false}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          // onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[200px] lg:h-[700px]">
                <Image
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  // objectFit="cover"
                  className="h-auto w-auto"

                />

                {/* <div className="absolute inset-0 bg-black bg-opacity-50"/> */}

                {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-bold space-y-10">

                <motion.h5
                  className="text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {slide.h5Text1}
                </motion.h5>

                <motion.h1
                  className="text-6xl font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 2 }}
                >
                  {slide.h1Text}
                </motion.h1>

                <motion.h5
                  className="text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {slide.h5Text2}
                </motion.h5>

                <Button>Read More</Button>

              </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
        {/* <div
        className="swiper-button-prev absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={() => swiperInstance.slidePrev()} // Trigger slide previous
      >
        <ArrowBack fontSize="large" style={{ color: "#fff" }} />
      </div>
      <div
        className="swiper-button-next absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={() => swiperInstance.slideNext()} // Trigger slide next
      >
        <ArrowForward fontSize="large" style={{ color: "#fff" }} />
      </div> */}
      </div>
    </>
  );
};

export default Slider;
