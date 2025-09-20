import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import './NavbarLanding.css'; // Ensure you create this CSS file for styling

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);
    document.body.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
  }, []);

  // Load Lato font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.body.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <>
      

      <nav className="navbar">
        <div className="brand-section">
          <img 
            src="https://mocha-cdn.com/01996671-f890-7648-8aa8-90f11004291d/logo.png"
            alt="Diagnosure Logo"
            className="logo"
          />
          <a href="/" className="brand-name">
            Diagnosure
          </a>
        </div>

        <div className="nav-center">
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
          </div>
        </div>

        <div className="right-section">
          <div className="auth-buttons">
            <a href="#login" className="btn btn-secondary">Log In</a>
            <a href="#signup" className="btn btn-primary">Sign Up</a>
          </div>
          
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
