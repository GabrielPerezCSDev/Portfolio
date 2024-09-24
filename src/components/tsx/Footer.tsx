import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import icons
import '../styling/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://github.com/GabrielPerezCSDev" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="footer-icon" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/gabriel-perez-998602172/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-icon" /> LinkedIn
                </a>
                <a href="mailto:gabrielperez.csdev@gmail.com">
                    <FaEnvelope className="footer-icon" /> Email
                </a>
            </div>
            <p>© {new Date().getFullYear()} Gabriel Perez. All rights reserved.</p>
        </footer>
    );
};

export default Footer;