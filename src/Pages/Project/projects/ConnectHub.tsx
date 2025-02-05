// src/Pages/Project/projects/ConnectHub.tsx
import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import connecthub from '../../../assets/images/Featured-Projects/ConnectHub.jpg';

const projectData: ProjectData = {
    title: "ConnectHub",
    description: "A lightweight multiplayer TCP server that manages multiple user connections through organized socket pools and provides user authentication.",
    technologies: ["C", "POSIX", "TCP/IP", "SQLite"],
    githubUrl: "https://github.com/GabrielPerezCSDev/ConnectHub",
    slug: "connect-hub",
    image: connecthub,
    techStack: {
        backend: [
            "C11 Standard Implementation",
            "POSIX Threads (Pthread)",
            "Epoll Event Library",
            "TCP/IP Networking",
            "GNU Make Build System"
        ],
        security: [
            "Bcrypt Password Hashing",
            "Session-based Authentication",
            "SQLite3 with Prepared Statements",
            "In-memory Session Cache",
            "Rate Limiting and Brute Force Protection"
        ]
    },
    features: [
        {
            title: "Router Architecture",
            description: "Implements a central router that handles initial connections, authentication, and dynamically assigns users to available socket buckets for efficient resource management."
        },
        {
            title: "Socket Pool Management",
            description: "Organized socket buckets system for modular server scaling, with independent socket operations and comprehensive lifecycle management."
        },
        {
            title: "Security Framework",
            description: "Robust authentication system with bcrypt hashing, session management, single-login enforcement, and protection against brute force attacks."
        },
        {
            title: "Concurrent Operations",
            description: "Multi-threaded design using POSIX threads with non-blocking I/O through epoll, ensuring optimal performance under high load conditions."
        }
    ],
    overview: [
        "ConnectHub is a lightweight multiplayer TCP server written in C that implements an innovative socket pool architecture for managing concurrent user connections. The server employs a sophisticated thread-per-socket design with a central router that handles authentication and dynamically assigns users to socket buckets for efficient communication.",
        "The system features comprehensive security measures, including bcrypt password hashing, session-based authentication, and rate limiting, alongside a SQLite database with prepared statements for secure user management. Real-time communication is achieved through non-blocking I/O operations using the epoll event library.",
        "Built with modern C11 standards and POSIX compliance, ConnectHub demonstrates advanced systems programming concepts including thread-safe operations, resource management, and graceful error handling throughout its architecture. The project showcases practical implementation of concurrent programming principles and network security best practices."
    ],
    implementationDetails: [
        "The server architecture centers around a main router component operating on port 8080, handling initial connections and user authentication. Successfully authenticated users are dynamically assigned to available socket buckets, each managing multiple concurrent connections through independent socket operations.",
        "Connection management is optimized using the epoll event library for efficient I/O multiplexing, allowing the server to handle multiple connections without spawning excessive threads. The system implements comprehensive resource management with dynamic memory allocation, bit array bucket tracking, and proper cleanup procedures.",
        "Security is enforced through multiple layers, including IP-based and username-based attempt tracking, exponential backoff for failed authentications, and session key verification. The database implementation uses prepared statements for SQL operations and maintains an in-memory session cache for improved performance."
    ]
};

const ConnectHub: React.FC = () => {
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
                                    <h3>Security & Data</h3>
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

export default ConnectHub;