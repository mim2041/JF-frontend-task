"use client";
import React, { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import customer from "@/assets/images/customer.svg";
import bg from "@/assets/images/bg.svg";
import comma from "@/assets/icons/comma.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";

const Feedback = () => {
  const swiperRef = useRef(null);

  const feedbackData = [
    {
      id: 1,
      name: "Samuel Varughese",
      feedback:
        "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: customer,
    },
    {
      id: 2,
      name: "Samuel Varughese",
      feedback:
        "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: customer,
    },
    {
      id: 3,
      name: "Samuel Varughese",
      feedback:
        "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: customer,
    },
    {
      id: 4,
      name: "Samuel Varughese",
      feedback:
        "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
      image: customer,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 my-20 font-poppins flex flex-col items-center justify-center">
      <h1 className="flex items-center gap-2 text-[26px] md:text-[42px] font-[500] mb-6">
        Why Customers Love{" "}
        <span className="text-white">
          <FaHeart />
        </span>{" "}
        Us?
      </h1>

      <div className="relative">
        <Swiper
          loop={false}
          modules={[A11y, Autoplay]}
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          a11y={{ enabled: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          className="max-w-sm md:max-w-md lg:max-w-[1280px]"
        >
          {feedbackData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-start md:items-center justify-between gap-3 md:gap-8 mb-8 relative">
                <div className="bg-[#F2F4F6] py-3  max-w-[880px] lg:h-[600px] h-full rounded-3xl flex flex-col justify-between">
                  <div className="px-3 md:px-12">
                    <div className="flex items-center gap-2 mt-5 mb-5 md:mb-12">
                      <Image
                        src={comma}
                        alt="comma"
                        className="w-[20px] md:w-[32px]"
                      />
                      <Image
                        src={comma}
                        alt="comma"
                        className="w-[20px] md:w-[32px]"
                      />
                    </div>
                    <p className="text-[16px] md:text-[28px] max-w-[760px] ">
                      {item.feedback}
                    </p>
                  </div>

                  <div
                    className="flex items-center px-3 md:px-8 mx-3 relative mt-4 md:mt-0"
                    style={{
                      backgroundImage: `url(${bg.src})`,
                      borderRadius: "20px",
                    }}
                  >
                    <h1 className="text-[18px] md:text-[32px] font-[600] py-3 md:py-10">
                      - {item.name}
                    </h1>

                    <div className=" absolute z-10 flex items-center gap-4 -right-32 md:right-8 bottom-8">
                      <div className=" ">
                        <button onClick={() => swiperRef.current?.slidePrev()}>
                          <Image
                            src={leftArrow}
                            alt="Left Arrow"
                            className="w-[30px] md:w-[51px]"
                          />
                        </button>
                      </div>
                      <div className="">
                        <button onClick={() => swiperRef.current?.slideNext()}>
                          <Image
                            src={rightArrow}
                            alt="Right Arrow"
                            className="w-[30px] md:w-[51px]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F2F4F6] p-1 md:p-3 rounded-3xl lg:w-[380px] lg:h-[600px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className=" h-full w-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
