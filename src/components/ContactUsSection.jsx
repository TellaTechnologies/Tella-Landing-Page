import React from "react";

const ContactUsSection = () => {
  return (
    <section className="bg-inherit py-32 border-t-2" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center hidden md:block md:text-left space-y-4">
            <h1 className="text-4xl font-semibold text-gray-800">
              Get In Touch
            </h1>
            <p className="text-gray-600">
              We'd love to hear from you! For inquiries or feedback, please
              reach out to us by sending a message. Your thoughts matter to us!
            </p>
          </div>

          {/* Form */}
          <div className="flex-1 bg-gradient-to-br from-[#2097CF] to-[#104D69] p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 text-gray-800 rounded bg-white shadow focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-gray-800 rounded bg-white shadow focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 text-gray-800 rounded bg-white shadow focus:outline-none"
              ></textarea>
              <div className="flex items-center justify-center">
                
              <button
                type="submit"
                className="w-32 py-3 bg-white text-[#282828] font-semibold rounded shadow hover:bg-blue-100"
              >
                Send
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
