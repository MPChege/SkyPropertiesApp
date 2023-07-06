import React from "react";
import './App.css';

import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/contact";
import Form from "./components/form/form";
import Profile from "./components/profile/profile";
import Search from "./components/search/search";
import Houses from "./components/houses/houses";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <div className="section">
          <Form />
        </div>
        <div className="section">
          <Houses />
        </div>
        <div className="section">
          <Search />
        </div>
        <div className="section">
          <Profile />
        </div>
        <div className="section">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
