import React, { useState, useEffect } from 'react';
import LiquidEther from './LiquidEther';
import Spline from '@splinetool/react-spline';
import './HeroSection.css';

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync with theme from localStorage and navbar toggle
  useEffect(() => {
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
      
      setIsDarkMode(shouldBeDark);
    };

    // Initial check
    checkTheme();

    // Listen for theme changes from navbar
    const handleStorageChange = () => {
      checkTheme();
    };

    // Listen for custom theme change events (if needed)
    const handleThemeChange = (e) => {
      setIsDarkMode(e.detail.isDark);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  // Set Liquid Ether colors based on theme
  const getLiquidEtherColors = () => {
    return isDarkMode 
      ? ['#5227FF', '#FF9FFC', '#B19EEF'] // Dark theme colors
      : ['#E3F2FD', '#BBDEFB', '#90CAF9']; // Light theme colors
  };

  return (
    <section className="hero-section">
      {/* Liquid Ether Background */}
      <div className="hero-background">
        <LiquidEther
          colors={getLiquidEtherColors()}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Column - Text Content */}
          <div className="hero-text">
            <h1 className="hero-heading">
              Your Health, Empowered by AI.
            </h1>
            <p className="hero-subheading">
              Experience accurate diagnostics, simplified care, and peace of mind.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Get Started
              </button>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Spline 3D Model */}
          <div className="hero-visual">
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/zJ6ygDghAh4UQv8p/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;