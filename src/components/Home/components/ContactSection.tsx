"use client";
import React, { useState } from "react";
import { IoLocation, IoCall, IoMail } from "react-icons/io5";

const ContactSection = () => {
  const [selectedBranch, setSelectedBranch] = useState("MUMBAI");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const branches = [
    { name: "COIMBATORE", icon: "🏛️", active: false },
    { name: "CHENNAI", icon: "🕍", active: false },
    { name: "HYDERABAD", icon: "🏛️", active: false },
    { name: "GOA", icon: "🗼", active: false },
    { name: "KOCHI", icon: "🚢", active: false },
    { name: "MUMBAI", icon: "🏢", active: true },
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
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* OUR BRANCHES Section */}
        <div className="mb-12">
          {/* Title Banner */}
          <div className="bg-green-500 text-white text-center py-4 px-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold uppercase">OUR BRANCHES</h2>
          </div>

          {/* Branch Navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {branches.map((branch) => (
              <button
                key={branch.name}
                onClick={() => setSelectedBranch(branch.name)}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 ${
                  selectedBranch === branch.name
                    ? "bg-green-500 text-white border-2 border-green-500"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300"
                }`}
              >
                <span className="text-2xl">{branch.icon}</span>
                <span className="text-sm font-medium">{branch.name}</span>
                {branch.name === "MUMBAI" && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-blue-400">→</span>
                    <span>Md Mahafuj Hossain</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form - Left Panel */}
          <div className="bg-blue-900 rounded-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-8">Contact Us</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Submit
              </button>
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
