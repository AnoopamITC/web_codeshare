import React from "react";
import SideBar from "../../pages/admin/SideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* Sidebar / Header here */}
      <Outlet />  {/* <-- child components will render here */}
    </div>
  );
};

export default AdminLayout;

