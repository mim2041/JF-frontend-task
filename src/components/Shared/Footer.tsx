"use client";
import React from "react";
import logo from "@/assets/logos/logo1.svg";
import fb from "@/assets/icons/fb.svg";
import insta from "@/assets/icons/instagram.svg";
import youtube from "@/assets/icons/youtube.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const btnVariants = {
    initial: { scale: 0.9 },
    animate: {
      scale: 1,
      transition: {
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="mt-16 font-poppins">
      <div className="bg-[#002B55] py-8 md:py-16 text-white ">
        <div className="max-w-[1280px] mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-[250px]">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-[500] mb-2">
              Join Our JF Products
            </h2>
            <p className="text-[16px] md:text-[20px]">
              We'll share you about store updates and discounts
            </p>
            <div className="mt-5 mb-4 w-full md:w-[500px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-2xl bg-[#FFFFFF1A] transparent w-full placeholder:text-[16px] md:placeholder:text-[20px] placeholder:text-white"
              />
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className=" bg-[#FFFFFF1A] bg-transparent"
              />
              <p className="text-[14px] md:text-[18px] ">
                Yes, subscribe me to your newsletter
              </p>
            </div>
            <div className="mt-6">
              <button className="bg-white text-[#002B55] py-2 px-4 rounded-full w-full text-[16px] md:text-[20px] font-semibold hover:bg-[#002B55] hover:transition-all hover:duration-300 hover:text-white border border-[#002B55] hover:border-white transition-colors duration-300">
                Join Now
              </button>
            </div>
          </div>

          <div className="flex gap-8 lg:gap-12 mt-8 md:mt-0 items-right justify-between w-full md:w-1/2">
            <div>
              <h2 className="text-[24px] md:text-[32px] font-[500] mb-2">
                Information
              </h2>
              <ul className="mt-3 text-[16px] md:text-[20px] flex flex-col gap-2">
                <li>Home</li>
                <li>Shop</li>
                <li>Our Story</li>
                <li>Blogs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[24px] md:text-[32px] font-[500] mb-2">
                Helpful
              </h2>
              <ul className="mt-3 text-[16px] md:text-[20px] flex flex-col gap-2">
                <li>FAQs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>My Account</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1280px] mx-auto px-6 md:px-0 my-12 md:my-20 md:mb-12">
          <div className="flex items-center justify-center gap-6 md:gap-8 text-[16px] md:text-[20px]">
            <motion.div
              variants={btnVariants}
              initial="initial"
              animate="animate"
            >
              <Image
                src={logo}
                alt="Logo"
                className="mx-auto w-[100px] md:w-[132px]"
              />
            </motion.div>
            <div>
              <p className="font-[600] mb-1">Our Branches</p>
              <p>Coimbatore, Chennai, Hyderabad, Goa, Korchi</p>
            </div>
          </div>
          <motion.div
            variants={btnVariants}
            initial="initial"
            animate="animate"
          >
            <button className="bg-[#B0DD1D] text-black w-[130px] md:w-[160px] h-[40px] md:h-[50px] rounded-full ">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1280px] px-6 lg:px-0 my-4 md:my-6 mx-auto">
        <div className="flex  items-center justify-between w-full">
          <p className=" text-[12px] md:text-[18px] text-black ">
            Copyright © 2025 JF Products. All rights reserved
          </p>
          <div>
            <div className="flex justify-center gap-2 md:gap-4 ">
              <Image src={fb} alt="Facebook" width={24} height={24} />
              <Image src={insta} alt="Instagram" width={24} height={24} />
              <Image src={youtube} alt="YouTube" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
