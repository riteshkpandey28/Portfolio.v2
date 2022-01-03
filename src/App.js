import React from "react";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyle } from "./GlobalStyle";

// components
import Home from "./components/Home";
import Experience from "./components/Experience";

// resume
import Resume from "./assests/resume.pdf";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={Resume} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
