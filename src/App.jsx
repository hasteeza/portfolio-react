import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./pages/heropage";
import HomePage from "./pages/homepage";
import ProjectPage from "./pages/projectpage";
import MilestonePage from "./pages/milestonepage";
import PortfolioPage from "./pages/portfoliopage";
import CertificationPage from "./pages/certificationpage";
function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/app" element={<HomePage />} />
        <Route path="/milestonepage" element={<MilestonePage />} />
        <Route path="/projectpage" element={<ProjectPage />} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
        <Route path="/certificationpage" element={<CertificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
