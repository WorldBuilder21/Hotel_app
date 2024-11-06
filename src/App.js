import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './landingpage';

// Hello World, opening from github

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;