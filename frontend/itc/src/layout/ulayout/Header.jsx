import React, { useState, useEffect } from "react";
import "./Header.css";
import frameImg from "/wp_1.png"; // big floating logo
import smallLogo from "/final2.png"; // smaller version for blue bar
import { Link } from "react-router-dom";
import {FaSearch,FaDownload,  FaUserGraduate, FaCertificate, FaChevronRight} from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiOutlineForm,AiOutlineDownload  } from "react-icons/ai";   
import SearchBox from "./Search.jsx";
export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showRed, setShowRed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false);
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


  const [scrollDir, setScrollDir] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      setLastScrollY(currentScrollY);
      setIsAtTop(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerClass = [
  "header-wrapper",
  isAtTop ? "" : scrollDir === "down" && !showRed ? "hide" : "",
  showRed ? "hover-show" : ""
].join(" ");

  return (
    <>
     

   <header
  className={`header-wrapper ${isAtTop ? "" : scrollDir === "down" && !showRed ? "hide" : ""} ${showRed ? "hover-show" : ""}`}
  onMouseEnter={() => setShowRed(true)}
  onMouseLeave={() => setShowRed(false)}
>
  
  {(isAtTop || showRed) && (
  <div className="floating-frame show-float">
    <img src={frameImg} alt="Logo Frame" />
  </div>
)}

  <div className="top-header">
    <div className="header-inner">
      {/* Left side title */}
      <div className="textitc">
        <Link className="brand-rank">#1</Link>
        <div className="brand-text">
          <Link> <span className="cta-link">
            Computer Training & <br />
           Development Centre</span>
          </Link>
        </div>
      </div>

      {/* Right side menu */}
      <div className="cont">
        <Link>Admission</Link>
        <Link>Download</Link>
        <Link>Alumni</Link>
        <Link>Certificate Authentication</Link>
        <button className="search">Search...<FaSearch className="icsearch"/></button>
       

      </div>
    </div>
  </div>

</header>
 {/* 
         <div className="actions">
        {!active && (
          <FaSearch
            className="icsearch"
            onClick={() => setActive(true)}   // ✅ correct setter
          />
        )}
        {active && (
          <SearchBox
            open={active}                  // ✅ prop name match
            setOpen={setActive}            // ✅ correct setter passed
            onSearch={(q) => console.log("Searching:", q)}
          />
        )}
      </div> */}

      {/* Blue Navbar - FIXED (stays on top while scrolling) */}
      <nav
  className={`nav-bar ${isAtTop ? "" : "scrolled"}`}
  onMouseEnter={() => setShowRed(true)}
  onMouseLeave={() => setShowRed(false)}
>

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
          {/* <span className="phone-num">+91 9824372633</span> */}
          <Link to="/">Home</Link>

          {/* Dropdown */}
          <div className="dropdown">
            <Link to="/schoolcourses" className="dropbtn">
              School Courses
            </Link>
            <div className="dropdown-content">
                <div className="dropdown-left">
      <h1>From classroom to career: IT foundation and global readiness for young minds.</h1>
      <p>
        From classroom to career: IT foundation and global readiness for young minds.
      </p>
    </div>
<div className="dropdown-right">
             <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}>Career Counselling</Link>
              <Link to="/10thstd" style={{fontSize:'16px',fontWeight:'600'}}>10th Standard</Link>
              <Link to="/12thstd" style={{fontSize:'16px',fontWeight:'600'}}>12th Standard</Link>
              <Link to="/4-9std" style={{fontSize:'16px',fontWeight:'600'}}>4 TO 9 Standard</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}}>Skill Development Program</Link>
              <Link to="/earlyearning" style={{fontSize:'16px',fontWeight:'600'}}>Earning Potential for early Students</Link>
              <Link to="/examsupport" style={{fontSize:'16px',fontWeight:'600'}}>Exam Support Courses</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}>Kid's Corner</Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}}>Vacation Courses</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}>Parents Corner</Link>
            </div>
          </div>
</div>
          <div className="dropdown">
            <Link to="/schoolcourses" className="dropbtn">
             Professional Courses
            </Link>
            <div className="dropdown-content">
                <div className="dropdown-left">
      <h1>Our Professional IT Courses bridge the gap between education and real-world job skills.</h1>
      <p>
       They prepare graduates who lack field experience, as well as 10th/12th pass or dropouts, to become job-ready.
With industry-recognized certifications, students gain practical skills and career opportunities.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}>Career Counselling</Link>
              <Link to="/10thstd" style={{fontSize:'16px',fontWeight:'600'}}>10th Standard</Link>
              <Link to="/12thstd" style={{fontSize:'16px',fontWeight:'600'}}>12th Standard</Link>
              <Link to="/4-9std" style={{fontSize:'16px',fontWeight:'600'}}>4 TO 9 Standard</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}}>Skill Development Program</Link>
              <Link to="/earlyearning" style={{fontSize:'16px',fontWeight:'600'}}>Earning Potential for early Students</Link>
              <Link to="/examsupport" style={{fontSize:'16px',fontWeight:'600'}}>Exam Support Courses</Link>
            
            </div>
          </div>
</div>
          
     
           <div className="dropdown">
   
<Link to="/shortcourses" className="dropdown-btn">
       Short Courses 
      </Link>
   
      <div className="dropdown-content">
                <div className="dropdown-left">
      <h1>Empower Your Career with Industry-Focused IT Courses</h1>
      <p>
       Short courses provide quick, low-cost learning for students who need to clear concepts, gain hands-on skills with specific modules or products, or learn new features and technologies. They are ideal for building essential awareness and practical knowledge in minimum time.
      </p>
    </div>
<div className="dropdown-right">


  <div className="sub-drop">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}>AI <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>
  <div className="sub-drop">
              <Link to="/careercounselling"style={{fontSize:'16px',fontWeight:'600'}}>Programming <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>
  <div className="sub-drop">
              <Link to="/careercounselling"style={{fontSize:'16px',fontWeight:'600'}}>Hardware <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>
  <div className="sub-drop">
              <Link to="/careercounselling"style={{fontSize:'16px',fontWeight:'600'}}>AR/VR <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>
  <div className="sub-drop">
              <Link to="/careercounselling"style={{fontSize:'16px',fontWeight:'600'}}>Accounting <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>
  <div className="sub-drop">
              <Link to="/careercounselling"style={{fontSize:'16px',fontWeight:'600'}}>Cyber Security <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>
  <div className="sub-drop">
              <Link to="/careercounselling"style={{fontSize:'16px',fontWeight:'600'}}>Microsoft Office <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>
  <div className="sub-drop">
              <Link to="/careercounselling"style={{fontSize:'16px',fontWeight:'600'}}>Networking and Cloud Computing <FaChevronRight size={10}/></Link>
              <div className="main-sub">
            <Link>c </Link>
            <Link>c++ </Link>
            <Link>java </Link>
            <Link>python </Link>
            <Link>react </Link>
            <Link>html </Link>
            </div>
           </div>



            </div>
          </div>
          </div>

 
           <div className="dropdown">
  <Link to="/" className="dropbtn">About us</Link>

  <div className="dropdown-content">
    {/* Left side content */}
    <div className="dropdown-left">
      <h3>Empower Your Career with Industry-Focused IT Courses</h3>
      <p>
        At Information Technology Centre (ITC), we believe that the right skills
        can transform your future. Our mission is to bridge the gap between
        education and industry by offering hands-on training, real-world
        projects, and career-focused programs.
      </p>
    </div>

    {/* Right side links */}
    <div className="dropdown-right">
      <Link to="/Aboutus" style={{fontSize:'16px',fontWeight:'600'}}>Overview</Link>
      <Link to="/OurHistory" style={{fontSize:'16px',fontWeight:'600'}} >Leadership</Link>
      <Link to="/Academic Partners" style={{fontSize:'16px',fontWeight:'600'}}>Academic Partners</Link> 
      <Link to="/Guildelines" style={{fontSize:'16px',fontWeight:'600'}}>Guildelines</Link>
      {/* <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}>Leadership</Link> */}
      <Link to="/Infrastructure" style={{fontSize:'16px',fontWeight:'600'}}>Infrastructure</Link>
      <Link to="/Achievements" style={{fontSize:'16px',fontWeight:'600'}}>Achievements </Link>
      <Link to="/Gallery" style={{fontSize:'16px',fontWeight:'600'}}>Gallery</Link>
    </div>
  </div>
</div>
             <div className="dropdown">
          <Link to="" className="dropbtn">Activities</Link>
          <div className="dropdown-content">
             <div className="dropdown-left">
      <h3>Empower Your Career with Industry-Focused IT Courses</h3>
   
      <p>
        At Information Technology Centre (ITC), we believe that the right skills
        can transform your future. Our mission is to bridge the gap between
        education and industry by offering hands-on training, real-world
        projects, and career-focused programs.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}>		Seminars & Workshops</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}}>	Events & Celebrations</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}>		Student Achievements</Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}}>		Gallery</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}>	News & Updates</Link>
            </div>
            </div>
            </div>


             <div className="dropdown">
          <Link to="/studentcorner" className="dropbtn">Student Corner</Link>
          <div className="dropdown-content">
              <div className="dropdown-left">
      <h3>Empower Your Career with Industry-Focused IT Courses</h3>
      <p>
        At Information Technology Centre (ITC), we believe that the right skills
        can transform your future. Our mission is to bridge the gap between
        education and industry by offering hands-on training, real-world
        projects, and career-focused programs.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}>	Project</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}}>	Internship</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}>	Placement</Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}}>Exam Preparation</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}>	Incubation Centre</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}>Idea to reality/ tech innovator/ Bring your Idea</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}>Wellness & Guidance / Counselling corner</Link>
            </div>
            </div>
            </div>
          <Link to="/services" >Services</Link>
          <Link to="/offers" >Offers</Link>
         
  {/* <button className="cta-wrapper">
  Need Clarity?
  <span className="cta-link">Drop Your Question</span>
</button> */}


       
        </div>
      </nav>

      {/* Spacer so content doesn't hide behind the FIXED navbar */}
      <div className="nav-spacer" />
    </>
  );
}
