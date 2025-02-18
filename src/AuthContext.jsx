import { createContext, useContext, useState, useEffect } from "react";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Set authentication state based on token
  useEffect(() => {
    setToken(localStorage.getItem("token")); // Ensure state sync on mount
  }, []);

  const isAuthenticated = !!token; // Check if token exists

  // Function to log in and store token
  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    
  };

  // Function to log out and clear token
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
