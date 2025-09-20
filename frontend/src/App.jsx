// src/App.jsx
import React from "react";
import LandingPage from "./pages/LandingPage"; // adjust the path if LandingPage.jsx is elsewhere

function App() {
  return (
    <div className="App">
      {/* Render the full landing page including Navbar and HeroSection */}
      <LandingPage />
    </div>
  );
}

export default App;
