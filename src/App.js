import React from "react";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyle } from "./GlobalStyle";

// components
import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
