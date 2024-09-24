import React from 'react';
import './About.css'; // Styling for the overall About component
import aboutMeImage from '../assets/images/about-me/work_media_picture.jpg';
import AboutMeText from '../components/tsx/AboutMe';
const About: React.FC = () => {
    return (
      <div className="about-section">
        <img src={aboutMeImage} alt="About Me" className="about-me-image" />
        <AboutMeText />
      </div>
    );
  };
  
  export default About;