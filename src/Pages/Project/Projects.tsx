// Projects.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import './Projects.css';
import starfield from '../../assets/images/Featured-Projects/Starfield.jpg'
import pokemon from '../../assets/images/Featured-Projects/Pokemon.jpg';
import empires from '../../assets/images/Featured-Projects/Empires.jpg';
import filewizard from '../../assets/images/Featured-Projects/File-Wizard.png';
import logo from '../../assets/images/Featured-Projects/logo.png';
import connecthub from '../../assets/images/Featured-Projects/ConnectHub.jpg';
import neuralCheckers from '../../assets/images/Featured-Projects/neural-checkers.jpg';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  externalUrl?: string;
  slug: string;  // For routing
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  externalUrl,
  slug
}) => {
  const navigate = useNavigate();

  return (
    <div className="main-project-card" onClick={() => navigate(`/Portfolio/projects/${slug}`)}>
      <div className="main-project-image">
        <img src={image} alt={title} />
        <div className="main-project-links">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Github />
          </a>
          {externalUrl && (
            <a 
              href={externalUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink />
            </a>
          )}
        </div>
      </div>
      <div className="main-project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="main-project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="view-more">
          View Details <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "File Wizard",
      description: "A Rust-powered file management tool with multithreading for high-performance directory scanning, metadata extraction, and structured visualization.",
      technologies: ["Rust", "CLI", "Multi-threading"],
      image: filewizard,
      githubUrl: "https://github.com/GabrielPerezCSDev/filewizard",
      slug: "file-wizard"
    },
    {
      title: "ConnectHub",
      description: "A lightweight multiplayer TCP server in C featuring organized socket pools, POSIX thread management, and epoll-based I/O multiplexing. Implements secure user authentication, rate limiting, and real-time communication.",
      technologies: ["C", "POSIX", "TCP/IP", "SQLite"],
      image: connecthub,
      githubUrl: "https://github.com/GabrielPerezCSDev/ConnectHub",
      slug: "connect-hub"
    },
    {
      title: "Neural Checkers",
      description: "A sophisticated Checkers AI featuring Monte Carlo Tree Search and a custom HTTP server built from scratch, handling concurrent game sessions with thread-per-user architecture. Try the live demo in the Neural Checkers tab to challenge the AI, powered by concurrent game sessions and real-time move processing.",
      technologies: ["Java", "MCTS AI", "Custom HTTP Server", "Concurrent Programming"],
      image: neuralCheckers,
      githubUrl: "https://github.com/GabrielPerezCSDev/neural-checkers",
      slug: "neural-checkers"
    },
    {
      title: "Ascension of Empires",
      description: "A multiplayer strategy game backend with real-time WebSocket communication, dynamic game board generation, and comprehensive resource management.",
      technologies: ["Spring Boot", "WebSocket", "MySQL", "Docker"],
      image: empires,
      githubUrl: "https://github.com/GabrielPerezCSDev/Ascension-of-Empires",
      slug: "ascension-of-empires"
    },
    {
      title: "Developer Portfolio",
      description: "A modern, console-themed personal portfolio website built with React and TypeScript. Features animated components, responsive design, and interactive elements.",
      technologies: ["React", "TypeScript", "CSS3"],
      image: logo,  // You'll need to add this
      githubUrl: "https://github.com/GabrielPerezCSDev/Portfolio",
      slug: "portfolio"
    },
    {
      title: "StarField Skirmish",
      description: "A space-themed combat game featuring dynamic difficulty progression, level-scaled enemy generation, and real-time mechanics.",
      technologies: ["C++", "Game Dev", "OOP"],
      image: starfield,
      githubUrl: "https://github.com/GabrielPerezCSDev/starfield-skirmish",
      slug: "starfield-skirmish"
    },
    {
      title: "Pokémon Game",
      description: "A complex simulation system with procedurally generated maps, custom pathfinding algorithms, and dynamic difficulty scaling.",
      technologies: ["C++", "Data Structures", "Algorithms"],
      image: pokemon,
      githubUrl: "https://github.com/GabrielPerezCSDev/pokemon-game",
      slug: "pokemon-game"
    }
  ];

  return (
    <div className="main-projects-container">
      <div className="main-projects-heade">
      </div>
      <div className="main-projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;