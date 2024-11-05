import React, { useState } from "react";
import "./Navbar.css";


const logo = "https://maang.in/_next/static/media/AZlogo.925989af.svg";
const nameLogo = "https://maang.in/_next/static/media/AlgoZenith.e214d3eb.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className={`menu ${menuOpen ? "opened" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Main Menu"
        >
          <svg width="24" height="24" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <img src={logo} alt="Logo" className="navbar-logo" />
        <img src={nameLogo} alt="AlgoZenith" className="navbar-name" />
      </div>
      <div className="navbar-right">
        <button className="notification-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        <div className="profile-icon"></div>
      </div>

   
      <div className={`sidebar-dropdown ${menuOpen ? "open" : ""}`}>
   
        <ul>
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
