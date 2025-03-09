import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import { NotificationsProvider } from "reapop";

function App() {
  const token = localStorage.getItem("token");

  return (
    <NotificationsProvider>
    <AuthProvider>
      <div className="font-sans">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={token ? <Navigate to="/accounts/agent/transactions" replace /> : <Login />}
            />
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
    </NotificationsProvider>
  );
}

export default App;
