import './App.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Mainlayout from './layout/ulayout/Mainlayout';
import Adminlayout from './layout/adlayout/Adminlayout';
import Home from './pages/user/Home';
import Professionalcourses from './pages/user/Professionalcourses';
import Services from './pages/user/Services';
import Shortcourses from './pages/user/Shortcourses';
import Aboutus from './pages/user/Aboutus';
import Studentcorner from './pages/user/Studentcorner';
import Offers from './pages/user/Offers';
import Schoolcourses from './pages/user/Schoolcourses';
import Careercounselling from './pages/user/Careercounselling';
import Skilldevelopment from './pages/user/Skilldevelopment';
import Kidscorner from './pages/user/Kidscorner';
import Vacationcourses from './pages/user/Vacationcourses';
import Teacherscorner from './pages/user/Teacherscorner';
import Dashboard from './pages/admin/Dashboard';
import ALogin from './pages/admin/ALogin';
// import Testimonial from './layout/ulayout/Testimonial.jsx'
function App() {


  return (
    <>
     <Router>
    <Routes >
        {/* User Routes */}
      <Route path='/' element={<Mainlayout><Home /></Mainlayout>} />
      <Route path='professionalcourses' element={<Mainlayout><Professionalcourses/></Mainlayout>} />
      <Route path='services' element={<Mainlayout><Services /></Mainlayout>} />
      <Route path='shortcourses' element={<Mainlayout><Shortcourses /></Mainlayout>} />
      <Route path='aboutus' element={<Mainlayout><Aboutus /></Mainlayout>} />
      <Route path='studentcorner' element={<Mainlayout><Studentcorner /></Mainlayout>} />
      <Route path='offers' element={<Mainlayout><Offers /></Mainlayout>} />
      <Route path='schoolcourses' element={<Mainlayout><Schoolcourses /></Mainlayout>} />
      <Route path='careercounselling' element={<Mainlayout><Careercounselling /></Mainlayout>} />
      <Route path='skilldevelopment' element={<Mainlayout><Skilldevelopment /></Mainlayout>} />
      <Route path='kidscorner' element={<Mainlayout><Kidscorner /></Mainlayout>} />
      <Route path='vacationcourses' element={<Mainlayout><Vacationcourses /></Mainlayout>} />
      <Route path='teachercorner' element={<Mainlayout><Teacherscorner /></Mainlayout>} />
      {/* <Route path='review' element={<Testimonial/>}/> */}

        {/* Admin Routes */}
        <Route path="/admindashboard" element={<Adminlayout><Dashboard/></Adminlayout>} />
        <Route path="/admin" element={<Adminlayout><ALogin/></Adminlayout>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
