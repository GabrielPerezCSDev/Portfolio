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
      title: "StarField Skirmish",
      technologies: ["C++", "OOP", "Game Development"],
      description: "A space combat game implementing:",
      bulletPoints: [
          "Dynamic difficulty progression system",
          "Level-scaled enemy ship generation",
          "Real-time combat mechanics and controls",
          "Progressive game state tracking"
      ]
  },
  {
      title: "Pokémon Game",
      technologies: ["C++", "Data Structures", "Algorithms"],
      description: "A complex simulation system featuring:",
      bulletPoints: [
          "Procedurally generated maps using custom algorithms",
          "Advanced pathfinding with Dijkstra's algorithm",
          "Custom heap data structures for game mechanics",
          "Dynamic difficulty scaling based on player position"
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
            text: "Experienced in Rust and C++ for building efficient, high-performance applications"
        },
        {
            icon: Code,
            title: "Full Stack Development",
            text: "Proficient in Spring Boot, React, and modern web technologies"
        },
        {
            icon: Database,
            title: "Database & Architecture",
            text: "Skilled in MySQL, microservices, and scalable system design"
        }
    ];

    return (
        <div className="about-me-content">
            <div className="about-text">
                <h2>About Me</h2>
                <p>
                    With a strong interdisciplinary foundation in Chemical Engineering, Biomedical Engineering, and Computer Science, 
                    I am actively seeking full-time software development roles that allow me to tackle complex challenges and innovate.
                </p>
                <p>
                    My journey at Iowa State University, where I am completing a Bachelor of Science in Computer Science (Fall 2024), 
                    has equipped me with both technical expertise and practical experience in software development.
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
