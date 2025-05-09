import React from 'react';
import Hero from './components/Hero';  // Import Hero component
import Navbar from './components/Navbar';
import './components/Navbar.css';
import './components/Hero.css';
import './App.css';  // Import styles for App

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
