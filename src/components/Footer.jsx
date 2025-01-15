import React from "react";
import logo from "../assets/Tellalogobnw.png"; // Replace with your logo image

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2097CF] to-[#104D69] text-white py-8" id="footer">
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Logo and Company Info */}
        <div className="mb-4">
          <img src={logo} alt="Tella Logo" className="mx-auto w-38 " />
        </div>

        {/* Horizontal Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#!" className="hover:underline">
            Terms of Service
          </a>
          <a href="#!" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 text-2xl mb-4">
          <a href="#!" className="hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="hover:text-blue-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#!" className="hover:text-blue-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#!" className="hover:text-blue-300">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="text-left md:text-center">
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <p>Phone Number: +2348123463840</p>
            <p>Email: hello@tellatechnologies.ng</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-sm">© 2025 Tella Technologies Limited</p>
          <a
            href="#top"
            className="text-sm font-medium underline hover:text-blue-300"
          >
            Back to top <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
