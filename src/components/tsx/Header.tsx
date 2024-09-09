import React from 'react';
import '../styling/Header.css'; // Styling

const Header: React.FC = () => {
  return (
    <header className="header-title">
      <h1>Gabriel Perez</h1>
      <h2>Developer</h2>
      <nav className="header-nav">
        <ul>
             <li><a href="#home" className="nav-link">Home</a></li>
             <li><a href="#about" className="nav-link">About</a></li>
             <li><a href="#projects" className="nav-link">Projects</a></li>
             <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
       </nav>
    </header>
  );
};

export default Header;