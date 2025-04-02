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
import ScrollToTop from "./components/scrollTop";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 50,
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
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
