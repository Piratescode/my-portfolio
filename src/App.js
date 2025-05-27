import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

import Technologies from "./pages/Technologies";
import About from "./pages/About";

import GetStarted from "./pages/GetStarted";

import Contact from './pages/ContactSection';

import ContactSection from "./pages/ContactSection";
import './pages/ContactSection.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactsection" element={<ContactSection />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

