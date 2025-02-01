import React from "react";
import logo from "../assets/Tellalogo.png"; // Replace with your logo image

const AboutUsSection = () => {
  return (
    <section className="bg-inherit py-32 border-t-2" id="about">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 mb-4">
          About Us
        </h2>
      </div>
      <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center ">
        {/* Text Content */}
        <div className="flex-1 my-8 md:mb-0 md:mx-16">
          <p className="text-gray-600 mb-4">
            At Tella, we’re on a mission to empower micro and small businesses
            in Sub-Saharan Africa with the financial tools they need to succeed. Our
            platform bridges the gap for the unbanked, providing secure and
            affordable financial services that drive growth and inclusion.
          </p>
          <p className="text-gray-600">
            The team behind Tella is made up of experienced professionals who
            have worked in top organizations and built world-class products.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 items-center justify-center ">
          <div className="w-96 flex items-center shadow-lg rounded-lg min-h-72">

          <img
            src={logo}
            alt="Tella Logo"
            className="w-32 max-w-md mx-auto "
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
