import React from 'react';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero';  // Import Hero component
import Navbar from './components/Navbar';
import About from './components/About';
import './components/Navbar.css';
import './components/Hero.css';
import Portals from "./components/Portals"; // Portals list component
import CBTTests from "./components/CBTTests"; // CBT Tests component
import Team from './components/Team';
import './components/Team'

import './App.css';  // Import styles for App

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portals" element={<Portals />} />
        <Route path="/cbt-tests" element={<CBTTests />} />
      </Routes>
    <Team />
    </div>
  );
};

export default App;
