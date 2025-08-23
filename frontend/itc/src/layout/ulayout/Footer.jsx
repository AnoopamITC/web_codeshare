import React from "react";
import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaSnapchatGhost, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>CONTACTS</h3>
          <ul>
            <li>
              <FaMapMarkerAlt />
              Information Technology Centre, Anoopam mission, Brahmajyoti, Yogiji Marg, Mogri
            </li>
            <li>
              <FaPhoneAlt />
              Mobile: (+91) 98243 72633
            </li>
            <li>
              <FaEnvelope />
              <span>
                divyesh_sangani@yahoo.co.in
                <br />
                divyesh@itcentre.org
              </span>
            </li>
            {/* <li>  <span className="cc">  <Link to=''><FaFacebookF style={{gap:'25px'}}/></Link>
          <Link to=''><FaInstagram  style={{gap:'25px'}}/></Link>
          <Link to=''><FaYoutube  style={{gap:'25px'}}/></Link>
          <Link to=''><FaWhatsapp  style={{gap:'25px'}}/></Link>
          <Link to=''><FaSnapchatGhost  style={{gap:'25px'}}/></Link></span></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li ><Link to='/' style={{ textAlign:'center'}}>Home</Link></li>
            <li><Link to='/aboutus'>About Us</Link></li>
            <li><Link to='/schoolcourses'>School Courses</Link></li>
            <li><Link to='/professionalcourses'>Professional Courses</Link></li>
            <li><Link to='/shortcourses'>Short Courses</Link></li>
            <li><Link to='/studentcorner'>Student Corner</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/offers'>Offers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>POPULAR COURSES</h3>
          <ul>
            <li>Full Stack Web Development</li>
            <li>Data Science & AI</li>
            <li>Cyber Security</li>
            <li>Digital Marketing</li>
            <li>Python Programming</li>
            <li>Ethical Hacking</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="footer-section certified">
          <h3>CERTIFIED BY</h3>
          <p>
            NSDC & NIELIT ISO 9001:2015<br />
            Certified 10,000+ Alumni Trained
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          © 2025 ITC Inc. All rights reserved.
        </div>
        <div className="footer-right social-icons">
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
