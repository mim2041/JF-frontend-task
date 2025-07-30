import Image from "next/image";
import React from "react";
import badge from "@/assets/icons/badge.svg";
import centric from "@/assets/icons/centric.svg";
import innovative from "@/assets/icons/innovative.svg";
import card1bg from "@/assets/images/card1bg.svg";
import card2bg from "@/assets/images/card2bg.svg";
import card3bg from "@/assets/images/card3bg.svg";

const WhyUs = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 my-20 font-poppins text-center">
      <h1 className="text-[26px] md:text-[42px] font-[500] mb-6">Why Us</h1>
      <p className="text-[20px] hidden md:block">
        We specialize in delivering durable and innovative fencing solutions
        built to last. <br />
        With a focus on quality and trust, we help secure spaces across
        industries and <br />
        communities.
      </p>
      <p className="text-[16px] md:hidden">
        We specialize in delivering durable and innovative fencing solutions
        built to last. With a focus on quality and trust, we help secure spaces
        across industries and communities.
      </p>

      <div className="flex flex-row gap-6 md:gap-12 justify-start items-stretch overflow-x-auto no-scrollbar px-4 mt-10 text-left">
        <div
          className="rounded-lg p-6 md:p-10 flex flex-col items-left justify-between gap-6  bg-no-repeat bg-cover bg-center min-w-[300px] md:w-[400px] h-[400px] md:h-[500px] mt-12 md:mt-16"
          style={{
            backgroundImage: `url(${card1bg.src})`,
            borderRadius: "20px",
          }}
        >
          <Image
            src={badge}
            alt="Why Us"
            className="w-[30px] md:w-[49px] h-[50px] md:h-[70px]"
          />
          <h2 className="text-[18px] md:text-[26px] font-[500]">
            Unmatched Durability with Corrosion-Free Technology
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[150%]">
            Our JF-270 barbed wire features a robust 270 GSM zinc coating,
            ensuring superior resistance against rust and corrosion. Paired with
            stainless steel binding wire, our fencing solutions are designed to
            withstand harsh environmental conditions, offering longevity and
            reliability.
          </p>
        </div>
        <div
          className="rounded-lg p-6 md:p-10 flex flex-col items-left justify-between gap-6  bg-no-repeat bg-cover bg-center min-w-[300px] md:w-[400px] h-[400px] md:h-[500px] text-white rounded-2xl"
          style={{
            backgroundImage: `url(${card2bg.src})`,
            borderRadius: "20px",
          }}
        >
          <Image
            src={centric}
            alt="Why Us"
            className="w-[30px] md:w-[49px] h-[50px] md:h-[70px]"
          />
          <h2 className="text-[18px] md:text-[26px] font-[500]">
            Customer-Centric <br />
            Approach
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[150%]">
            At JF Products, customer satisfaction is paramount. We pride
            ourselves on delivering timely services, maintaining transparent
            communication, and ensuring a seamless purchasing experience. Our
            commitment to excellence is reflected in the positive feedback from
            our valued clients.
          </p>
        </div>
        <div
          className="rounded-lg p-6 md:p-10 flex flex-col items-left justify-between gap-6 bg-no-repeat bg-cover bg-center min-w-[300px] md:w-[400px] h-[400px] md:h-[500px] mt-12 md:mt-16"
          style={{
            backgroundImage: `url(${card1bg.src})`,
            borderRadius: "20px",
          }}
        >
          <Image
            src={innovative}
            alt="Why Us"
            className="w-[30px] md:w-[49px] h-[50px] md:h-[70px]"
          />
          <h2 className="text-[18px] md:text-[26px] font-[500]">
            Innovative and Diverse <br />
            Product Range
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[150%]">
            We offer a wide array of fencing solutions, including Polyhex Mesh,
            Australian Trellis, and GI Poultry Mesh, catering to various needs
            from agricultural to residential applications. Our products combine
            functionality with aesthetic appeal, ensuring both security and
            style.
          </p>
        </div>
      </div>
      <div>
        <button className="bg-[#B0DD1D] text-black w-[130px] md:w-[160px] h-[40px] md:h-[50px] rounded-full ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WhyUs;
