// src/pages/SymptomChecker/SymptomChecker.jsx

import React from 'react';
import { useApp } from '../../context/AppContext';
import './SymptomChecker.css';

const SymptomChecker = () => {
  const { translate } = useApp();

  return (
    <div className="symptom-checker-page">
      <div className="page-header">
        <h1>{translate('symptomChecker')}</h1>
      </div>
      <div className="page-content">
        <div className="coming-soon">
          <div className="coming-soon-icon">🔍</div>
          <h2>Symptom Checker</h2>
          <p>AI-powered symptom analysis coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;