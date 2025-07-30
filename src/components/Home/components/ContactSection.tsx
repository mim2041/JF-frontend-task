"use client";
import React, { useState } from "react";
import { IoLocation, IoCall, IoMail } from "react-icons/io5";
import br1 from "@/assets/icons/br1.svg";
import br2 from "@/assets/icons/br2.svg";
import br3 from "@/assets/icons/br3.svg";
import br4 from "@/assets/icons/br4.svg";
import br5 from "@/assets/icons/br5.svg";
import br6 from "@/assets/icons/br6.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [selectedBranch, setSelectedBranch] = useState("MUMBAI");
  const imageDiv = {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const branches = [
    { name: "COIMBATORE", icon: br1, active: false },
    { name: "CHENNAI", icon: br2, active: false },
    { name: "HYDERABAD", icon: br3, active: false },
    { name: "GOA", icon: br4, active: false },
    { name: "KOCHI", icon: br5, active: false },
    { name: "MUMBAI", icon: br6, active: true },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-[1280px] mx-auto px-4 relative border border-gray-300 p-2 rounded-3xl">
        {/* OUR BRANCHES Section */}
        <div className="mb-12">
          {/* Title Banner */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 ">
            <button className="bg-[#B0DD1D] text-black w-[120px] md:w-[143px] h-[30px] md:h-[36px] rounded-full uppercase font-[500]">
              Our Branches
            </button>
          </div>

          {/* Branch Navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10">
            {branches.map((branch) => (
              <button
                key={branch.name}
                onClick={() => setSelectedBranch(branch.name)}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 md:w-[116px] md:h-[104px] ${
                  selectedBranch === branch.name
                    ? "bg-[#B0DD1D1A] border-2 border-[#B0DD1D3A]"
                    : "bg-white"
                }`}
              >
                <Image src={branch.icon} alt={branch.name} />
                <span className="text-sm font-medium">{branch.name}</span>
                {/* {branch.name === "MUMBAI" && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-blue-400">→</span>
                    <span>Md Mahafuj Hossain</span>
                  </div>
                )} */}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form - Left Panel */}
          <div className="bg-[#002B55] rounded-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-8">Contact Us</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 placeholder:text-white bg-[#FFFFFF1A] transparent rounded-2xl border border-[#002B55] focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 placeholder:text-white bg-[#FFFFFF1A] transparent rounded-2xl border border-[#002B55] focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 placeholder:text-white bg-[#FFFFFF1A] transparent rounded-2xl border border-[#002B55] focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 placeholder:text-white bg-[#FFFFFF1A] transparent rounded-2xl border border-[#002B55] focus:border-green-500 focus:outline-none resize-none"
                  required
                />
              </div>

              <motion.input
                variants={imageDiv}
                initial="initial"
                animate="animate"
                className="bg-[#B0DD1D] text-black w-[130px] md:w-[160px] h-[40px] md:h-[50px] rounded-full "
                type="submit"
                value="Submit"
              />
            </form>
          </div>

          {/* Map and Location Details - Right Panel */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            {/* Google Maps iframe */}
            <div className="rounded-lg h-64 mb-6 overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.5678!3d12.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123456789012%3A0xabcdef1234567890!2sJRR%20Towers!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fencing Justified Location"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Map Markers Info */}

            {/* Address Information */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 mt-1">
                <IoLocation className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavangudi,
                  Bangalore, 560004
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <IoCall className="text-green-500 text-lg" />
                <span className="text-sm text-gray-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <IoMail className="text-green-500 text-lg" />
                <span className="text-sm text-gray-600">
                  info@fencingjustified.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
