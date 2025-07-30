import React from "react";
import fance from "@/assets/icons/fance.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ProductBadge = () => {
  const marqueeData = [
    {
      id: 1,
      text: "Quality Product",
    },
    {
      id: 2,
      text: "Shipping Across India",
    },
    {
      id: 3,
      text: "Quality Product",
    },
    {
      id: 4,
      text: "Shipping Across India",
    },
  ];
  return (
    <div className="h-[80px] my-20">
      <div className="bg-[#D9ECFF] p-2  rotate-[-3deg] w-full flex items-center justify-between gap-3 md:gap-6 overflow-hidden">
        <Marquee autoFill={true} speed={20} pauseOnHover={true} loop={0}>
          {marqueeData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 md:gap-6 px-2 md:px-6"
            >
              <Image
                src={fance}
                alt="Product fance"
                className="w-[30px] md:w-[76px] rotate-[-3deg]"
              />
              <h2 className="text-[14px] md:text-[32px] font-[500]">
                {item.text}
              </h2>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ProductBadge;
