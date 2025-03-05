import React from "react";
import { useTheme } from "../context/themeContext";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar sticky-top navbar-expand-lg ${theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-white"}`}>
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#">My Portfolio</a>

        {/* Dark Mode Toggle (Visible on all screens) */}
        <button 
          className="btn border-0 d-lg-none me-2" 
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          style={{ color: theme === "dark" ? "white" : "black" }} // Icon color changes
        >
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        {/* Hamburger Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
          style={{ color: theme === "dark" ? "white" : "black" }} // Icon color changes
        >
          <FaBars size={24} />
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link contact-btn" 
                href="#contact"
                style={{
                  backgroundColor: theme === "dark" ? "white" : "black",
                  color: theme === "dark" ? "black" : "white",
                  padding: "8px 20px",
                  borderRadius: "50px",
                  transition: "all 0.3s ease-in-out"
                }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle (Visible on Large Screens) */}
        <button 
          className="btn border-0 d-none d-lg-block ms-3" 
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          style={{ color: theme === "dark" ? "white" : "black" }} // Icon color changes
        >
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
