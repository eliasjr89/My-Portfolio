import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "../config/i18next";
import "./App.css";
import Hero from "./components/Hero";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Experience from "./views/Experience";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Skills from "./views/Skills";

const App = () => {
  return (
    <Router>
      <Hero />
      {/* <LanguageSwitcher /> */}
      <Navbar />
      <Routes>
        {/* Redirigir automáticamente a /about */}
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
