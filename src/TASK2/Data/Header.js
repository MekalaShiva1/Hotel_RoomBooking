// components/Header.js
import React from "react";
import { FaCalendarAlt, FaSearch, FaBell } from "react-icons/fa"; 
import "../CSS/HeaderSec.css"

function Header() {
  return (
    <header className="header">
      <div className="welcome-message">
        <h1>Welcome back, Shiva!</h1>
        <p><FaCalendarAlt /> Monday, 04 Nov</p>
      </div>
      <div className="user-controls">
        <FaSearch />
        <FaBell />
        <div className="user-profile"> 
        <span>Shiva</span>
          <img src="/assets/imgs/about-1.jpg" className="profile" alt="Shiva" />
         
        </div>
      </div>
    </header>
  );
}

export default Header;
