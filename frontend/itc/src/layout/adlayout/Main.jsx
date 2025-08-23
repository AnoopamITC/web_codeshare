import React from 'react'
import SideBar from '../../pages/admin/SideBar';
import { Outlet } from "react-router-dom";

const Mainlayout = ({ children }) => {
  return (
    <div>
    <SideBar/>
     <main>
        <Outlet />  
      </main>
    
     
    </div>
  )
}

export default Mainlayout
