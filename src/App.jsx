import React from "react";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSection ";
import FAQSection from "./components/FAQSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css"
import Home from "./Pages/home";
import Transactions from "./Pages/admin/Agents/transactions";
function App() {
  return (
    <div className="font-sans ">      
       <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard/transactions" element={<Transactions/>}/>
          </Routes>
        </Router>
      {/* <Navbar /> */}
      {/* <HeroSection /> */}
      {/* <ProductsSection /> */}
      {/* <AboutUsSection /> */}
      {/* <FAQSection /> */}
      {/* <ContactUsSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
