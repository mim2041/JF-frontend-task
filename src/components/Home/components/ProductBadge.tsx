import React from "react";
import fance from "@/assets/icons/fance.svg";
import Image from "next/image";

const ProductBadge = () => {
  return (
    <div className="h-[80px] my-20">
      <div className="bg-[#D9ECFF] p-2  rotate-[-3deg] w-full flex items-center justify-between gap-3 md:gap-6 overflow-hidden">
        <Image
          src={fance}
          alt="Product fance"
          className="w-[30px] md:w-[76px] rotate-[-3deg]"
        />
        <h2 className="text-[14px] md:text-[32px] font-[500]">
          Quality Product
        </h2>
        <Image
          src={fance}
          alt="Product fance"
          className="w-[30px] md:w-[76px] rotate-[-3deg]"
        />
        <h2 className="text-[14px] md:text-[32px] font-[500]">
          Shipping Across India
        </h2>
        <Image
          src={fance}
          alt="Product fance"
          className="w-[30px] md:w-[76px] rotate-[-3deg]"
        />
        <h2 className="text-[14px] md:text-[32px] font-[500] hidden md:block">
          Quality Product
        </h2>
        <Image
          src={fance}
          alt="Product fance"
          className="w-[30px] md:w-[76px] hidden md:block rotate-[-3deg]"
        />
        <h2 className="text-[14px] md:text-[32px] font-[500] hidden md:block">
          Shipping Across India
        </h2>
        <Image
          src={fance}
          alt="Product fance"
          className="w-[30px] md:w-[76px] hidden md:block rotate-[-3deg]"
        />
      </div>
    </div>
  );
};

export default ProductBadge;
