// src/Pages/Project/projects/FileWizardHub.tsx
import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import filewizard from '../../../assets/images/Featured-Projects/File-Wizard.png';
const projectData: ProjectData = {
    title: "File Wizard",
    description: "A modern desktop utility that implements data visualization to give the user the ability to see what is happening with their file system and take control.",
    technologies: ["Rust", "React", "Electron", "D3.js"],
    githubUrl: "https://github.com/GabrielPerezCSDev/FileWizard",
    slug: "file-wizard",
    image: filewizard,
    techStack: {
        frontend: [
            "React with Electron",
            "D3.js for Visualizations",
            "React Router Dom",
            "Modern JavaScript (ES6+)"
        ],
        backend: [
            "Rust",
            "Actix Web Framework",
            "Multi-threading (std::thread)",
            "Serde for Serialization"
        ]
    },
    features: [
        {
            title: "File Organization",
            description: "Intuitive graphical visualization of file system using rectangles to display file/folder size."
        },
        {
            title: "Advanced Search",
            description: "Multi-threaded search operations providing rapid results with dynamic filtering capabilities."
        },
        {
            title: "Dynamic Visualization",
            description: "Real-time visual representation of file system structures using D3.js for interactive exploration."
        },
        {
            title: "Metadata Management",
            description: "Comprehensive metadata handling with detailed file information and timestamp tracking."
        }
    ],
    plannedFeatures: [
        "Advanced heuristics for optimized file system exploration",
        "Integrated file deletion capabilities",
        "Customizable user settings interface",
        "Enhanced file details view with content previews"
    ]
};

const FileWizard: React.FC = () => {
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
                <section className="project-overview">
                    <h2>Overview</h2>
                    <p>
                        File Wizard is a modern desktop utility that implements data visualization to give the user the ability to see what is happening with their file system and take control. Built using Rust for the backend and React with Electron for the frontend, it combines high performance with a seamless user experience.
                    </p>
                    <p>
                        The application leverages multi-threading capabilities to perform rapid file system operations, while providing real-time visualizations of directory structures and file metadata. Its architecture emphasizes modularity and scalability, allowing for efficient handling of large file systems.
                    </p>
                    <p>
                        With features like dynamic visualization, advanced search capabilities, and comprehensive metadata management, File Wizard demonstrates sophisticated integration between high-performance backend operations and responsive frontend interactions.
                    </p>
                </section>

                <section className="tech-stack">
                    <h2>Technical Stack</h2>
                    <div className="stack-sections">
                        <div className="stack-group">
                            <h3>Frontend</h3>
                            <ul>
                                {projectData.techStack?.frontend?.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="stack-group">
                            <h3>Backend</h3>
                            <ul>
                                {projectData.techStack?.backend?.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="architecture">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        {projectData.features?.map((feature, index) => (
                            <div key={index} className="feature">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="implementation">
                    <h2>Implementation Details</h2>
                    <div className="implementation-content">
                        <p>
                            The application implements a layered architecture with clear separation between the frontend and backend services. The Rust backend utilizes concurrent programming patterns for efficient file system operations, while the Electron-based frontend provides a responsive and native-like user experience.
                        </p>
                        <p>
                            Communication between layers is handled through a RESTful API, with JSON-formatted data exchange. The system employs advanced heuristics for file system discovery and implements robust error handling throughout the application stack.
                        </p>
                    </div>
                </section>
                
                <section className="future-enhancements">
                    <h2>Planned Enhancements</h2>
                    <ul>
                        {projectData.plannedFeatures?.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default FileWizard;