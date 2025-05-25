import React from 'react';
import Hero from '../components/Hero';  // Import Hero component
import Navbar from '../components/Navbar';
import About from '../components/About';
import '../components/Navbar.css';
import '../components/Hero.css';
import Team from '../components/Team';
import '../components/Team.css'
import SchoolPortalSection from '../components/SchoolPortalSection';
import '../components/SchoolPortalSection.css'

import '../App.css';  // Import styles for App

import CBTTestingSection from '../components/CBTTestingSection';
import '../components/CBTTestingSection.css'

import ProjectsSection from '../components/ProjectsSection';
import '../components/ProjectsSection.css'

import TechStackSection from '../components/TechStackSection';
import '../components/TechStackSection.css'

import TestimonialsCarousel from '../components/TestimonialsCarousel';

import '../components/TestimonialsCarousel.css'

import Footer from '../components/Footer';

import '../components/Footer.css'

import NewsSection from '../components/NewsSection';
import '../components/NewsSection.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <SchoolPortalSection />
      <CBTTestingSection />
      <ProjectsSection />
      <TechStackSection />
      <TestimonialsCarousel />
      <NewsSection />
      <Footer />
    </div>
    
  );
};

export default Home;
