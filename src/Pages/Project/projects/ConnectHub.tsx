// src/Pages/Project/projects/ConnectHub.tsx
import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import connecthub from '../../../assets/images/Featured-Projects/ConnectHub.jpg';

const projectData: ProjectData = {
    title: "ConnectHub",
    description: "A high-performance TCP server built in C that manages concurrent user connections through innovative socket pools.",
    technologies: ["C", "POSIX", "TCP/IP", "SQLite"],
    githubUrl: "https://github.com/GabrielPerezCSDev/ConnectHub",
    slug: "connect-hub",
    image: connecthub,
    techStack: {
        backend: [
            "C11 Standard Implementation",
            "POSIX Threads for Concurrency",
            "Epoll Event Library",
            "TCP/IP Networking"
        ],
        security: [
            "Bcrypt Password Hashing",
            "Session-based Authentication",
            "SQLite3 Database",
            "In-memory Session Cache"
        ]
    },
    features: [
        {
            title: "Socket Pool Management",
            description: "Implements a scalable architecture using socket buckets for efficient connection management and resource allocation."
        },
        {
            title: "Authentication System",
            description: "Secure user authentication with session management, single-login enforcement, and encrypted password storage."
        },
        {
            title: "Concurrent Operations",
            description: "Multi-threaded design with thread-safe operations and non-blocking I/O for optimal performance."
        },
        {
            title: "Resource Management",
            description: "Dynamic memory allocation with comprehensive cleanup and monitoring of system resources."
        }
    ],
    overview: [
        "ConnectHub is a high-performance TCP server written in C that implements an innovative socket pool architecture for managing concurrent user connections. The server employs a sophisticated multi-threaded design with a central router that handles authentication and dynamically assigns users to socket buckets for efficient communication.",
        "The system features robust security measures, including bcrypt password hashing and session-based authentication, alongside a SQLite database for persistent user management. Real-time communication is achieved through non-blocking I/O operations using the epoll event library, ensuring optimal performance even under high load conditions.",
        "Built with modern C11 standards and POSIX compliance, ConnectHub demonstrates advanced systems programming concepts including thread-safe operations, resource management, and graceful error handling throughout its architecture."
    ],
    implementationDetails: [
        "The server architecture is built around a main router component operating on a constant value for the port, which handles initial connections and user authentication. Successfully authenticated users are dynamically assigned to available socket buckets, each managing multiple concurrent connections through independent socket operations.",
        "The system utilizes the epoll event library for efficient I/O multiplexing, allowing it to handle multiple connections without spawning excessive threads. This approach, combined with careful resource management and proper cleanup procedures, ensures stable performance and prevents memory leaks."
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