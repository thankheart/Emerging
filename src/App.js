// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FutureDirections from "./pages/FutureDirections​";
import BenefitsImpacts from "./pages/BenefitsImpacts";
import RiskSafety from "./pages/RiskSafety";
import RecentRobots from "./pages/RecentRobots";
import DomesticLabor from "./pages/DomesticLabor";
import References from "./pages/References";
import "./styles.css";
import "./App.css";
import InfoBox from "./components/InfoBox";
import InfoBoxes from "./components/InfoBoxes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          {/*}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domestic-labor" element={<DomesticLabor />} />
            <Route path="/benefits-impacts" element={<BenefitsImpacts />} />
            <Route path="/recent-robots" element={<RecentRobots />} />
            <Route path="/risk-safety" element={<RiskSafety />} />
            <Route path="/future-directions" element={<FutureDirections />} />
            <Route path="/references" element={<References />} />
    
          </Routes>{*/}
          <InfoBoxes />
        </main>
      </div>
    </Router>
  );
}

export default App;
