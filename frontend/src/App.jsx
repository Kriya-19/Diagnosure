// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

// Components
import Navbar from "./components/Navbar/Navbar";

// Pages
import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage/MapPage";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";
import SymptomChecker from "./pages/SymptomChecker/SymptomChecker";
import PrescriptionReader from "./pages/PrescriptionReader/PrescriptionReader";
import Profile from "./pages/Profile/Profile";

// Styles
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          {/* Show Navbar only after landing page */}
          {window.location.pathname !== "/" && <Navbar />}
          <main className="app-content">
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />

              {/* Main Features */}
              <Route path="/map" element={<MapPage />} />
              <Route path="/appointments" element={<AppointmentsPage />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
              <Route path="/prescription-reader" element={<PrescriptionReader />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<AppointmentsPage />} />

              {/* Fallback */}
              <Route path="*" element={<MapPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
