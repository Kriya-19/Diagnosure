// src/pages/LandingPage.jsx

import React from 'react';

// Import your components here
import NavbarLanding from './NavbarLanding';
import HeroSection from './HeroSection';
import FeaturesSection from '../components/Features';
import TestimonialSection from '../components/Testimonials';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar at the top */}
      <NavbarLanding />

      {/* Hero section below the Navbar */}
      <HeroSection />

      {/* Add other sections here as you build them */}
      <FeaturesSection />
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
