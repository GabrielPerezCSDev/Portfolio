import React from 'react';
import './About.css';
import aboutMeImage from '../assets/images/about-me/work_media_picture.jpg';
import AboutMeText from '../components/tsx/AboutMe';
import { Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <div className="profile-section">
                    <div className="image-container">
                        <img src={aboutMeImage} alt="Gabriel Perez" className="profile-image" />
                    </div>
                    <h1>Gabriel Perez</h1>
                    <p className="title">Software Developer</p>
                    <div className="social-links">
                        <a href="https://github.com/GabrielPerezCSDev" className="social-link">
                            <Github />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-perez-998602172/" className="social-link">
                            <Linkedin />
                        </a>
                        <a href="mailto:gabrielperez.csdev@gmail.com" className="social-link">
                            <Mail />
                        </a>
                    </div>
                </div>
            </div>
            <div className="content-section">
                <AboutMeText />
            </div>
        </div>
    );
};

export default About;