"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logos/logo.svg";
import loginIcon from "@/assets/icons/login.svg";
import search from "@/assets/icons/search.svg";
import cart from "@/assets/icons/cart.svg";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { PiHandbagSimpleLight } from "react-icons/pi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex items-center justify-between relative max-w-[1280px] mx-auto px-6 md:px-0 md:my-10 py-4 md:py-6 font-poppins">
        <nav className="hidden md:flex flex-1">
          <ul className="flex gap-7 text-[18px] cursor-pointer">
            {["Home", "Shop", "Blog", "Contact"].map((item) => (
              <li
                key={item}
                className="border-b-3 border-white hover:border-b-3 hover:border-[#002B55] hover:transition-all duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1 flex md:justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Image
            src={logo}
            alt="Logo"
            className="w-[60px] md:w-[100px] lg:w-[111px]"
          />
        </div>

        <div className="hidden md:flex items-center gap-7">
          <button className="flex items-center gap-2 ">
            Login
            <Image src={loginIcon} alt="login" />
          </button>

          <Image src={search} alt="Search" className="ml-4" title="Search" />
          <Image src={cart} alt="Cart" className="ml-4" title="Cart" />
        </div>

        {/* Mobile view: hamburger */}
        <div className="flex md:hidden items-center justify-end flex-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#002B55]"
            aria-label="Toggle menu"
          >
            <IoMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Items */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-[#002B55] text-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-6 pt-10">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-[#002B55]"
            aria-label="Close menu"
          >
            <RxCross2 size={24} className="text-white" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-6 text-[18px]">
          {["Home", "Shop", "Blog", "Contact"].map((item) => (
            <li
              key={item}
              className="border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              {item}
            </li>
          ))}
          <li className="mt-4">
            <button className="flex items-center gap-2">
              Login
              <AiOutlineUser size={24} className="text-white" />
            </button>
          </li>
          <div className="flex gap-4 mt-4">
            <FiSearch size={24} className="text-white" />
            <div className="relative">
              <PiHandbagSimpleLight size={24} className="text-white" />
              <span className="absolute -top-2 -right-2 bg-white text-[#002B55] text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
