import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import pokemon from '../../../assets/images/Featured-Projects/Pokemon.jpg';

const projectData: ProjectData = {
    title: "Pokémon Simulation",
    description: "A complex simulation system with procedurally generated maps, custom pathfinding algorithms, and dynamic difficulty scaling.",
    technologies: ["C/C++", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/GabrielPerezCSDev/pokemon-game",
    slug: "pokemon-game",
    image: pokemon,
    overview: [
        "The Pokémon Simulation Project is a sophisticated game environment that procedurally generates over 400 unique maps, implementing complex algorithms for world creation and character interaction. Built using C/C++, it demonstrates advanced programming concepts through custom data structures and efficient algorithms.",
        "The simulation features dynamic difficulty scaling based on Manhattan distance from the origin, with maps becoming progressively more challenging as players explore further from their starting point. Character movement is managed through custom heap structures and pathfinding algorithms.",
        "This project showcases the integration of various systems including procedural generation, pathfinding algorithms, and battle mechanics, all optimized through careful implementation of data structures and memory management in C/C++."
    ],
    techStack: {
        frontend: [
            "Custom C/C++ Game Engine",
            "Character Movement System",
            "Battle Interface",
            "Map Visualization"
        ],
        backend: [
            "Custom Heap Implementation",
            "Dijkstra's Pathfinding",
            "CSV Data Parser",
            "Procedural Generation"
        ]
    },
    features: [
        {
            title: "World Generation",
            description: "Sophisticated procedural generation system creating over 400 unique maps, with difficulty scaling based on Manhattan distance from origin."
        },
        {
            title: "Advanced Pathfinding",
            description: "Implementation of Dijkstra's algorithm for intelligent NPC movement, with custom heap structures for efficient path calculation."
        },
        {
            title: "Character System",
            description: "Multiple NPC types (Hikers, Rivals, Swimmers) each with unique movement patterns and behaviors, managed through custom data structures."
        },
        {
            title: "Battle Mechanics",
            description: "Comprehensive battle system integrating character positions, type advantages, and move sets, all managed through efficient data processing."
        }
    ],
    implementationDetails: [
        "The core of the simulation is built upon custom data structures, including a specialized heap implementation in C for managing character movements and battle priority. This foundation ensures efficient operation of complex game mechanics while maintaining performance.",
        "Map generation utilizes sophisticated algorithms to create unique, interconnected environments. The system implements persistent storage of generated maps while maintaining the ability to create new ones as players explore, all while scaling difficulty based on distance metrics."
    ],
    plannedFeatures: [
        "Enhanced battle animations and visual feedback",
        "Additional NPC types with unique behaviors",
        "Extended move sets and battle mechanics",
        "Improved map generation algorithms",
        "Save/Load functionality for game states"
    ]
};

const PokemonGame: React.FC = () => {
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
                                    <h3>Game Systems</h3>
                                    <ul>
                                        {projectData.techStack.frontend.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
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

export default PokemonGame;