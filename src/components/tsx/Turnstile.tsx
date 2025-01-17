import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styling/Turnstile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ImageDetail {
    title: string;
    imageURL: string;
    descriptionURL: string;
}

interface TurnstileProps {
    imageDetailArray: ImageDetail[];
}

// Helper function to get technology tags based on project title
const getTechTags = (title: string): string[] => {
    switch (title) {
        case 'ConnectHub':
            return ['C', 'POSIX', 'TCP/IP', 'SQLite'];
        case 'File Wizard':
            return ['Rust', 'Electron', 'File System', 'SQLite'];
        case 'Pokemon Game':
            return ['C++', 'C', 'Data Structures', 'Algorithms'];
        case 'Ascension of Empires (Backend)':
            return ['Spring Boot', 'WebSocket', 'REST API'];
        case 'Starfield Skirmish':
            return ['C++', 'Game Dev', 'OOP'];
        default:
            return [];
    }
};

const Turnstile: React.FC<TurnstileProps> = ({ imageDetailArray }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNavigation = (direction: 'next' | 'prev') => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageDetailArray.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + imageDetailArray.length) % imageDetailArray.length);
        }
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const currentProject = imageDetailArray[currentIndex];
    const techTags = getTechTags(currentProject.title);

    return (
        <div className="turnstile-container">
            <div className="turnstile-content">
                <div className="header-section">
                    <h1 className="main-title">Featured Projects</h1>
                    <p className="subtitle">
                        Explore my latest works in software development and game design
                    </p>
                </div>

                <div className="project-showcase">
                    <button
                        className="nav-button prev"
                        onClick={() => handleNavigation('prev')}
                        aria-label="Previous project"
                    >
                        <ChevronLeft />
                    </button>

                    <div className={`project-card ${isTransitioning ? 'transitioning' : ''}`}>
                        <h2 className="project-title">{currentProject.title}</h2>
                        <div className="image-container">
                            <img
                                src={currentProject.imageURL}
                                alt={currentProject.title}
                                className="project-image"
                            />
                            <div className="image-overlay">
                                <button className="icon-button">
                                    <Github />
                                </button>
                                <button className="icon-button">
                                    <ExternalLink />
                                </button>
                            </div>
                        </div>
                        <div className="project-details">
                            <p className="project-description">
                                {currentProject.descriptionURL}
                            </p>
                            <div className="tech-tags">
                                {techTags.map((tag) => (
                                    <span key={tag} className="tech-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        className="nav-button next"
                        onClick={() => handleNavigation('next')}
                        aria-label="Next project"
                    >
                        <ChevronRight />
                    </button>
                </div>

                <div className="navigation-dots">
                    {imageDetailArray.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Turnstile;
