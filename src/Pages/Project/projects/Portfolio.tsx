import React from 'react';
import { Github } from 'lucide-react';
import { ProjectData } from '../types';
import logo from '../../../assets/images/Featured-Projects/logo.png';

const projectData: ProjectData = {
   title: "Developer Portfolio",
   description: "A modern, console-themed personal portfolio website built with React and TypeScript. Features animated components, responsive design, and interactive elements.",
   technologies: ["React", "TypeScript", "CSS3"],
   githubUrl: "https://github.com/GabrielPerezCSDev/Portfolio",
   slug: "portfolio",
   image: logo,
   overview: [
       "This portfolio website combines a retro console aesthetic with modern web technologies to create an engaging showcase of projects and skills. The design emphasizes readability and usability while maintaining a distinctive tech-oriented theme.",
       "Built with React and TypeScript, the portfolio implements responsive design principles and interactive elements throughout. It features smooth animations, dynamic project showcases, and comprehensive project detail pages.",
       "The project demonstrates modern web development practices including type-safe programming, component reusability, and modular architecture, all while maintaining a cohesive and engaging user experience."
   ],
   techStack: {
       frontend: [
           "React with TypeScript",
           "React Router Dom",
           "Lucide React Icons",
           "Modern CSS3"
       ],
       backend: [
           "GitHub Pages",
           "CI/CD Pipeline",
           "npm Package Management",
           "Version Control"
       ]
   },
   features: [
       {
           title: "Interactive Design",
           description: "Console-inspired color scheme with green-on-black theme, featuring responsive layouts and smooth animations."
       },
       {
           title: "Project Showcase",
           description: "Comprehensive project displays with detailed overviews, technical breakdowns, and direct GitHub integration."
       },
       {
           title: "Component Architecture",
           description: "Modular, reusable components with TypeScript interfaces ensuring type safety and maintainability."
       },
       {
           title: "Responsive Layout",
           description: "Fully responsive design adapting to all screen sizes while maintaining functionality and aesthetics."
       }
   ],
   implementationDetails: [
       "The portfolio is built using a modular component architecture with TypeScript for enhanced type safety and code reliability. Each project showcase implements consistent interfaces while maintaining unique content presentation.",
       "The styling system utilizes modern CSS features and follows a systematic approach to maintaining the console-inspired theme throughout the site. Interactive elements and animations are carefully implemented to enhance user experience without compromising performance."
   ],
   plannedFeatures: [
       "Dark/Light theme toggle",
       "Interactive console commands",
       "Enhanced animation effects",
       "Blog section for technical writing",
       "Project filtering and search"
   ]
};

const PortfolioProject: React.FC = () => {
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
                                   <h3>Frontend</h3>
                                   <ul>
                                       {projectData.techStack.frontend.map((tech, index) => (
                                           <li key={index}>{tech}</li>
                                       ))}
                                   </ul>
                               </div>
                           )}
                           {projectData.techStack.backend && (
                               <div className="stack-group">
                                   <h3>Infrastructure</h3>
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
           </main>
       </div>
   );
};

export default PortfolioProject;