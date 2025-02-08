import React, { useState } from "react";
import CustomersTransactions from "./Pages/admin/Customers/transactions";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"
import Home from "./Pages/home";
import Transactions from "./Pages/admin/Agents/transactions";
import ListOfAgents from "./Pages/admin/Agents/ListOfAgents";
import ListOfCustomers from './Pages/admin/Customers/ListOfCustomers'
import System from "./Pages/admin/system";
function App({agent}) {

  return (
    <div className="font-sans ">      
       <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard/agent/transactions" element={<Transactions/>}/>
            <Route path="/dashboard/agent/list" element={<ListOfAgents/>}/>
            <Route path="/dashboard/customers/list" element={<ListOfCustomers/>}/>
            <Route path="/dashboard/customers/transactions" element={<CustomersTransactions/>}/>
            <Route path="/dashboard/system-admin" element={<System/>}/>
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
