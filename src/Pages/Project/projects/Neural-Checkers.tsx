import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import neuralCheckers from '../../../assets/images/Featured-Projects/neural-checkers.jpg';

const projectData: ProjectData = {
    title: "Neural Checkers",
    description: "A sophisticated Checkers implementation featuring a custom Monte Carlo Tree Search AI and a from-scratch HTTP server with concurrent game session management.",
    technologies: ["Java", "MCTS AI", "Custom HTTP Server", "Concurrent Programming"],
    githubUrl: "https://github.com/GabrielPerezCSDev/neural-checkers",
    slug: "neural-checkers",
    image: neuralCheckers,
    techStack: {
        backend: [
            "Custom HTTP Server Implementation",
            "Monte Carlo Tree Search Algorithm",
            "Thread-per-user Architecture",
            "RESTful API Design"
        ],
        security: [
            "SSL/HTTPS via Let's Encrypt",
            "Nginx Reverse Proxy",
            "Session Management",
            "Connection ID Authentication"
        ]
    },
    features: [
        {
            title: "Custom HTTP Server",
            description: "Built from scratch in Java with thread-per-user architecture, supporting concurrent game sessions and real-time move processing."
        },
        {
            title: "AI Engine",
            description: "Intelligent opponent using Monte Carlo Tree Search with dynamic difficulty adjustment and multi-threaded simulation capabilities."
        },
        {
            title: "Game Logic",
            description: "Complete implementation of Checkers rules with move validation, king promotion, and multiple jump handling."
        },
        {
            title: "Production Deployment",
            description: "Fully deployed on Google Cloud with HTTPS encryption, custom domain configuration, and Nginx reverse proxy setup."
        }
    ],
    overview: [
        "Neural Checkers is a full-stack implementation of the classic board game featuring an AI opponent powered by Monte Carlo Tree Search (MCTS). At its core is a custom HTTP server built from scratch in Java, implementing a thread-per-user architecture for handling concurrent game sessions.",
        "The system demonstrates advanced server-side programming concepts including thread management, session handling, and real-time game state processing. The AI component utilizes MCTS for intelligent move calculation, with configurable difficulty levels and multi-threaded simulation capabilities.",
        "Deployed on Google Cloud with a complete production setup including HTTPS encryption, custom domain configuration, and Nginx reverse proxy, the project showcases end-to-end system design and deployment expertise."
    ],
    implementationDetails: [
        "The server architecture implements a thread-per-user model, allowing multiple concurrent game sessions while maintaining isolation and state consistency. Each game session manages its own thread context, handling move validation, state updates, and AI calculations independently.",
        "The Monte Carlo Tree Search implementation features dynamic node expansion and backpropagation, with configurable simulation depths for different difficulty levels. The AI engine utilizes multiple threads for parallel game state exploration, optimizing move calculation performance.",
        "Game logic includes comprehensive rule implementation with support for complex scenarios such as multiple jumps, king promotion, and complete move validation. The system maintains game state consistency across concurrent sessions while providing real-time move processing and validation."
    ]
};

const NeuralCheckers: React.FC = () => {
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
                                    <h3>Core Technologies</h3>
                                    <ul>
                                        {projectData.techStack.backend.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {projectData.techStack.security && (
                                <div className="stack-group">
                                    <h3>Security & Deployment</h3>
                                    <ul>
                                        {projectData.techStack.security.map((tech, index) => (
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
            </main>
        </div>
    );
};

export default NeuralCheckers;