import React, { useState, useEffect } from "react";
import "./Header.css";
import frameImg from "/wp_1.png"; // big floating logo
import smallLogo from "/itc.png"; // smaller version for blue bar
import { Link } from "react-router-dom";

export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Red Top Header */}
      <header className={`header-wrapper ${isAtTop ? "" : "hide"}`}>
        <div className="floating-frame">
          <img src={frameImg} alt="Logo Frame" />
        </div>
        <div className="top-header">
          <div className="right-section">
            <Link>Admission</Link>
            <Link>Download</Link>
            <Link>Alumni</Link>
            <Link>Certificate Authentication</Link>
          </div>
        </div>
      </header>

      {/* Blue Navbar */}
      <nav className="nav-bar">
        {/* Mini logo when scrolled */}
        <div className={`mini-logo ${isAtTop ? "hidden" : "visible"}`}>
          <img src={smallLogo} alt="Mini Logo" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>

          {/* Dropdown */}
          <div className="dropdown">
            <Link to="/schoolcourses" className="dropbtn">
              School Courses
            </Link>
            <div className="dropdown-content">
              <Link to="/careercounselling">Career Counselling</Link>
              <Link to="/skilldevelopment">Skill Development Program</Link>
              <Link to="/kidscorner">Kid's Corner</Link>
              <Link to="/vacationcourses">Vacation Courses</Link>
              <Link to="/teachercorner">Teacher Corner</Link>
            </div>
          </div>

          <Link to="/professionalcourses">Professional Courses</Link>
          <Link to="/shortcourses">Short Courses</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/studentcorner">Student Corner</Link>
          <Link to="/services">Services</Link>
          <Link to="/offers">Offers</Link>
        </div>
      </nav>
    </>
  );
}
