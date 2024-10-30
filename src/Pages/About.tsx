import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutMeImage from '../assets/images/about-me/work_media_picture.jpg';
import AboutMeText from '../components/tsx/AboutMe';

const About: React.FC = () => {
    return (
        <div className="about-section container">
            <div className="row align-items-start">
                {/* Image Column */}
                <div className="col-md-4 d-flex justify-content-center mb-4">
                    <img src={aboutMeImage} alt="About Me" className="about-me-image" />
                </div>
                {/* Text Column */}
                <div className="col-md-8">
                    <AboutMeText />
                </div>
            </div>
        </div>
    );
};

export default About;
