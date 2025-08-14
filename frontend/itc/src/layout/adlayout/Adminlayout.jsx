import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import './Admin.css';
import { useLocation } from 'react-router-dom';
const Adminlayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const isLoginPage = location.pathname === '/admin';
  return (
    <div className="admin-layout">
      <AdminHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} showMenuIcon={!isLoginPage}/>
      <div className="content-area">
        {!isLoginPage && <AdminSidebar isOpen={sidebarOpen} />}
        <main className="admin-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Adminlayout;
