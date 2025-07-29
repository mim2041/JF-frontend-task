"useClient";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";

const CustomSwiper = ({ children, swiperRef }) => {
  return (
    <div>
      <Swiper
        modules={[A11y]}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        a11y={{ enabled: true }}
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
