import React from "react";

const products = [
  { title: "Wallet", description: "Tella enables micro and small businesses to receive payments into their wallet and send money to other financial institutions instantly.", icon: "💼" },
  { title: "Fixed Savings", description: "Lock in your savings for a fixed period and earn competitive interest rates while growing your wealth securely.", icon: "🏦" },
  { title: "Target Savings", description: "Set specific financial goals and achieve them effortlessly with our customizable target savings plans.", icon: "🎯" },
  { title: "Daily Savings", description: "Build a habit of consistent saving with our flexible daily contributions designed to suit your lifestyle", icon: "💰" },
  { title: "Bill Payment", description: " Pay your utility bills, subscriptions, and more in seconds, all from one convenient platform.   ", icon: "🧾" },
];

const ProductsSection = () => {
  return (
    <section className="bg-inherit py-32 border-t-2" id="product">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Products</h2>
        <div className="bg-gradient-to-br from-[#2097CF] to-[#104D69] p-8 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center space-y-4 transition-transform hover:scale-105"
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
  );
};

export default ProductsSection;
