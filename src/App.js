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
import SchoolPortalSection from './components/SchoolPortalSection';
import './components/SchoolPortalSection.css'

import './App.css';  // Import styles for App
import CBTTestingSection from './components/CBTTestingSection';
import './components/CBTTestingSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    { /* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portals" element={<Portals />} />
        <Route path="/cbt-tests" element={<CBTTests />} />
      </Routes> */}
      <Team />
      <SchoolPortalSection />
      <CBTTestingSection />
    </div>
  );
};

export default App;
