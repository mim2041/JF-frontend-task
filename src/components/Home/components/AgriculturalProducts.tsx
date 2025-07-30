"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useInView, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import CustomSwiper from "@/components/Shared/Swiper";
import { SwiperSlide } from "swiper/react";
import agriProducts from "@/data/AgriculturalProductsData";

const AgriculturalProducts = () => {
  const swiperRef = useRef(null);
  const componentRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "0.5 1"],
  });
  // Scroll effects for the entire swiper container
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={componentRef}
      style={{ scale, opacity, y: translateY }}
      className="max-w-[1280px] mx-auto px-6 md:px-0 my-20 font-poppins"
    >
      <h2 className="text-[26px] md:text-[42px] font-[500] mb-6">
        Agricultural Products
      </h2>
      <div className="relative pb-10 md:pb-0">
        <CustomSwiper swiperRef={swiperRef}>
          {agriProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-[#F2F4F6] p-2 rounded-2xl ">
                <div className="flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full"
                  />
                </div>
                <div className="p-2 flex flex-col justify-between gap-3 mt-4">
                  <h3 className="text-[14px] md:text-[18px] font-[600] ">
                    {product.title}
                  </h3>
                  <p className="text-[12px] md:text-[14px] font-[500] ">
                    {product?.price}
                  </p>
                  <button className="bg-[#B0DD1D] text-black w-[100px] md:w-[128px] h-[30px] md:h-[38px] rounded-full text-[12px] md:text-[14px] font-[500]">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CustomSwiper>
        <div className="hidden md:block">
          <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10  ">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <Image src={leftArrow} alt="Left Arrow" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
            <button onClick={() => swiperRef.current?.slideNext()}>
              <Image src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>

        {/* For Small device */}
        <div className="md:hidden absolute z-10 flex items-center gap-4 right-0 -bottom-8">
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
  );
};

export default AgriculturalProducts;
