import React from "react";

// routing
import { Routes, Route, HashRouter } from "react-router-dom";

// styles
import { GlobalStyle } from "./GlobalStyle";

// components
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certification from "./components/Certifications";
import Project from "./components/Projects";
import SingleProject from "./components/Projects/SingleProject";

// resume
import Resume from "./assests/resume.pdf";

const App = () => (
  <HashRouter base="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={Resume} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/certification" element={<Certification />} />
      <Route path="/project" element={<Project />} />
      <Route path="/project-:slug" element={<SingleProject />} />
    </Routes>
    <GlobalStyle />
  </HashRouter>
);

export default App;
