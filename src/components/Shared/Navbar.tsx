import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 py-2">
      <div>
        <nav>
          <ul className="flex">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div>
        <Image src="/logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
