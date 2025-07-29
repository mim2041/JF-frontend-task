import React from "react";
import premiumIcon from "@/assets/icons/premium.svg";
import reviewIcon from "@/assets/icons/review.svg";
import deliveryIcon from "@/assets/icons/delivery.svg";
import Image from "next/image";

const BrandValue = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 my-20 font-poppins bg-[#002B55] text-white py-10 rounded-lg py-12 md:py-16 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-[26px] md:text-[42px] font-[500] text-white">
          Trusted by over 6K+ customers
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between mt-6 lg:mt-10 w-full max-w-[800px]">
        <div className="flex items-center gap-4">
          <Image src={premiumIcon} alt="Premium Quality" className="" />
          <div>
            <p className="text-[20px] md:text-[28px] font-[500]">Premium</p>
            <p className="text-[16px] md:text-[22px]">Products</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src={reviewIcon} alt="High Reviews" className="" />
          <div>
            <p className="text-[20px] md:text-[28px] font-[500]">4000+</p>
            <p className="text-[16px] md:text-[22px]">Google Review</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src={deliveryIcon} alt="Fast Delivery" className="" />
          <div>
            <p className="text-[20px] md:text-[28px] font-[500]">Delivery</p>
            <p className="text-[16px] md:text-[22px]">Across India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandValue;
