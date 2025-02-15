import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Transactions from "./Pages/admin/Agents/transactions";
import ListOfAgents from "./Pages/admin/Agents/ListOfAgents";
import ListOfCustomers from "./Pages/admin/Customers/ListOfCustomers";
import CustomersTransactions from "./Pages/admin/Customers/transactions";
import System from "./Pages/admin/system";
import Settings from "./Pages/admin/settings";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import { Login } from "./Pages/login";

function App() {
  return (
    <AuthProvider>
      <div className="font-sans">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            {/* Protect all routes starting with /accounts */}
            <Route
              path="/accounts/*"
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="agent/transactions" element={<Transactions />} />
                    <Route path="agent/list" element={<ListOfAgents />} />
                    <Route path="customers/list" element={<ListOfCustomers />} />
                    <Route path="customers/transactions" element={<CustomersTransactions />} />
                    <Route path="system-admin" element={<System />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
