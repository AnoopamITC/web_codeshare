import React, { useState, useEffect } from "react";
import "./Header.css";
import frameImg from "/wp_1.png"; // big floating logo
import smallLogo from "/final2.png"; // smaller version for blue bar
import { Link, useNavigate } from "react-router-dom";
import {FaSearch,FaDownload,  FaUserGraduate, FaCertificate, FaChevronRight} from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiOutlineForm,AiOutlineDownload  } from "react-icons/ai";   
import SearchBox from "./Search.jsx";
export default function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [showRed, setShowRed] = useState(false);
    const [scrollDir, setScrollDir] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [forceShowHeader, setForceShowHeader] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
 const courseData = [
  
    {
    title: "Artificial Intelligence(AI)",
    items: [
      "Diploma in AI",
      "Advances Diploma in AI",
      "AI in Business",
    ],
  },
  {
    title: "Fullstack Web Developer Programming",
    items: [
      "Diploma in Programming language",
      "Diploma Application Developer",
      "Diploma Prof Website Developer",
      "Advance Application Developer",
      "Professional Application Developer",
      "Application Developer For Business",
      "Application Developer for Business with S/W Development",
      "Diploma in AI",
    ],
  },
  {
    title: "Data Analysis and Office 365",
    items: [
      "Office Operator",
      "Office Assistant",
      "Diploma in Office Automation",
      "Advance Diploma in Office Automation",
      "Professional Office Automation",
      "Office Automation For Business",
    ],
  },
    {
    title: "CAD/CAM/CAE",
    items: [
      "Basic CAD",
      "Advance CAD",
      "CAM",
      "Diploma in CAD",
      "Advance Diploma in CAD",
      "Diploma in CAD/CAM",
      "CAD/CAM For Business",
    ],
  },
  {
    title: " AR/VR- Multimedia ",
    items: [
      "Diploma In Multimedia",
      "Advance Diploma in Multimedia",
      "Multimedia for Game Designing",
      "Multimedia for Professional",
      "Multimedia for Business",
      "Digital Film Making",
    ],
  },
   {
    title: "AWS Cloud Computing",
    items: [
      "Networking",
      "Diploma in AWS and Cloud Computing",
      "Advanced Diploma in AWS and Cloud Computing",
    ],
  },

  {
    title: "Hardware Mobile Repairing IoT",
    items: [
      "Diploma in Hardware Repairing and Application",
      "Advance Diploma in Hardware Repairing",
    ],
  },
    {
    title: "Cyber Security",
    items: [
      "Diploma in Cyber Security",
      "Advance Diploma in Cyber Security",
    ],
  },

  {
    title: "Accounting (Tally Prime)",
    items: [
      "Tally Prime Certification",
      "Diploma in Industrial Accounting",
      "Advance Diploma in Inducting Accounting",
      "Accounting for Business",
    ],
  },
];
//  const [open, setOpen] = useState(false);


  // const [scrollDir, setScrollDir] = useState("up");
  // const [lastScrollY, setLastScrollY] = useState(0);

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
  className={`header-wrapper 
    ${isAtTop || forceShowHeader ? "hover-show" : ""} 
    ${!isAtTop && scrollDir === "down" && !forceShowHeader ? "hide" : ""}`}
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
        <Link style={{ color: "black", marginLeft: '15px'}} className="login" target="_blank" to='http://172.16.10.196:5173/AdminLogin'>Login</Link>
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
          
          <div 
  className="nav-home-wrapper"   // ek custom class agar styling chahiye
  onMouseEnter={() => setForceShowHeader(true)} 
  onMouseLeave={() => setForceShowHeader(false)}
>
  <Link to="/" className="dropbtn">Home</Link>
</div>


          {/* Dropdown */}
          <div className="dropdown">
            <Link to="/schoolcourses" className="dropbtn">
              School Courses
            </Link>
            <div className="dropdown-content">
                <div className="dropdown-left">
                  <div className="title-drop">
      <p>School Courses</p>
      </div>
      <p>
        From classroom to career: IT foundation and global readiness for young minds.
      </p>
    </div>
<div className="dropdown-right">
             <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Career Counselling</Link>
              <Link to="/10thstd" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">10th Standard</Link>
              <Link to="/12thstd" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">12th Standard</Link>
              <Link to="/4-9std" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">4 TO 9 Standard</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Skill Development Program</Link>
              <Link to="/earlyearning" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Earning Potential for early Students</Link>
              <Link to="/examsupport" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Exam Support Courses</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Kid's Corner</Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Vacation Courses</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Parents Corner</Link>
            </div>
          </div>
</div>
          <div className="dropdown">
            <Link to="/schoolcourses" className="dropbtn">
             Professional Courses
            </Link>
            <div className="dropdown-content">
                <div className="dropdown-left">
      <div className="title-drop">
      <p>Professional courses</p>
      </div>
      <p>
      Our Professional IT Courses bridge the gap between education and real-world job skills.
They prepare graduates who lack field experience, as well as 10th/12th pass or dropouts, to
become job-ready.
With industry-recognized certifications, students gain practical skills and career opportunities.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Artificial Intelligience(AI)</Link>
              <Link to="/10thstd" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Full Stack Development</Link>
              <Link to="/12thstd" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">AR/VR - Multimedia</Link>
              <Link to="/4-9std" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc"> CAD/CAM/CAE</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Data Analysis,office 365</Link>
              <Link to="/earlyearning" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Cyber Security & hacking </Link>
              <Link to="/examsupport" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Cloud Computing(AWS)</Link>
              <Link to="/examsupport" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Hardware Repairing(IoT)</Link>
              <Link to="/examsupport" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Accounting(Tally Prime)</Link>
              <Link to="/examsupport" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Project/Internship/OJT</Link>
            
            </div>
          </div>
</div>
          
     
           <div
      className="dropdown-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link className="dropbtn" >Short Courses</Link>
      {open && (
        <div className="dropdown-menu">
          
          <div className="dropdown-inner"> 
            {courseData.map((course, index) => (
            <div key={index} className="dropdown-column">
              <h4>{course.title}</h4>
              <ul>
                {course.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>


 
           <div className="dropdown">
  <Link to="/" className="dropbtn">About us</Link>

  <div className="dropdown-content">
    {/* Left side content */}
    <div className="dropdown-left">
      <div className="title-drop">
      <p>About Us</p>
      </div>
      <p>
      ITC is an institution managed by the Karma Yogi Saints of Anoopam Mission, operating on a no-profit,
no-loss basis.
For over 37 years, we have been a trusted pioneer in IT education, consistently nurturing talent and
building futures.
With more than 90,000 students trained, including professionals, teachers, employees, corporates,
parents, and children, we have empowered society with essential IT skills.
Our mission is to prepare individuals not just for jobs, but for meaningful careers through practical and
value-driven learning.
In doing so, ITC continues to make a significant contribution to both the community and the nation.
.
      </p>
    </div>

    {/* Right side links */}
    <div className="dropdown-right">
      <Link to="/Aboutus" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Overview</Link>
      <Link to="/OurHistory" style={{fontSize:'16px',fontWeight:'600'}} className="drop-cc">Leadership</Link>
      <Link to="/Academic Partners" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Academic Partners</Link> 
      <Link to="/Guildelines" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Guildelines</Link>
      {/* <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}>Leadership</Link> */}
      <Link to="/Infrastructure" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Infrastructure</Link>
      <Link to="/Achievements" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Achievements </Link>
      <Link to="/Gallery" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Gallery</Link>
    </div>
  </div>
</div>
             <div className="dropdown">
          <Link to="" className="dropbtn">Activities</Link>
          <div className="dropdown-content">
             <div className="dropdown-left">
     <div className="title-drop">
      <p>Purpose of Activities</p>
      </div>
      <p>
        Activities foster holistic student growth by enhancing domain knowledge, teamwork, leadership, and
management skills. They build resilience, social responsibility, and confidence—shaping students into
well-rounded professionals ready to face challenges.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">		Seminars & Workshops</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Events & Celebrations</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">		Student Achievements</Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">		Gallery</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	News & Updates</Link>
            </div>
            </div>
            </div>


             <div className="dropdown">
          <Link to="/studentcorner" className="dropbtn">Student Corner</Link>
          <div className="dropdown-content">
              <div className="dropdown-left">
    <div className="title-drop">
      <p>Student Corner</p>
      </div>
      <p>
The Student Corner is designed as a support system that provides students with the resources and
guidance they expect from the organization. It covers benefits that enrich both their education and
personal life, ensuring a more balanced and fulfilling student journey.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Project</Link>
              <Link to="/internship" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Internship</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Placement</Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Exam Preparation</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Incubation Centre</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Idea to reality/ tech innovator/ Bring your Idea</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Wellness & Guidance / Counselling corner</Link>
            </div>
            </div>
            </div>
             <div className="dropdown">
          <Link to="/studentcorner" className="dropbtn">Services</Link>
          <div className="dropdown-content">
              <div className="dropdown-left">
    <div className="title-drop">
      <p>Services</p>
      </div>
      <p>
       Our IT Services integrate industry projects with academic learning to deliver real-world experience.
By bridging the gap between theoretical teaching and practical exposure, we empower faculty and
students alike.
This value-added approach ensures graduates are work-ready with hands-on skills and industry insight.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Pc /Laptop Maintenanace</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Networking & Server Setup</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Web & digital Solution </Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Software & ERP Support</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Software Development</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Cloud Solutions </Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Incubation & innovation Lab Access</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">IT Consulting & Advisory</Link>
            </div>
            </div>
            </div>
             <div className="dropdown">
          <Link to="/studentcorner" className="dropbtn">Offer</Link>
          <div className="dropdown-content">
              <div className="dropdown-left">
    <div className="title-drop">
      <p>Offers</p>
      </div>
      <p>
       In today’s time, many students face financial limits, time constraints, or only need specific knowledge.
Offers provide them with an affordable opportunity to learn the latest technologies and stay
updated—ensuring wider access and maximum benefit for all.
      </p>
    </div>
<div className="dropdown-right">
              <Link to="/careercounselling" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Project</Link>
              <Link to="/skilldevelopment" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Internship</Link>
              <Link to="/kidscorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Placement</Link>
              <Link to="/vacationcourses" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Exam Preparation</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">	Incubation Centre</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Idea to reality/ tech innovator/ Bring your Idea</Link>
              <Link to="/teachercorner" style={{fontSize:'16px',fontWeight:'600'}}className="drop-cc">Wellness & Guidance / Counselling corner</Link>
            </div>
            </div>
            </div>
          {/* <Link to="/services" >Services</Link>
          <Link to="/offers" >Offers</Link>
          */}
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
