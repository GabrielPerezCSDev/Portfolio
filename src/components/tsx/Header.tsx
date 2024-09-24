import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css'; // Styling

const Header: React.FC = () => {
  return (
    <header className="header-title">
      <h1>Gabriel Perez</h1>
      <h2>Developer</h2>
      <nav className="header-nav">
        <ul>
          <li><Link to="/Portfolio" className="nav-link">Home</Link></li>
          <li><Link to="/Portfolio/about" className="nav-link">About</Link></li>
          <li><Link to="/Portfolio/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/Portfolio/contact" className="nav-link">Contact</Link></li>
        </ul>
       </nav>
    </header>
  );
};

export default Header;