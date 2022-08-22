import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import FreeEstimate from './components/Pages/FreeEstimate';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/free-estimate' element={<FreeEstimate />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
