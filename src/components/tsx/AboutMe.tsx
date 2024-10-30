import React from 'react';
import { Card } from 'react-bootstrap';
import '../styling/AboutMe.css';

const AboutMeText: React.FC = () => {
  return (
    <Card className="about-me-text-container">
      <Card.Body>
        <Card.Title as="h2" className="mb-4">About Me</Card.Title>
        
        <Card.Text>
          With a strong interdisciplinary foundation in Chemical Engineering, Biomedical Engineering, and Computer Science, 
          I am actively seeking full-time software development roles that allow me to tackle complex challenges and innovate. 
          My academic journey at Iowa State University, where I am completing a Bachelor of Science in Computer Science (Fall 2024), 
          has equipped me with the technical expertise and hands-on experience necessary to make a meaningful impact in software development.
        </Card.Text>

        <Card.Text>
          Throughout my career, I have applied my engineering mindset and problem-solving skills to a variety of technical and leadership roles. 
          Whether leading energy optimization projects at Mars-Wrigley Confectionary, where I harnessed the power of MATLAB for analytical insights, 
          or tutoring advanced topics in computer science at Iowa State University, my experiences have been diverse and impactful. 
          I thrive in environments that require collaboration, analytical thinking, and a focus on practical, real-world solutions.
        </Card.Text>

        <Card.Title as="h3" className="mt-4 mb-3">Key Projects:</Card.Title>
        
        <ul>
          <li>
            <strong>File Wizard:</strong> This project involved creating a file management and visualization tool in Rust. 
            The application enables users to explore their file system, retrieve detailed metadata, and visualize file sizes directly from the terminal. 
            Utilizing multithreading, I implemented efficient directory searches, while a built-in logging system tracks errors and system information. 
           This project deepened my understanding of systems programming, concurrent processing, and effective command-line interface design.
          </li>
          <li>
            <strong>Ascension of Empires:</strong> In this project, I designed and implemented a scalable backend architecture using 
            Java, Spring Boot, MySQL, and Docker. My work involved managing database schemas, optimizing API endpoints, and deploying containers for seamless integration 
            with the frontend. This experience sharpened my expertise in microservices, software engineering principles, and team-driven development.
          </li>
          <li>
            <strong>StarField Skirmish:</strong> In this space-themed shooter game, I developed dynamic game mechanics and alien ship generation algorithms. 
            I focused on ensuring smooth user interaction and responsive controls, creating a fully immersive experience. This project strengthened my knowledge of game 
            development, object-oriented programming, and real-time system design.
          </li>
          <li>
            <strong>Pokémon Game:</strong> This project involved building a complex simulation system using C and C++. I integrated large datasets into a robust game engine, 
            featuring random map generation on a 400x400 grid and a comprehensive Pokémon database. It tested my ability to manage memory, implement algorithms, and work with 
            low-level programming constructs to optimize performance.
          </li>
        </ul>
        
        <Card.Text className="mt-4">
          I bring a unique perspective to software development, blending my engineering background with a passion for cutting-edge technology. 
          I am eager to contribute to projects that push boundaries and offer opportunities for continuous learning and growth. As I move forward 
          in my career, I am particularly interested in roles that allow me to work on innovative solutions, whether in web development, systems programming, 
          or data-driven applications.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutMeText;

