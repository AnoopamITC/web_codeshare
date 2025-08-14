import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Bottombar from './Bottombar';

const Mainlayout = ({ children }) => {
  return (
    <div>
      <Header/>
    <main>{children}</main>
    
      <Footer/>
      <Bottombar/>
    </div>
  )
}

export default Mainlayout
