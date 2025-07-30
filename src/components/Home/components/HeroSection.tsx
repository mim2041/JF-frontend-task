"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import leftArrow from "@/assets/icons/left.svg";
import rightArrow from "@/assets/icons/right.svg";
import heroBg from "@/assets/images/heroBg.svg";
import { easeInOut, motion } from "framer-motion";
import { Swiper as SwiperClass } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import slidesData from "@/data/HeroData";

const HeroSection = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const heroVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const heroTransition = {
    duration: 0.8,
    ease: easeInOut,
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Main Hero Section */}
      <motion.div
        className="relative flex items-center justify-center w-full lg:h-[678px]"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={heroTransition}
      >
        <div className="w-full h-full mx-auto px-4 relative pb-20 md:pb-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={1.6}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 1.3,
              },
              1024: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 1.8,
              },
            }}
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="w-full md:h-[678px] bg-[#F2F4F6] rounded-3xl overflow-hidden shadow p-4">
                  <div className="flex flex-col md:flex-row h-full w-full ">
                    {/* Left - Image */}
                    <div
                      className="w-full md:w-1/2 h-[250px] md:h-full relative p-4 md:p-10"
                      style={{
                        backgroundImage: `url(${heroBg.src})`,
                        borderRadius: "20px",
                      }}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-10 py-6">
                      <h1 className="text-2xl md:text-4xl font-bold mb-3">
                        {slide.title}
                      </h1>
                      <p className="text-md md:text-lg mb-8 ">
                        {slide.description}
                      </p>
                      <div>
                        <button className="bg-[#B0DD1D] text-black w-[130px] md:w-[150px] h-[40px] md:h-[50px] rounded-full ">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Positioned relative to navbar width container */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-[20%] transform -translate-y-1/2 z-10  ">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src={leftArrow}
                  alt="Left Arrow"
                  className="w-[30px] md:w-[51px]"
                />
              </button>
            </div>
            <div className="absolute top-1/2 right-[20%] transform -translate-y-1/2 z-10">
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src={rightArrow}
                  alt="Right Arrow"
                  className="w-[30px] md:w-[51px]"
                />
              </button>
            </div>
          </div>

          {/* For Small device */}
          <div className="md:hidden absolute z-10 flex items-center gap-4 right-6 -bottom-0">
            <div className=" ">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image src={leftArrow} alt="Left Arrow" />
              </button>
            </div>
            <div className="">
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image src={rightArrow} alt="Right Arrow" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
