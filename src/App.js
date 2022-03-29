import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// Pages
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
   <>
    <Navbar />

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Service />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='*' element={<Navigate to='/' />}/>
      
      </Routes>

      <Footer />
   </>
  );
}

export default App;
