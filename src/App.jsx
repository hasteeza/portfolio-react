import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/heropage";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/app" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
