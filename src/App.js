import React from "react";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import { GlobalStyle } from "./GlobalStyle";

// components
import Header from "./components/Header";
import BgVideo from "./components/BgVideo";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <BgVideo /> <Header />{" "}
          </>
        }
      />
      <Route path="/*" element={<Header />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
