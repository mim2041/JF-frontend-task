"use client";
import React, { useRef } from "react";
import land1 from "@/assets/images/land1.svg";
import land2 from "@/assets/images/land2.svg";
import land3 from "@/assets/images/land3.svg";
import land4 from "@/assets/images/land4.svg";
import Image from "next/image";
import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import CustomSwiper from "@/components/Shared/Swiper";
import { SwiperSlide } from "swiper/react";

const LandscapeProducts = () => {
  const products = [
    {
      id: 1,
      image: land1,
      title: "Antiqo Fence",
      price: "₹10,024.00 – ₹14,984.82",
    },
    {
      id: 2,
      image: land2,
      title: "JF Australian Trellis",
      price: "₹6,962.00",
    },
    {
      id: 3,
      image: land3,
      title: "JF Polyhex Mesh",
      price: "₹4,050.00 – ₹10,770.00",
    },
    {
      id: 4,
      image: land4,
      title: "JF Privezy Grass Wall",
      price: "₹1,646.10 – ₹18,284.10",
    },
    {
      id: 5,
      image: land1,
      title: "Antiqo Fence",
      price: "₹10,024.00 – ₹14,984.82",
    },
    {
      id: 6,
      image: land2,
      title: "JF Australian Trellis",
      price: "₹6,962.00",
    },
    {
      id: 7,
      image: land3,
      title: "JF Polyhex Mesh",
      price: "₹4,050.00 – ₹10,770.00",
    },
    {
      id: 8,
      image: land4,
      title: "JF Privezy Grass Wall",
      price: "₹1,646.10 – ₹18,284.10",
    },
  ];
  const swiperRef = useRef(null);

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 my-20 font-poppins">
      <h2 className="text-[26px] md:text-[42px] font-[500] mb-6">
        Landscape Products
      </h2>
      <div className="relative pb-10 md:pb-0">
        <CustomSwiper swiperRef={swiperRef}>
          {products.map((product) => (
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
    </div>
  );
};

export default LandscapeProducts;
