import React from 'react'
import '../ulayout/Bottombar.css'
import { FaChalkboardTeacher, FaMoneyBillWave, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
const Bottombar = () => {
  return (
    <div>
          <div className="bottom-bar">
      <a href="#demo" className="bottom-btn"><FaChalkboardTeacher />Ask For Demo</a>
      <a href="#payment" className="bottom-btn"><FaMoneyBillWave/>Pay Fees Online </a>
      <a href="https://wa.me/919824372633" className="bottom-btn"><FaWhatsapp/>WhatsApp</a>

      <a href="tel:+919824372633" className="bottom-btn"><FaPhoneAlt/>Call Us Now</a>
    </div>
    </div>
  )
}

export default Bottombar
