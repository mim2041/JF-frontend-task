"use client";
import React, { useRef } from "react";
import agri1 from "@/assets/images/agri1.svg";
import agri2 from "@/assets/images/agri2.svg";
import agri3 from "@/assets/images/agri3.svg";
import agri4 from "@/assets/images/agri4.svg";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import CustomSwiper from "@/components/Shared/Swiper";
import { SwiperSlide } from "swiper/react";

const AgriculturalProducts = () => {
  const products = [
    {
      id: 1,
      image: agri1,
      title: "JF Barbed Wire- 270 GSM",
      price: "₹4,995.00",
    },
    {
      id: 2,
      image: agri2,
      title: "FGC RustFree Fencing Poles",
      price: "₹499.00 – ₹1,589.00",
    },
    {
      id: 3,
      image: agri3,
      title: "GI Poultry Mesh",
      price: "₹1,260.00 – ₹10,750.00",
    },
    {
      id: 4,
      image: agri4,
      title: "JF Bluelink Mesh",
      price: "₹3,067.50 – ₹6,362.50",
    },
    {
      id: 5,
      image: agri1,
      title: "JF Barbed Wire- 270 GSM",
      price: "₹4,995.00",
    },
    {
      id: 6,
      image: agri2,
      title: "FGC RustFree Fencing Poles",
      price: "₹499.00 – ₹1,589.00",
    },
    {
      id: 7,
      image: agri3,
      title: "GI Poultry Mesh",
      price: "₹1,260.00 – ₹10,750.00",
    },
    {
      id: 8,
      image: agri4,
      title: "JF Bluelink Mesh",
      price: "₹3,067.50 – ₹6,362.50",
    },
  ];
  const swiperRef = useRef(null);

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 my-20 font-poppins">
      <h2 className="text-[24px] md:text-[32px] font-[500] mb-6">
        Agricultural Products
      </h2>
      <div className="relative">
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
        <div>
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
      </div>
    </div>
  );
};

export default AgriculturalProducts;
