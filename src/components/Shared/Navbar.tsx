import Image from "next/image";
import React from "react";
import logo from "@/assets/logos/logo.svg";
import loginIcon from "@/assets/icons/login.svg";
import search from "@/assets/icons/search.svg";
import cart from "@/assets/icons/cart.svg";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 py-6 font-poppins">
      <div className="flex items-center justify-between">
        <div>
          <nav>
            <ul className="flex gap-7 text-[18px] cursor-pointer">
              <li className="border-b-3 border-white hover:border-b-3 hover:border-[#002B55] hover:transition-all duration-300">
                Home
              </li>
              <li className="border-b-3 border-white hover:border-b-3 hover:border-[#002B55] hover:transition-all duration-300">
                Shop
              </li>
              <li className="border-b-3 border-white hover:border-b-3 hover:border-[#002B55] hover:transition-all duration-300">
                Blog
              </li>
              <li className="border-b-3 border-white hover:border-b-3 hover:border-[#002B55] hover:transition-all duration-300">
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-7">
          <button className="flex items-center gap-2 ">
            Login
            <Image src={loginIcon} alt="login" />
          </button>

          <Image src={search} alt="Search" className="ml-4" title="Search" />
          <Image src={cart} alt="Cart" className="ml-4" title="Cart" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
