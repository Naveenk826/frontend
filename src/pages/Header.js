import authService from "../services/authService";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userLoggedIn");
    setIsLoggedIn(user);

    console.log(user);
  });

  const handleLogin = () => {
    navigate("/");
  };

  const logoutUser = async () => {
    try {
      await authService.logout();
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Ecommerce</h1>
        <div className="auth-buttons">
          {isLoggedIn ? (
            <>
              <button onClick={logoutUser} className="button logout-btn">
                Logout
              </button>
            </>
          ) : (
            <button onClick={handleLogin} className="button login-btn">
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
