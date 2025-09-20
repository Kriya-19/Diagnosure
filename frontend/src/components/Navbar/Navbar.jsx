import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Search,
  FileText,
  Hospital,
  User,
  BarChart3,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // logo image

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, language, toggleTheme, changeLanguage, translate } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 🔹 Refs for detecting outside click
  const langRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLanguageOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { key: 'symptomChecker', path: '/symptom-checker' },
    { key: 'prescriptionReader', path: '/prescription-reader' },
    { key: 'careAppointments', path: '/'},
    { key: 'myProfile', path: '/profile'},
    { key: 'history', path: '/history'},
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-name">{translate('diagnosure')}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {navItems.map((item) => {
            return (
              <button
                key={item.key}
                className={`navbar-item nav-link ${isActiveRoute(item.path) ? 'active' : ''}`}
                onClick={() => handleNavigation(item.path)}
              >
                <span className="nav-text">{translate(item.key)}</span>
              </button>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="navbar-controls">
          {/* Theme Toggle */}
          <button className="control-btn theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Language Selector */}
          <div className="dropdown language-dropdown" ref={langRef}>
            <button
              className="control-btn dropdown-trigger"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Globe size={18} />
              <ChevronDown size={12} className="dropdown-arrow" />
            </button>
            {isLanguageOpen && (
              <div className="dropdown-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`dropdown-item ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="dropdown profile-dropdown" ref={profileRef}>
            <button
              className="control-btn profile-btn"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="avatar">
                <User size={18} />
              </div>
              <ChevronDown size={12} className="dropdown-arrow" />
            </button>
            {isProfileOpen && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => { handleNavigation('/profile'); setIsProfileOpen(false); }}
                >
                  <User size={16} />
                  {translate('myProfile')}
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => { handleNavigation('/appointments'); setIsProfileOpen(false); }}
                >
                  <Hospital size={16} />
                  {translate('myAppointments')}
                </button>
                <div className="dropdown-separator"></div>
                <button className="dropdown-item">
                  <X size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                className={`mobile-menu-item ${isActiveRoute(item.path) ? 'active' : ''}`}
                onClick={() => handleNavigation(item.path)}
              >
                <IconComponent size={20} className="nav-icon" />
                <span>{translate(item.key)}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
