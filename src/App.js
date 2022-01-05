import React from "react";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyle } from "./GlobalStyle";

// components
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

// resume
import Resume from "./assests/resume.pdf";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={Resume} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
