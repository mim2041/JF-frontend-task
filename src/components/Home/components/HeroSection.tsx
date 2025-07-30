"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import leftArrow from "@/assets/icons/left.svg";
import rightArrow from "@/assets/icons/right.svg";
import heroBg from "@/assets/images/heroBg.svg";
import image1 from "@/assets/images/image1.jpeg";
import image2 from "@/assets/images/image2.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const HeroSection = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "JF Privezy Grass Wall",
      description: "The Perfect Blend Of Greenery",
      image: image1,
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "Australian Durability",
      description: "Premium Quality Materials",
      image: image2,
      buttonText: "Nahean Tarik",
    },
    {
      id: 3,
      title: "Chain Link Solutions",
      description: "Secure & Reliable Fencing",
      image: image1,
      buttonText: "Learn More",
    },
    {
      id: 6,
      title: "Chain Link Solutions",
      description: "Secure & Reliable Fencing",
      image: image2,
      buttonText: "Learn More",
    },
    {
      id: 4,
      title: "Chain Link Solutions",
      description: "Secure & Reliable Fencing",
      image: image1,
      buttonText: "Learn More",
    },
    {
      id: 5,
      title: "Chain Link Solutions",
      description: "Secure & Reliable Fencing",
      image: image2,
      buttonText: "Learn More",
    },
  ];

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
      <div className="relative flex items-center justify-center w-full mt-">
        <div className="w-full  mx-auto px-4 relative pb-20 md:pb-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1.3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="w-full h-[500px] bg-[#F2F4F6] rounded-3xl overflow-hidden shadow p-4">
                  <div className="flex flex-col md:flex-row h-full w-full ">
                    {/* Left - Image */}
                    <div
                      className="w-full md:w-1/2 h-[250px] md:h-full relative p-6"
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
                <Image src={leftArrow} alt="Left Arrow" />
              </button>
            </div>
            <div className="absolute top-1/2 right-[20%] transform -translate-y-1/2 z-10">
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image src={rightArrow} alt="Right Arrow" />
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
      </div>
    </div>
  );
};

export default HeroSection;
