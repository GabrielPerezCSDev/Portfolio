import React from 'react';
import './Projects.css'; // Import custom styling

const Projects: React.FC = () => {
  return (
    <div className="projects-section">
        <h2>Projects</h2>
        <p>
          🚧 Work in progress! 🚧
        </p>
        <p>
          My projects are currently being showcased on my{' '}
          <a href="https://github.com/GabrielPerezCSDev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
          Please check there for updates and project details!
        </p>
    </div>
  );
};

export default Projects;
