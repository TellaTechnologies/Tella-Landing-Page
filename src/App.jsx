import React from "react";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSection ";
import FAQSection from "./components/FAQSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import "./App.css"
function App() {
  return (
    <div className="font-sans ">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutUsSection />
      <FAQSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
