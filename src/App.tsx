import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Resume from "./components/Resume";
import TechnicalSkills from "./components/TechnicalSkills";
import ContactMe from "./components/ContactMe";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/technical-skills" element={<TechnicalSkills />} />
            <Route path="/my-projects" element={<MyProjects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
