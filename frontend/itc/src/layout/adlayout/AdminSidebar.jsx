import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaCog } from 'react-icons/fa';
import './Admin.css';

const AdminSidebar = ({ isOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showText = isOpen || isMobile;

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/admindashboard' },
    { name: 'Users', icon: <FaUsers />, path: '/users' },
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
    
  ];

  return (
    <aside className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <div className="icon">{item.icon}</div>
              {showText && <span className="link-text">{item.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
