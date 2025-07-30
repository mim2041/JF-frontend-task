"use client";

import React, { MutableRefObject, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";

type CustomSwiperProps = {
  children: ReactNode;
  swiperRef: MutableRefObject<SwiperType | null>;
};

const CustomSwiper = ({ children, swiperRef }: CustomSwiperProps) => {
  return (
    <div>
      <Swiper
        loop={false}
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        a11y={{ enabled: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
