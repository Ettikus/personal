// ProjectsPage.js
import React from 'react';
import Navigation from './Navigation';
import './App.css'; // Import CSS file

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="header">
          <h1>My Projects</h1>
          <p>Explore some of the projects I've worked on:</p>
        </div>
        <div className="projects-list">
          <ul>
            <li>Project 1: Description of project 1</li>
            <li>Project 2: Description of project 2</li>
            <li>Project 3: Description of project 3</li>
            {/* Add more projects as needed */}
          </ul>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default ProjectsPage;
