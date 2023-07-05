import React from 'react';
import './App.css';

import LandingHome from './components/LandingHome'; 
import LandingAbout from './components/LandingAbout';
import LandingNavbar from './components/LandingNavbar';
// import { Route } from 'react-router-dom';
function App() {
  return(
    <div className='App'>
       <LandingHome />
       <LandingAbout />

    </div>
  )
  
  

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      
    </Router>
    </>
  );

}

export default App;
