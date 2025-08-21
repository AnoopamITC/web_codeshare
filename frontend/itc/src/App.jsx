import { UserRound } from 'lucide-react';
import './App.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useRoutes} from 'react-router-dom';
import userRoutes from './routes/userRoutes';
// import userRoutes from '../userRoutes.jsx';
// import Testimonial from './layout/ulayout/Testimonial.jsx'
function App() {
const AppRoutes = () => {
  const element = useRoutes(userRoutes);
  return element;
};

  return (
 <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
