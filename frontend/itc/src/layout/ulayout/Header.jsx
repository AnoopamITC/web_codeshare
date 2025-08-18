import React, { useState, useEffect } from "react";
import "./Header.css";
import frameImg from "/wp_1.png"; // big floating logo
import smallLogo from "/final2.png"; // smaller version for blue bar
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const courseData = [
   {
    title: "Networking and Cloud Computing",
    items: [
      "Networking Fundamentals",
      "Protocols(TCP/IP, FTP, DNS, VPN)",
      "A+ (PC Maintenance)",
      "N+ (Networking)",
      "MCITP (Microsoft Server)",
      "CCNA (Cisco certification)",
      "Virtualization",
      "AWS Cloud Infrastructure",
      "Cloud Designing",
      "Cloud Configuration"
    ]
  },
  {
    title: "AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Python in AI",
      "Data Science",
      "AI Algorithms",
      "Data Driven Decision",
      "Natural Language Processing",
      "AI Ethics"
    ]
  },
  {
    title: "Programming",
    items: [
      "C Programming",
      "C++ Programming",
      "SQL",
      ".NET",
      "PHP",
      "JAVA",
      "Android",
      "SAD Basics"
    ]
  },

  {
    title: "Hardware",
    items: [
      "Hardware Repairing (Motherboard, SMPS, Monitor, Printer)",
      "Laptop Repairing",
      "Mobile Repairing",
      "Home Appliances Repairing",
      "Electrification",
      "Structure Cabling",
      "IoT"
    ]
  },
 {
    title: "AR/VR",
    items: [
      "HTML",
      "CSS",
      "3D Animation",
      "Video Editing",
      "Graphics Designing",
      "VFX and Composition",
      "CAD & CAM",
      "Engineering Drawing",
      "2D Drafting",
      "3D CAD",
      "3D Modelling",
      "CAM Development tools"
    ]
  },
    {
    title: "Accounting",
    items: [
      "Tally",
      "Advances Excel",
      "Banking",
      "Taxation",
      "Costing and Analysis"
    ]
  },
  {
    title: "Cyber Security",
    items: [
      "Kali Linux",
      "Hacking Attacks",
      "Cryptography",
      "Wifi Security",
      "Keylogger & Malware Analysis",
      "RHCH (Red Hat Certification)",
      "End Point Security"
    ]
  },
   {
    title: "Microsoft Office",
    items: [
      "Advance MS Office 365",
      "IT Infrastructure Utilization",
      "Office Management Products"
    ]
  }
 
];


 const [open, setOpen] = useState(false);


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
        <div 
      className="dropdown-container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to="/shortcourses" className="dropdown-btn">
       Short Courses 
      </Link>

      {open && (
        <div className="dropdown-menu">
          {courseData.map((category, index) => (
            <div key={index} className="dropdown-column">
              <h4>{category.title}</h4>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
             <div className="dropdown">
          <Link to="/aboutus" className="dropbtn">About us</Link>
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
          <Link to="/aboutus" className="dropbtn">Activities</Link>
          <div className="dropdown-content">
              <Link to="/careercounselling">		Seminars & Workshops</Link>
              <Link to="/skilldevelopment">	Events & Celebrations</Link>
              <Link to="/kidscorner">		Student Achievements</Link>
              <Link to="/vacationcourses">		Gallery</Link>
              <Link to="/teachercorner">	News & Updates</Link>
            </div>
            </div>
             <div className="dropdown">
          <Link to="/studentcorner" className="dropbtn">Student Corner</Link>
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
