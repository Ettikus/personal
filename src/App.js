import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import ContactPage from './ContactPage.js';
import ProjectsPage from './ProjectsPage.js'; // Update the import path
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} /> {/* Add route for ProjectsPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
