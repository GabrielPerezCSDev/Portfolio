import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import empires from '../../../assets/images/Featured-Projects/Empires.jpg';

const projectData: ProjectData = {
    title: "Ascension of Empires",
    description: "A multiplayer strategy game backend built with Spring Boot, featuring real-time WebSocket communication, dynamic game boards, and comprehensive resource management.",
    technologies: ["Spring Boot", "WebSocket", "MySQL", "Docker"],
    githubUrl: "https://github.com/GabrielPerezCSDev/Ascension-of-Empires",
    slug: "ascension-empires",
    image: empires,
    overview: [
        "Ascension of Empires is a sophisticated backend system powering a multiplayer strategy game, built using Spring Boot. The system manages complex game mechanics including dynamic board generation, real-time player interactions, and comprehensive resource management.",
        "The application implements a robust WebSocket architecture for real-time communication, enabling features like server-specific chat and instant game state updates. The system handles player management, game sessions, and in-game transactions through a well-structured API.",
        "With a focus on scalability and maintainability, the backend demonstrates advanced Spring Boot concepts including session management, WebSocket integration, and RESTful API design, while supporting features like dynamic game board scaling and real-time multiplayer interactions."
    ],
    techStack: {
        backend: [
            "Spring Boot Framework",
            "WebSocket for Real-time Communication",
            "REST API Architecture",
            "MySQL Database"
        ],
        infrastructure: [
            "Docker Containerization",
            "Maven Build System",
            "Swagger API Documentation",
            "Session Management"
        ]
    },
    features: [
        {
            title: "Player Management",
            description: "Comprehensive user system with authentication, profiles, and session handling for multiplayer coordination."
        },
        {
            title: "Dynamic Game Boards",
            description: "Scalable board generation that adjusts based on player count, with strategic resource placement and territory management."
        },
        {
            title: "Real-time Communication",
            description: "WebSocket integration enabling instant updates, server-specific chat, and live game state synchronization."
        },
        {
            title: "Resource System",
            description: "Complex resource management including dynamic allocation, in-game economy, and item shop functionality."
        }
    ],
    implementationDetails: [
        "The system is architected around multiple interconnected modules including board management, player interactions, and resource handling. Each module is designed with clear responsibilities and interfaces, ensuring maintainability and scalability.",
        "Real-time functionality is implemented through WebSocket connections, handling both chat communications and game state updates. The application employs sophisticated session management and user authentication to maintain game integrity."
    ],
    plannedFeatures: [
        "Enhanced multiplayer matchmaking system",
        "Advanced AI opponents for single-player mode",
        "Extended game board customization options",
        "Improved resource generation algorithms"
    ]
};

const AscensionOfEmpires: React.FC = () => {
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
                            {projectData.techStack.backend && (
                                <div className="stack-group">
                                    <h3>Backend Technologies</h3>
                                    <ul>
                                        {projectData.techStack.backend.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {projectData.techStack.infrastructure && (
                                <div className="stack-group">
                                    <h3>Infrastructure</h3>
                                    <ul>
                                        {projectData.techStack.infrastructure.map((tech, index) => (
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

export default AscensionOfEmpires;