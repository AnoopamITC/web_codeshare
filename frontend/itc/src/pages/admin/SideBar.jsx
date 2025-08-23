// // import React, { useState } from "react";
// // import {
// //   FaTachometerAlt,
// //   FaBook,
// //   FaUsers,
// //   FaFileAlt,
// //   FaChartBar,
// //   FaDatabase,
// //   FaChevronDown,
// // } from "react-icons/fa";

// // const SideBar = () => {
// //   const [openDropdown, setOpenDropdown] = useState(false);

// //   return (
// //     <>
// //       <div className="sidebars">
// //         {/* Logo / Header */}
// //         <div className="sidebar-headers">
// //           <span className="logos">🎓 EduAdmin</span>
// //         </div>

// //         {/* Menu */}
// //         <ul className="sidebar-menus">
// //           <li className="actives">
// //             <FaTachometerAlt className="icons" />
// //             <span>Dashboard</span>
// //           </li>

// //           <li className="dropdown-li">
// //             <div
// //               className="submenu-headers"
// //               onClick={() => setOpenDropdown(!openDropdown)}
// //             >
// //               <FaBook className="icons" />
// //               <span>Courses</span>
// //               <FaChevronDown
// //                 className={`dropdown-icons ${openDropdown ? "opens" : ""}`}
// //               />
// //             </div>
// //             {openDropdown && (
// //               <ul className="submenus">
// //                 <li>All Courses</li>
// //                 <li>Add New</li>
// //                 <li>Categories</li>
// //               </ul>
// //             )}
// //           </li>

// //           <li>
// //             <FaUsers className="icons" />
// //             <span>Users</span>
// //           </li>
// //           <li>
// //             <FaFileAlt className="icons" />
// //             <span>Content</span>
// //           </li>
// //           <li>
// //             <FaChartBar className="icons" />
// //             <span>Analytics</span>
// //           </li>
// //           <li>
// //             <FaDatabase className="icons" />
// //             <span>System</span>
// //           </li>
// //         </ul>

// //         {/* Footer */}
// //         <div className="sidebar-footers">
// //           <img
// //             src="https://i.pravatar.cc/40?img=3"
// //             alt="Admin"
// //             className="avatar"
// //           />
// //           <div>
// //             <h4>John Admin</h4>
// //             <p>Administrator</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Internal CSS */}
// //       <style>{`
// //         .sidebars {
// //           width: 250px;
// //           height: 100vh;
// //           background: #fff;
// //           border-right: 1px solid #e5e7eb;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: space-between;
// //           font-family: "Segoe UI", sans-serif;
// //           position: fixed;
// //           top: 0;
// //           left: 0;
// //         }

// //         /* Header */
// //         .sidebar-headers {
// //           padding: 20px;
// //           font-size: 18px;
// //           font-weight: bold;
// //           color: #1e293b;
// //           border-bottom: 1px solid #e5e7eb;
// //         }

// //         .logos {
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //         }

// //         /* Menu */
// //         .sidebar-menus {
// //           list-style: none;
// //           margin: 0;
// //           padding: 10px 0;
// //           flex-grow: 1;
// //         }

// //         .sidebar-menus li {
// //           display: block;
// //           padding: 12px 20px;
// //           color: #475569;
// //           cursor: pointer;
// //           transition: all 0.3s;
// //           position: relative;
// //         }

// //         .icons {
// //           margin-right: 12px;
// //           font-size: 16px;
// //           vertical-align: middle;
// //         }

// //         /* Badge */
// //         .badge {
// //           font-size: 12px;
// //           font-weight: bold;
// //           padding: 2px 8px;
// //           border-radius: 12px;
// //           position: absolute;
// //           right: 20px;
// //         }

// //         .greens {
// //           background: #10b981;
// //           color: #fff;
// //         }

// //         /* Dropdown */
// //         .dropdown-li {
// //           padding: 0;
// //         }

// //         .submenu-headers {
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //         }

// //         .dropdown-icons {
// //           margin-left: auto;
// //           transition: transform 0.3s;
// //         }

// //         .dropdown-icons.opens {
// //           transform: rotate(180deg);
// //         }

// //         .submenus {
// //           list-style: none;
// //           margin: 0;
// //           padding: 0 0 0 50px;
// //         }

// //         .submenus li {
// //           padding: 10px 0;
// //           font-size: 14px;
// //           color: #475569;
// //           cursor: pointer;
// //           transition: color 0.3s;
// //         }

// //         .submenus li:hover {
// //           color: #2563eb;
// //         }

// //         /* Footer */
// //         .sidebar-footers {
// //           display: flex;
// //           align-items: center;
// //           padding: 20px;
// //           border-top: 1px solid #e5e7eb;
// //           gap: 10px;
// //         }

// //         .avatar {
// //           width: 40px;
// //           height: 40px;
// //           border-radius: 50%;
// //         }

// //         .sidebar-footers h4 {
// //           margin: 0;
// //           font-size: 14px;
// //           font-weight: bold;
// //           color: #1e293b;
// //         }

// //         .sidebar-footers p {
// //           margin: 0;
// //           font-size: 12px;
// //           color: #64748b;
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default SideBar;


// import React, { useEffect, useState } from "react";
// import {
//   FaTachometerAlt,
//   FaBook,
//   FaUsers,
//   FaFileAlt,
//   FaChartBar,
//   FaDatabase,
//   FaChevronDown,
// } from "react-icons/fa";

// const SideBar = () => {
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openProfileMenu, setOpenProfileMenu] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth > 1024) setSidebarOpen(true);
//     else setSidebarOpen(false);
//   };
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);


//   return (
//     <>
//       {/* HEADER */}
//       <div className="header">
//         <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <span></span> {/* vertical three dots */}
//           <span></span> {/* vertical three dots */}
//           <span></span> {/* vertical three dots */}
//         </div>
//         <h2 className="page-title">Dashboard</h2>
//         <div className="profile-container">
//           <img
//             src="https://i.pravatar.cc/40?img=12"
//             alt="Profile"
//             className="profile-avatar"
//             onClick={() => setOpenProfileMenu(!openProfileMenu)}
//           />
//           {openProfileMenu && (
//             <ul className="profile-menu">
//               <li>Profile</li>
//               <li>Logout</li>
//             </ul>
//           )}
//         </div>
//       </div>

//       {/* SIDEBAR (unchanged) */}
//       <div className={`sidebars ${sidebarOpen ? "open" : "closed"}`}>
//         {/* Logo / Header */}
//         <div className="sidebar-headers">
//           <span className="logos">🎓 EduAdmin</span>
//         </div>

//         {/* Menu */}
//         <ul className="sidebar-menus">
//           <li className="actives">
//             <FaTachometerAlt className="icons" />
//             <span>Dashboard</span>
//           </li>

//           <li className="dropdown-li">
//             <div
//               className="submenu-headers"
//               onClick={() => setOpenDropdown(!openDropdown)}
//             >
//               <FaBook className="icons" />
//               <span>Courses</span>
//               <FaChevronDown
//                 className={`dropdown-icons ${openDropdown ? "opens" : ""}`}
//               />
//             </div>
//             {openDropdown && (
//               <ul className="submenus">
//                 <li>All Courses</li>
//                 <li>Add New</li>
//                 <li>Categories</li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <FaUsers className="icons" />
//             <span>Users</span>
//           </li>
//           <li>
//             <FaFileAlt className="icons" />
//             <span>Content</span>
//           </li>
//           <li>
//             <FaChartBar className="icons" />
//             <span>Analytics</span>
//           </li>
//           <li>
//             <FaDatabase className="icons" />
//             <span>System</span>
//           </li>
//         </ul>

//         {/* Footer */}
//         <div className="sidebar-footers">
//           <img
//             src="https://i.pravatar.cc/40?img=3"
//             alt="Admin"
//             className="avatar"
//           />
//           <div>
//             <h4>John Admin</h4>
//             <p>Administrator</p>
//           </div>
//         </div>
//       </div>

//       {/* Internal CSS */}
//       <style>{`
//         /* Header */
//         .header {
//           position: fixed;
//           top: 0;
//           left: 250px; /* shift right because sidebar is fixed */
//           right: 0;
//           height: 64px;
//           background: #C1D1F1FF;
//           border-bottom: 1px solid #4E7CD8FF;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 20px;
//           z-index: 1000;
//         }

//         .page-title {
//           font-size: 18px;
//           font-weight: bold;
//           color: #1e293b;
//         }

//         .profile-container {
//           position: relative;
//         }

//         .profile-avatar {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           cursor: pointer;
//         }

//         .profile-menu {
//           position: absolute;
//           right: 0;
//           top: 50px;
//           background: #fff;
//           border: 1px solid #e5e7eb;
//           border-radius: 6px;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//           list-style: none;
//           padding: 8px 0;
//           width: 150px;
//           animation: fadeIn 0.2s ease-in-out;
//         }

//         .profile-menu li {
//           padding: 10px 15px;
//           font-size: 14px;
//           color: #475569;
//           cursor: pointer;
//           transition: background 0.2s;
//         }

//         .profile-menu li:hover {
//           background: #f1f5f9;
//           color: #2563eb;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* Sidebar */
//         .sidebars {
//           width: 250px;
//           height: 100vh;
//           background: #C1D1F1FF;
//           border-right: 1px solid #e5e7eb;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           font-family: "Segoe UI", sans-serif;
//           position: fixed;
//           top: 0;
//           left: 0;
//         }

//         /* Header inside sidebar */
//         .sidebar-headers {
//           padding: 20px;
//           font-size: 18px;
//           font-weight: bold;
//           color: #1e293b;
//           border-bottom: 1px solid #e5e7eb;
//         }

//         .logos {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         /* Menu */
//         .sidebar-menus {
//           list-style: none;
//           margin: 0;
//           padding: 10px 0;
//           flex-grow: 1;
//         }

//         .sidebar-menus li {
//           display: block;
//           padding: 12px 20px;
//           cursor: pointer;
//           transition: all 0.3s;
//           position: relative;
//         }

//         .icons {
//           margin-right: 12px;
//           font-size: 16px;
//           vertical-align: middle;
//         }

//         /* Dropdown */
//         .dropdown-li {
//           padding: 0;
//         }

//         .submenu-headers {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 12px 20px;
//         }

//         .dropdown-icons {
//           margin-left: auto;
//           transition: transform 0.3s;
//         }

//         .dropdown-icons.opens {
//           transform: rotate(180deg);
//         }

//         .submenus {
//           list-style: none;
//           margin: 0;
//           padding: 0 0 0 50px;
//         }

//         .submenus:hover{
//           color: #2563eb;
//         }

//         .submenus li {
//           padding: 10px 0;
//           font-size: 14px;
//           color: #475569;
//           cursor: pointer;
//           transition: color 0.3s;
//         }

//         .submenus li:hover {
//           color: #2563eb;
//         }

//         /* Footer */
//         .sidebar-footers {
//           display: flex;
//           align-items: center;
//           padding: 20px;
//           border-top: 1px solid #e5e7eb;
//           gap: 10px;
//         }

//         .avatar {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//         }

//         .sidebar-footers h4 {
//           margin: 0;
//           font-size: 14px;
//           font-weight: bold;
//           color: #1e293b;
//         }

//         .sidebar-footers p {
//           margin: 0;
//           font-size: 12px;
//           color: #64748b;
//         }

//         .hamburger {
//           display: none; /* hidden on desktop */
//           flex-direction: column;
//           justify-content: space-between;
//           width: 25px;
//           height: 20px;
//           cursor: pointer;
//         }

//         .hamburger span {
//           display: block;
//           height: 3px;
//           width: 100%;
//           background: #1e293b;
//           border-radius: 2px;
//         }

//         /* Sidebar closed state on small screens */
//         .sidebars.closed {
//           left: 0;
//           transition: left 0.3s;
//         }

//         /* Sidebar open state */
//         .sidebars.open {
//           left: 0;
//           transition: left 0.3s;
//         }
//           /* Responsive for mobile devices */
//         @media (max-width: 1024px) {
//           .hamburger {
//             display: block; /* show hamburger on mobile */
//           }

//           .sidebars {
//             position: fixed;
//             left: -250px;
//             transition: left 0.3s;
//             z-index: 999;
//           }

//           .sidebars.open {
//             left: 0;
//           }

//           .header {
//             left: 0;
//             padding: 0 15px;
//           }

//           .hamburger {
//             display: block;
//             font-size: 20px;
//             cursor: pointer;
//             margin-right: 15px;
//           }

//           .page-title {
//             font-size: 16px;
//           }
//         }

//         @media (max-width: 768px) {
//           .sidebar-menus li {
//             padding: 10px 15px;
//             font-size: 14px;
//           }

//           .submenus {
//             padding-left: 40px;
//           }

//           .sidebar-footers {
//             padding: 15px;
//             gap: 8px;
//           }

//           .sidebar-footers h4 {
//             font-size: 13px;
//           }

//           .sidebar-footers p {
//             font-size: 11px;
//           }

//           .profile-menu {
//             width: 120px;
//           }

//           .profile-menu li {
//             padding: 8px 12px;
//             font-size: 13px;
//           }
//         }

//         @media (max-width: 480px) {
//           .page-title {
//             font-size: 14px;
//           }

//           .icons {
//             font-size: 14px;
//             margin-right: 8px;
//           }

//           .submenu-headers {
//             padding: 10px 15px;
//           }

//           .submenus li {
//             font-size: 13px;
//             padding: 8px 0;
//           }

//           .sidebar-headers {
//             padding: 15px;
//             font-size: 16px;
//           }

//           .avatar, .profile-avatar {
//             width: 35px;
//             height: 35px;
//           }

//           .sidebar-footers {
//             padding: 12px;
//           }
//         }

//       `}</style>
//     </>
//   );
// };

// export default SideBar;


// import React, { useState, useEffect } from "react";
// import {
//   FaTachometerAlt,
//   FaBook,
//   FaUsers,
//   FaFileAlt,
//   FaChartBar,
//   FaDatabase,
//   FaChevronDown,
// } from "react-icons/fa";

// const SideBar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [openProfileMenu, setOpenProfileMenu] = useState(false);

//   // Close sidebar automatically on resize for mobile
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 1024) setSidebarOpen(false); // desktop starts closed
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* HEADER */}
//       <div className="header">
//         <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <h2 className="page-title">Dashboard</h2>
//         <div className="profile-container">
//           <img
//             src="https://i.pravatar.cc/40?img=12"
//             alt="Profile"
//             className="profile-avatar"
//             onClick={() => setOpenProfileMenu(!openProfileMenu)}
//           />
//           {openProfileMenu && (
//             <ul className="profile-menu">
//               <li>Profile</li>
//               <li>Logout</li>
//             </ul>
//           )}
//         </div>
//       </div>

//       {/* SIDEBAR */}
//       <div className={`sidebars ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="sidebar-headers">
//           <span className="logos">🎓 EduAdmin</span>
//         </div>

//         <ul className="sidebar-menus">
//           <li className="actives">
//             <FaTachometerAlt className="icons" />
//             <span>Dashboard</span>
//           </li>

//           <li className="dropdown-li">
//             <div
//               className="submenu-headers"
//               onClick={() => setOpenDropdown(!openDropdown)}
//             >
//               <FaBook className="icons" />
//               <span>Courses</span>
//               <FaChevronDown
//                 className={`dropdown-icons ${openDropdown ? "opens" : ""}`}
//               />
//             </div>
//             {openDropdown && (
//               <ul className="submenus">
//                 <li>All Courses</li>
//                 <li>Add New</li>
//                 <li>Categories</li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <FaUsers className="icons" />
//             <span>Users</span>
//           </li>
//           <li>
//             <FaFileAlt className="icons" />
//             <span>Content</span>
//           </li>
//           <li>
//             <FaChartBar className="icons" />
//             <span>Analytics</span>
//           </li>
//           <li>
//             <FaDatabase className="icons" />
//             <span>System</span>
//           </li>
//         </ul>

//         <div className="sidebar-footers">
//           <img
//             src="https://i.pravatar.cc/40?img=3"
//             alt="Admin"
//             className="avatar"
//           />
//           <div>
//             <h4>John Admin</h4>
//             <p>Administrator</p>
//           </div>
//         </div>
//       </div>

//       {/* Internal CSS */}
//       <style>{`
//         /* Header */
//         .header {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 64px;
//           background: #C1D1F1FF;
//           border-bottom: 1px solid #4E7CD8FF;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 20px;
//           z-index: 1000;
//         }

//         .page-title {
//           font-size: 18px;
//           font-weight: bold;
//           color: #1e293b;
//         }

//         .profile-container {
//           position: relative;
//         }

//         .profile-avatar {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           cursor: pointer;
//         }

//         .profile-menu {
//           position: absolute;
//           right: 0;
//           top: 50px;
//           background: #fff;
//           border: 1px solid #e5e7eb;
//           border-radius: 6px;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//           list-style: none;
//           padding: 8px 0;
//           width: 150px;
//           animation: fadeIn 0.2s ease-in-out;
//         }

//         .profile-menu li {
//           padding: 10px 15px;
//           font-size: 14px;
//           color: #475569;
//           cursor: pointer;
//           transition: background 0.2s;
//         }

//         .profile-menu li:hover {
//           background: #f1f5f9;
//           color: #2563eb;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* Sidebar */
//         .sidebars {
//           width: 250px;
//           height: 100vh;
//           background: #C1D1F1FF;
//           border-right: 1px solid #e5e7eb;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           font-family: "Segoe UI", sans-serif;
//           position: fixed;
//           top: 0;
//           left: -250px; /* start hidden */
//           transition: left 0.3s;
//           z-index: 999;
//         }

//         .sidebars.open {
//           left: 0;
//         }

//         .sidebar-headers {
//           padding: 20px;
//           font-size: 18px;
//           font-weight: bold;
//           color: #1e293b;
//           border-bottom: 1px solid #e5e7eb;
//         }

//         .logos {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .sidebar-menus {
//           list-style: none;
//           margin: 0;
//           padding: 10px 0;
//           flex-grow: 1;
//         }

//         .sidebar-menus li {
//           display: block;
//           padding: 12px 20px;
//           cursor: pointer;
//           transition: all 0.3s;
//           position: relative;
//         }

//         .icons {
//           margin-right: 12px;
//           font-size: 16px;
//           vertical-align: middle;
//         }

//         .dropdown-li .submenu-headers {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 12px 20px;
//         }

//         .dropdown-icons {
//           margin-left: auto;
//           transition: transform 0.3s;
//         }

//         .dropdown-icons.opens {
//           transform: rotate(180deg);
//         }

//         .submenus {
//           list-style: none;
//           margin: 0;
//           padding: 0 0 0 50px;
//         }

//         .submenus li {
//           padding: 10px 0;
//           font-size: 14px;
//           color: #475569;
//           cursor: pointer;
//           transition: color 0.3s;
//         }

//         .submenus li:hover {
//           color: #2563eb;
//         }

//         .sidebar-footers {
//           display: flex;
//           align-items: center;
//           padding: 20px;
//           border-top: 1px solid #e5e7eb;
//           gap: 10px;
//         }

//         .avatar {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//         }

//         .sidebar-footers h4 {
//           margin: 0;
//           font-size: 14px;
//           font-weight: bold;
//           color: #1e293b;
//         }

//         .sidebar-footers p {
//           margin: 0;
//           font-size: 12px;
//           color: #64748b;
//         }

//         .hamburger {
//           display: none;
//           flex-direction: column;
//           justify-content: space-between;
//           width: 25px;
//           height: 20px;
//           cursor: pointer;
//         }

//         .hamburger span {
//           display: block;
//           height: 3px;
//           width: 100%;
//           background: #1e293b;
//           border-radius: 2px;
//         }

//         @media (max-width: 1024px) {
//           .hamburger {
//             display: flex;
//           }

//           .header {
//             padding: 0 15px;
//           }

//           .page-title {
//             font-size: 16px;
//           }
//         }

//         @media (max-width: 480px) {
//           .page-title {
//             font-size: 14px;
//           }

//           .icons {
//             font-size: 14px;
//             margin-right: 8px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default SideBar;


import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaDatabase,
  FaChevronDown,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const navigate = useNavigate();

  // Handle window resize to show/hide sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSidebarOpen(true); // desktop: show sidebar
      } else {
        setSidebarOpen(false); // mobile: hide sidebar
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2 className="page-title">Admin Panel</h2>
        <div className="profile-container">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Profile"
            className="profile-avatar"
            onClick={() => setOpenProfileMenu(!openProfileMenu)}
          />
          {openProfileMenu && (
            <ul className="profile-menu">
              <li>Profile</li>
              <li onClick={() => navigate('/AdminLogin')}>Logout</li>
            </ul>
          )}
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebars ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-headers">
          <span className="logos">🎓 EduAdmin</span>
        </div>

        <ul className="sidebar-menus">
          <li className="actives">
            <FaTachometerAlt className="icons" />
            <span onClick={() => navigate('/dashboard')}>Dashboard</span>
          </li>

          <li className="dropdown-li" style={{ padding: '1px' }}>
            <div
              className="submenu-headers"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <FaBook className="icons" />
              <span onClick={() => navigate('/All-Courses')}>Courses</span>
              <FaChevronDown
                className={`dropdown-icons ${openDropdown ? "opens" : ""}`}
              />
            </div>
            {openDropdown && (
              <ul className="submenus">
                <li onClick={() => navigate('/All-Courses')}>All Courses</li>
                <li onClick={() => navigate('/AddCourses')}>Add New</li>
                <li>Categories</li>
              </ul>
            )}
          </li>
          <li className="dropdown-li" style={{ padding: '1px' }}>
            <div
              className="submenu-headers"
              onClick={() => setOpenDropdown2(!openDropdown2)}
            >
              <FaBook className="icons" />
              <span>Internship</span>
              <FaChevronDown
                className={`dropdown-icons ${openDropdown2 ? "opens" : ""}`}
              />
            </div>
            {openDropdown2 && (
              <ul className="submenus">
                <li onClick={() => navigate('/addinternship')}>Add Category</li>
                <li onClick={() => navigate('/internshipreport')}>View Request</li>
              </ul>
            )}
          </li>
          <li className="dropdown-li" style={{ padding: '1px' }}>
            <div
              className="submenu-headers"
              onClick={() => setOpenDropdown1(!openDropdown1)}
            >
              <FaUsers className="icons" />
              <span onClick={() => navigate('/Users')}>Users</span>
              <FaChevronDown
                className={`dropdown-icons ${openDropdown1 ? "opens" : ""}`}
              />
            </div>
            {openDropdown1 && (
              <ul className="submenus">
                <li onClick={() => navigate('/All-Users')}>All User</li>
                {/* <li onClick={() => navigate('/AddCourses')}>Add New</li>
                <li>Categories</li> */}
              </ul>
            )}
          </li>
          <li>
            <FaFileAlt className="icons" />
            <span onClick={() => navigate('/Reports')}>Reports</span>
          </li>
          <li>
            <FaChartBar className="icons" />
            <span>Analytics</span>
          </li>
          <li>
            <FaDatabase className="icons" />
            <span>System</span>
          </li>
        </ul>

        <div className="sidebar-footers">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Admin"
            className="avatar"
          />
          <div>
            <h4>John Admin</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: #C1D1F1FF;
          border-bottom: 1px solid #4E7CD8FF;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          z-index: 1000;
        }

        .page-title {
          font-size: 18px;
          font-weight: bold;
          color: #1e293b;
        }

        .profile-container {
          position: relative;
        }

        .profile-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
        }

        .profile-menu {
          position: absolute;
          right: 0;
          top: 50px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          list-style: none;
          padding: 8px 0;
          width: 150px;
          animation: fadeIn 0.2s ease-in-out;
        }

        .profile-menu li {
          padding: 10px 15px;
          font-size: 14px;
          color: #475569;
          cursor: pointer;
          transition: background 0.2s;
        }

        .profile-menu li:hover {
          background: #f1f5f9;
          color: #2563eb;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Sidebar */
        .sidebars {
          width: 250px;
          height: 100vh;
          background: #C1D1F1FF;
          border-right: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: "Segoe UI", sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          transition: all 0.3s;
          z-index: 999;
        }

        .sidebars.closed {
          left: -250px;
        }

        .sidebar-headers {
          padding: 20px;
          font-size: 18px;
          font-weight: bold;
          color: #1e293b;
          border-bottom: 1px solid #e5e7eb;
        }

        .logos {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sidebar-menus {
          list-style: none;
          margin: 0;
          padding: 10px 0;
          flex-grow: 1;
        }

        .sidebar-menus li {
          display: block;
          padding: 12px 20px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }

        .icons {
          margin-right: 12px;
          font-size: 16px;
          vertical-align: middle;
        }

        .dropdown-li .submenu-headers {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
        }

        .dropdown-icons {
          margin-left: auto;
          transition: transform 0.3s;
        }

        .dropdown-icons.opens {
          transform: rotate(180deg);
        }

        .submenus {
          list-style: none;
          margin: 0;
          padding: 0 0 0 50px;
        }

        .submenus li {
          padding: 10px 0;
          font-size: 14px;
          color: #475569;
          cursor: pointer;
          transition: color 0.3s;
        }

        .submenus li:hover {
          color: #2563eb;
        }

        .sidebar-footers {
          display: flex;
          align-items: center;
          padding: 20px;
          border-top: 1px solid #e5e7eb;
          gap: 10px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .sidebar-footers h4 {
          margin: 0;
          font-size: 14px;
          font-weight: bold;
          color: #1e293b;
        }

        .sidebar-footers p {
          margin: 0;
          font-size: 12px;
          color: #64748b;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 25px;
          height: 20px;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background: #1e293b;
          border-radius: 2px;
        }

        @media (max-width: 1024px) {
          .hamburger {
            display: flex;
          }
          .sidebars.closed {
            left: -250px;
          }
          .sidebars.open {
            left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SideBar;
