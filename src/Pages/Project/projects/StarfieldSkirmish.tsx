import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import starfield from '../../../assets/images/Featured-Projects/Starfield.jpg';

const projectData: ProjectData = {
    title: "StarField Skirmish",
    description: "A dynamic space combat simulator featuring progressive difficulty scaling, real-time combat mechanics, and dynamic enemy generation.",
    technologies: ["C++", "Game Dev", "OOP"],
    githubUrl: "https://github.com/GabrielPerezCSDev/starfield-skirmish",
    slug: "starfield-skirmish",
    image: starfield,
    overview: [
        "StarField Skirmish is a dynamic space combat simulator that challenges players to navigate through an increasingly difficult cosmic battlefield. The game combines sophisticated combat mechanics with progressive difficulty scaling to create an engaging space warfare experience.",
        "Players face evolving challenges through dynamic difficulty adjustments, where enemy patterns and behaviors become progressively more complex as they advance. The real-time combat system features responsive controls and comprehensive resource management.",
        "Built using C++ and object-oriented design principles, the game showcases advanced game development concepts including custom physics, intelligent enemy AI, and optimized performance systems."
    ],
    techStack: {
        frontend: [
            "Custom C++ Game Engine",
            "Object-Oriented Architecture",
            "Event-Driven Input System",
            "Entity Component System"
        ],
        backend: [
            "Physics Engine",
            "AI System",
            "Resource Management",
            "Performance Optimization"
        ]
    },
    features: [
        {
            title: "Advanced Combat System",
            description: "Real-time projectile mechanics with precise collision detection, multiple enemy types, and a dynamic weapon system with upgrades and special abilities."
        },
        {
            title: "Intelligent Enemy AI",
            description: "Sophisticated enemy generation with level-based scaling, dynamic movement patterns, and adaptive difficulty adjustment based on player performance."
        },
        {
            title: "Progressive Game System",
            description: "Experience-based leveling system featuring unlockable abilities, ship upgrades, and a score multiplier system for skilled play."
        },
        {
            title: "Optimized Performance",
            description: "Efficient collision detection using spatial partitioning, object pooling for projectiles, and optimized rendering pipeline for smooth gameplay."
        }
    ],
    implementationDetails: [
        "The game is built on a component-based architecture featuring a core game loop with fixed update timing and event-driven input handling. This foundation ensures responsive gameplay while managing complex game states and object interactions.",
        "Performance optimization is achieved through sophisticated systems including spatial partitioning for collision detection, object pooling for projectiles and particles, and an optimized rendering pipeline, ensuring smooth gameplay even during intense combat sequences."
    ],
    plannedFeatures: [
        "Additional enemy types with unique behaviors",
        "Power-up system with temporary abilities",
        "Local multiplayer support",
        "Enhanced visual effects and particle systems"
    ]
};

const StarfieldSkirmish: React.FC = () => {
    return (
        <div className="project-detail-container">
            <header className="project-detail-header">
                <h1>{projectData.title}</h1>
                <div className="project-links">
                    <a 
                        href={projectData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <Github />
                        View Source
                    </a>
                </div>
            </header>

            <main className="project-content">
                {projectData.overview && (
                    <section className="project-overview">
                        <h2>Overview</h2>
                        {projectData.overview.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </section>
                )}

                {projectData.techStack && (
                    <section className="tech-stack">
                        <h2>Technical Stack</h2>
                        <div className="stack-sections">
                            {projectData.techStack.frontend && (
                                <div className="stack-group">
                                    <h3>Core Technologies</h3>
                                    <ul>
                                        {projectData.techStack.frontend.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {projectData.techStack.backend && (
                                <div className="stack-group">
                                    <h3>Game Systems</h3>
                                    <ul>
                                        {projectData.techStack.backend.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {projectData.features && (
                    <section className="architecture">
                        <h2>Key Features</h2>
                        <div className="features-grid">
                            {projectData.features.map((feature, index) => (
                                <div key={index} className="feature">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {projectData.implementationDetails && (
                    <section className="implementation">
                        <h2>Implementation Details</h2>
                        <div className="implementation-content">
                            {projectData.implementationDetails.map((detail, index) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                    </section>
                )}
                
                {projectData.plannedFeatures && (
                    <section className="future-enhancements">
                        <h2>Planned Enhancements</h2>
                        <ul>
                            {projectData.plannedFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </div>
    );
};

export default StarfieldSkirmish;