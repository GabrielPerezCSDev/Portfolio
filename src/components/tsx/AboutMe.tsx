import React from 'react';
import '../styling/AboutMe.css';
import { Terminal, Code, Database } from 'lucide-react';


const projects = [
    {
        title: "File Wizard",
        technologies: ["Rust", "CLI", "Multi-threading"],
        description: "A file management and visualization tool with features including:",
        bulletPoints: [
            "Directory exploration and metadata retrieval",
            "Multi-threaded search operations for improved performance",
            "Built-in logging system for error tracking",
            "Terminal-based user interface with interactive navigation"
        ]
    },
    {
        title: "ConnectHub",
        technologies: ["C", "POSIX", "TCP/IP", "SQLite"],
        description: "A high-performance TCP server architecture featuring:",
        bulletPoints: [
            "User authentication with bcrypt and session-based security",
            "Scalable socket pool management with epoll event handling",
            "Multi-threaded architecture with thread-safe operations",
            "In-memory caching and SQLite database integration"
        ]
    },
    {
        title: "Ascension of Empires",
        technologies: ["Spring Boot", "WebSocket", "MySQL", "Docker"],
        description: "A multiplayer strategy game backend featuring:",
        bulletPoints: [
            "Real-time WebSocket communication for live game updates",
            "Dynamic game board generation and scaling",
            "Server-specific chat systems and user authentication",
            "Resource management and in-game economy system"
        ]
    },
    {
        title: "Neural Checkers",
        technologies: ["Java", "MCTS AI", "Custom HTTP Server", "Concurrent Programming"],
        description: "A fully playable Checkers game with custom backend featuring:",
        bulletPoints: [
            "Monte Carlo Tree Search AI with configurable difficulty levels",
            "Custom HTTP server with thread-per-user architecture",
            "Concurrent game session management and real-time move processing",
            "Full production deployment with HTTPS and reverse proxy"
        ]
    }
];


const SkillCard: React.FC<{ title: string; text: string; icon: any }> = ({ title, text, icon: Icon }) => (
    <div className="skill-card">
        <Icon className="skill-icon" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
);

const AboutMeText: React.FC = () => {
    const skills = [
        {
            icon: Terminal,
            title: "Systems Programming",
            text: "Experienced in C, Rust, and C++ for building efficient, low-level system applications"
        },
        {
            icon: Code,
            title: "Full Stack Development",
            text: "Proficient in Spring Boot, React, and modern web technologies"
        },
        {
            icon: Database,
            title: "Database & Architecture",
            text: "Skilled in MySQL, SQLite, microservices, and scalable system design"
        }
    ];

    return (
        <div className="about-me-content">
            <div className="about-text">
                <h2>About Me</h2>
                <p>
                    With a strong interdisciplinary background in Computer Science, Biomedical Engineering, and Chemical Engineering,
                    I am pursuing full-time software development roles where I can solve complex problems and drive innovation.
                </p>
                <p>
                    I recently completed a Bachelor of Science in Computer Science at Iowa State University (Fall 2024),
                    gaining both deep technical expertise and hands-on experience in software development.
                </p>
            </div>

            <div className="skills-section">
                <h2>Technical Expertise</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <div className="tech-tags">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <p className="project-description">{project.description}</p>
                        <ul className="project-bullets">
                            {project.bulletPoints.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutMeText;