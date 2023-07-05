import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

import LandingHome from './components/LandingHome'; 
import LandingAbout from './components/LandingAbout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/home" element={<LandingHome />} />
        <Route path="/about" element={<LandingAbout />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
