import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Bottombar from './Bottombar';
import { Outlet } from "react-router-dom";

const Mainlayout = ({ children }) => {
  return (
    <div>
      <Header/>
     <main>
        <Outlet />  
      </main>
    
      <Footer/>
      <Bottombar/>
    </div>
  )
}

export default Mainlayout
