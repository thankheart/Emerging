// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import BenefitsImpacts from "./pages/BenefitsImpacts";
import RiskSafety from "./pages/RiskSafety";
import RecentRobots from "./pages/RecentRobots";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/benefits-impacts" element={<BenefitsImpacts />} />
            <Route path="/risk-safety" element={<RiskSafety />} />
            <Route path="/recent-robots" element={<RecentRobots />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
