import React, { useState } from "react";
import faqImage from "../assets/Faq.svg"; // Replace with your actual image path

const faqs = [
  { question: "How do I start saving with Tella?", answer: "It’s Simple! Sign Up on Tella through an agent, choose your preferred savings plan - fixed, target, or daily and start saving instantly" },
  { question: "Can I access my savings anytime?", answer: "Yes, you can withdraw from your daily and target savings at any time. Fixed savings can be withdrawn after the set maturity period to maximize your returns" },
  { question: "How secure are my funds with Tella?", answer: "Your funds are safeguarded with top-tier encryption and regulatory compliance. We partner with trusted financial institutions to ensure your money is safe and insured" },
  { question: "What bills can I pay using Tella?", answer: "You can pay electricity bills, water bills, TV subscription, and more. The Tella platform ensures seamless and secure bill payments in just a few clicks" },
  { question: "Can I use my Tella wallet as my primary account?", answer: "Absolutely! Tella enables you to perform transactions that can be performed with a regular bank account with your Tella wallet" },
  { question: "Are there any fees for using Tella?", answer: "Tella is transparent with fees. While most features are free, some services like bill payments may have minimal processing fees, which are always disclosed upfront." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  );
};

export default FAQSection;
