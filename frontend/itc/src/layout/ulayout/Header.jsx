import React, { useState, useEffect } from "react";
import "./Header.css";
import frameImg from "/wp_1.png"; // big floating logo
import smallLogo from "/itc.png"; // smaller version for blue bar
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Red Top Header + Floating Logo (hides on scroll) */}
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

      {/* Blue Navbar - FIXED (stays on top while scrolling) */}
      <nav className={`nav-bar ${isAtTop ? "" : "scrolled"}`}>
        {/* Mini logo only visible when scrolled */}
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
           <div className="dropdown">
          <Link to="/shortcourses">Short Courses</Link>
            <div className="dropdown-content">
              <Link to="/careercounselling">Career Counselling</Link>
              <Link to="/skilldevelopment">Skill Development Program</Link>
              <Link to="/kidscorner">Kid's Corner</Link>
              <Link to="/vacationcourses">Vacation Courses</Link>
              <Link to="/teachercorner">Teacher Corner</Link>
            </div>
            </div>
             <div className="dropdown">
          <Link to="/aboutus">About us</Link>
          <div className="dropdown-content">
              <Link to="/careercounselling">	Overview</Link>
              <Link to="/skilldevelopment">Vision & Mission</Link>
              <Link to="/kidscorner">	Leadership</Link>
              <Link to="/vacationcourses">	Infrastructure</Link>
              <Link to="/vacationcourses">Achievements & Milestone</Link>
              <Link to="/teachercorner">	Gallery</Link>
            </div>
            </div>
             <div className="dropdown">
          <Link to="/aboutus">Activities</Link>
          <div className="dropdown-content">
              <Link to="/careercounselling">		Seminars & Workshops</Link>
              <Link to="/skilldevelopment">	Events & Celebrations</Link>
              <Link to="/kidscorner">		Student Achievements</Link>
              <Link to="/vacationcourses">		Gallery</Link>
              <Link to="/teachercorner">	News & Updates</Link>
            </div>
            </div>
             <div className="dropdown">
          <Link to="/studentcorner">Student Corner</Link>
          <div className="dropdown-content">
              <Link to="/careercounselling">	Project</Link>
              <Link to="/skilldevelopment">	Internship</Link>
              <Link to="/kidscorner">	Placement</Link>
              <Link to="/vacationcourses">Exam Preparation</Link>
              <Link to="/teachercorner">	Incubation Centre</Link>
              <Link to="/teachercorner">Idea to reality/ tech innovator/ Bring your Idea</Link>
              <Link to="/teachercorner">Wellness & Guidance / Counselling corner</Link>
            </div>
            </div>
          <Link to="/services">Services</Link>
          <Link to="/offers">Offers</Link>
          <div className="search">
             <button>Search... <span><FaSearch className="icsearch"/> </span></button>
          </div>
        </div>
       
      </nav>

      {/* Spacer so content doesn't hide behind the FIXED navbar */}
      <div className="nav-spacer" />
    </>
  );
}
