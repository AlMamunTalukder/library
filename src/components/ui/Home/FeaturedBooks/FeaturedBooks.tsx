/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../../../../assets/images/books/201_Picture5.png";
import img2 from "../../../../assets/images/books/212_Picture1.png";
import img3 from "../../../../assets/images/books/6EfsPbdKtuPXiRm4f9fICNxPjjw7kGYzH5Ou9lEL.png";
import img4 from "../../../../assets/images/books/OCpRnn4duvXylMCGNzVQOcddEPaz62u1w7yMnkzS.png";
import img5 from "../../../../assets/images/books/Pages-from-hadis_sharif_02.jpg";
import img6 from "../../../../assets/images/books/Presentation1.jpg";
import img7 from "../../../../assets/images/books/Slide18.jpg";
import img8 from "../../../../assets/images/books/bukhari.png";
import img9 from "../../../../assets/images/books/dawd.png";
import img10 from "../../../../assets/images/books/muwatta_1.jpg";
import img11 from "../../../../assets/images/books/mishkat_shorif_1.jpg";
import img12 from "../../../../assets/images/books/sunan_an_nasai_1.jpg";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";


const FeaturedBooks = () => {
  const slides = [
    { image: img1, title: "Sample Development", link: "/sample-development" },
    { image: img2, title: "Merchandising", link: "/merchandising" },
    { image: img3, title: "Fabric Sourcing", link: "/fabric-sourcing" },
    { image: img4, title: "Production", link: "/production" },
    { image: img5, title: "QA And QC", link: "/qa-qc" },
    { image: img6, title: "Sample Development", link: "/sample-development" },
    { image: img7, title: "Merchandising", link: "/merchandising" },
    { image: img8, title: "Fabric Sourcing", link: "/fabric-sourcing" },
    { image: img9, title: "Production", link: "/production" },
    { image: img10, title: "QA And QC", link: "/qa-qc" },
    { image: img11, title: "Production", link: "/production" },
    { image: img12, title: "QA And QC", link: "/qa-qc" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image: any) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, 
//       once: false, 
//     });
//   }, []);


  return (
    <>
      <div className="relative w-full h-auto my-7" >
        
        <div className="text-center space-y-4 p-4" data-aos="fade-right">
          <h5 className="text-blue-400 text-base">
            Features Book
          </h5>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
           Alor Poth Pathagar&apos;s All 
            <span className="text-blue-400">{" "} Features Book</span>
          </h2>
          <h5 className="text-sm md:text-base text-gray-500">
          Alor Poth Pathagar is the largest library in 5no. Shuvopur Union.
          </h5>
        </div>
        <Swiper
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          data-aos="fade-up-left"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 my-10">
                <div className="relative group">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-48 md:h-64 lg:h-[500px] xl:h-[500px] object-cover"
                    onClick={() => handleImageClick(slide.image)}
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                    <button
                      className="text-white bg-gray-800 rounded-full p-3 mx-2 hover:bg-gray-700"
                      onClick={() => handleImageClick(slide.image)}
                    >
                      <SearchIcon />
                    </button>
                    <Link
                      href={slide.link}
                      className="text-white bg-gray-800 rounded-full p-3 mx-2 hover:bg-gray-700"
                    >
                      <ArrowOutwardIcon />
                    </Link>
                  </div>
                </div>

                <Link
                  href={slide.link}
                  className="block bg-white text-black hover:text-blue-400 py-2 font-semibold text-center"
                >
                  {slide.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal to show image */}
      {isOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="relative bg-white max-w-2xl p-5 rounded-md">
            <button
              className="absolute z-50 top-2 right-2 text-white text-2xl font-bold bg-[#337AB7] rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseSharp />
            </button>
            <Image
              src={currentImage}
              alt="Modal Image"
              className="w-full h-48 md:h-64 lg:h-[500px] xl:h-[500px] object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};



export default FeaturedBooks;