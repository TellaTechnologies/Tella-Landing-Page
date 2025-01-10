import React from "react";
import phoneImage from "../assets/PhoneImage.svg"; // Replace with your actual phone image

const HeroSection = () => {
  return (
    <header className="bg-inherit pt-32 md:pt-28" id="home">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Empowering Micro and Small Businesses with Financial Freedom
          </h1>
          <p className="text-gray-600">
            Receive payments, save, borrow, and grow your business all in one
            place. Simple, secure, and tailored for unbanked and underserved
            businesses.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-[#2097CF] text-white rounded hover:bg-blue-200 hover:text-[#2097CF]">
              Get Started
            </button>
            <button className="px-6 py-3 border border-[#2097CF] text-[#282828] font-bold rounded hover:bg-blue-200">
              Download App
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <img
            src={phoneImage}
            alt="Phone App"
            className="w-96 mx-auto md:ml-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
