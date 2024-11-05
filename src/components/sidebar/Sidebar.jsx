import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ForumIcon from "@mui/icons-material/Forum";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarIcon from "@mui/icons-material/Star";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import CloseIcon from "@mui/icons-material/Close"; 

function Sidebar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleItemClick = (itemPath) => {
    setActiveItem(itemPath);
    setIsMenuOpen(false); 
  };

  return (
    <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
    
      <div className="sidebar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseIcon /> : <KeyboardDoubleArrowDownIcon  />} 
      </div>

      <nav className={`sidebar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li
            className={`menu-item ${activeItem === "/dashboard" ? "active" : ""}`}
            onClick={() => handleItemClick("/dashboard")}
          >
            <Link to="/dashboard" className="menu-link">
              <DashboardIcon className="menu-icon" /> Dashboard
            </Link>
          </li>
          <li
            className={`menu-item ${activeItem === "/learn" ? "active" : ""}`}
            onClick={() => handleItemClick("/learn")}
          >
            <Link to="/learn" className="menu-link">
              <LightbulbIcon className="menu-icon" /> Learn
            </Link>
          </li>
          <li
            className={`menu-item ${activeItem === "/forums" ? "active" : ""}`}
            onClick={() => handleItemClick("/forums")}
          >
            <Link to="/forums" className="menu-link">
              <ForumIcon className="menu-icon" /> Forums
            </Link>
          </li>
          <li
            className={`menu-item ${activeItem === "/upskill" ? "active" : ""}`}
            onClick={() => handleItemClick("/upskill")}
          >
            <Link to="/upskill" className="menu-link">
              <AssignmentIcon className="menu-icon" /> Upskill
            </Link>
          </li>
          <li
            className={`menu-item ${activeItem === "/contest" ? "active" : ""}`}
            onClick={() => handleItemClick("/contest")}
          >
            <Link to="/contest" className="menu-link">
              <BarChartIcon className="menu-icon" /> Contest
            </Link>
          </li>
          <li
            className={`menu-item ${activeItem === "/leaderboard" ? "active" : ""}`}
            onClick={() => handleItemClick("/leaderboard")}
          >
            <Link to="/leaderboard" className="menu-link">
              <StarIcon className="menu-icon" /> Leaderboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
