import React, { useState } from 'react';
import phoneImage from "../assets/PhoneImage.svg"; // Replace with your actual phone image
import logo from "../assets/Tellalogo.png"; // Replace with your logo image
import Header from '../components/Navbar'
import faqImage from "../assets/Faq.svg"; // Replace with your actual image path
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);
    

    const products = [
        { title: "Wallet", description: "Tella enables micro and small businesses to receive payments into their wallet and send money to other financial institutions instantly.", icon: "💼" },
        { title: "Fixed Savings", description: "Lock in your savings for a fixed period and earn competitive interest rates while growing your wealth securely.", icon: "🏦" },
        { title: "Target Savings", description: "Set specific financial goals and achieve them effortlessly with our customizable target savings plans.", icon: "🎯" },
        { title: "Daily Savings", description: "Build a habit of consistent saving with our flexible daily contributions designed to suit your lifestyle", icon: "💰" },
        { title: "Bill Payment", description: " Pay your utility bills, subscriptions, and more in seconds, all from one convenient platform.   ", icon: "🧾" },
    ];

    const faqs = [
        { question: "How do I start saving with Tella?", answer: "It’s Simple! Sign Up on Tella through an agent, choose your preferred savings plan - fixed, target, or daily and start saving instantly" },
        { question: "Can I access my savings anytime?", answer: "Yes, you can withdraw from your daily and target savings at any time. Fixed savings can be withdrawn after the set maturity period to maximize your returns" },
        { question: "How secure are my funds with Tella?", answer: "Your funds are safeguarded with top-tier encryption and regulatory compliance. We partner with trusted financial institutions to ensure your money is safe and insured" },
        { question: "What bills can I pay using Tella?", answer: "You can pay electricity bills, water bills, TV subscription, and more. The Tella platform ensures seamless and secure bill payments in just a few clicks" },
        { question: "Can I use my Tella wallet as my primary account?", answer: "Absolutely! Tella enables you to perform transactions that can be performed with a regular bank account with your Tella wallet" },
        { question: "Are there any fees for using Tella?", answer: "Tella is transparent with fees. While most features are free, some services like bill payments may have minimal processing fees, which are always disclosed upfront." },
    ];
    
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <Header/>
            <div className="bg-inherit pt-32 md:pt-28" id="home">
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
                <div className="flex-1 phone mb-8 md:mb-0">
                <img
                    src={phoneImage}
                    alt="Phone App"
                    className="w-96 mx-auto md:ml-auto"
                />
                </div>
            </div>
            </div>
            <section className="bg-inherit py-32 border-t-2" id="product">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Products</h2>
                    <div className="bg-gradient-to-br from-[#2097CF] to-[#104D69] p-8 rounded-lg container mx-auto grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 place-items-center gap-6 mt-10">
                    {products.map((product, index) => (
                        <div
                        key={index}
                        className="bg-white  shadow-md rounded-lg p-6 text-center space-y-4 transition-transform hover:scale-105"
                        >
                        <div className="text-5xl">{product.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            {product.title}
                        </h3>
                        <p className="text-gray-600">{product.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
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
            <section className="bg-inherit py-32 border-t-2" id="faq">
                    <div className="flex items-center justify-center pb-4">
            <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 mb-4">
            Frequently Asked Questions
                </h2>
            </div>
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="flex-1 mb-8 md:mb-0">
                <img
                    src={faqImage}
                    alt="FAQs Illustration"
                    className="w-full max-w-md mx-auto"
                />
                </div>

                {/* FAQ Section */}
                <div className="flex-1">
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg shadow-md"
                    >
                        <button
                        className="w-full text-left px-6 py-4 font-medium text-gray-700 flex justify-between items-center bg-white rounded-lg shadow-md transition-all hover:shadow-lg"
                        style={{
                            boxShadow: "0 4px 10px rgba(173, 216, 230, 0.5)",
                        }}
                        onClick={() => toggleFAQ(index)}
                        >
                        <span>{faq.question}</span>
                        <span
                            className={`text-2xl ${
                            openIndex === index ? "text-blue-500" : "text-blue-400"
                            }`}
                        >
                            {openIndex === index ? "-" : "+"}
                        </span>
                        </button>
                        {openIndex === index && (
                        <div className="px-6 py-4 bg-gray-50 text-gray-600">
                            {faq.answer}
                        </div>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </section>
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
            <Footer/>
        </div>
    );
};

export default Home;