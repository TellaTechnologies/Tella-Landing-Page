import React from "react";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSection ";
import FAQSection from "./components/FAQSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import CustomersTransactions from "./Pages/admin/Customers/transactions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css"
import Home from "./Pages/home";
import Transactions from "./Pages/admin/Agents/transactions";
import ListOfAgents from "./Pages/admin/Agents/ListOfAgents";
function App() {
  return (
    <div className="font-sans ">      
       <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard/agent/transactions" element={<Transactions/>}/>
            <Route path="/dashboard/agent/list" element={<ListOfAgents/>}/>
            <Route path="/dashboard/customers/transactions" element={<CustomersTransactions/>}/>
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
