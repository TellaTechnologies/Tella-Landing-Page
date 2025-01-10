import React, { useState } from "react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 text-green">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="ml-2 text-xl font-bold text-gray-800">Tella</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#product">Product</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#about">About Us</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#faq">FAQ</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="#contact">Contact</a></li>
          <li className="hover:text-blue-500 cursor-pointer">Blog</li>
        </ul>

        {/* Action Buttons */}
        <div className=" md:flex space-x-4">
          <button className="ml-48 md:ml-0 px-4 py-2 bg-[#2097CF] text-white hover:bg-blue-200 hover:text-[#2097CF] rounded">
            Login
          </button>
          <button className="hidden md:block px-4 py-2 border border-[#2097CF] text-[#282828] font-bold hover:bg-blue-200 rounded">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-gray-800"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Product</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          </ul>
          <div className="flex flex-col items-center space-y-4 pb-4">
            <button className="px-4 py-2 border border-[#2097CF] text-[#282828] font-bold rounded hover:bg-blue-200 w-32">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
