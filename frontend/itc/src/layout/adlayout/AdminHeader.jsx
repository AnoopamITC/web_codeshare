import React from 'react'
import logo from '@/assets/images/itc.png'
import { FaBars } from 'react-icons/fa';
import './Admin.css'
import { useNavigate } from 'react-router-dom';
const AdminHeader = ({ toggleSidebar, showMenuIcon = true }) => {
    const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin'); 
  };
  return (
  <header className="admin-header">
      <div className="header-left">
       {showMenuIcon && ( <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>)}
        <img src={logo} alt="ITC Logo" className="logo" />
        <p className="welcome-text">Welcome!</p>
      </div>
      <div className="header-right">
      {showMenuIcon &&  <button className="logout-btn" onClick={handleLogout}>Logout</button>}
      </div>
    </header>
  )
}

export default AdminHeader
