import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // HelmetProvider ekledik

import Seo from "./components/Seo";
import CarsGalery from "./CarsGalery"; // Eğer dosya adı "CarsGalery.js" ise, import'u değiştir
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <HelmetProvider>
      <Seo /> 
      <Router>
        <Routes>
          <Route path="/" element={<CarsGalery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
