import React from 'react';
import Turnstile from '../components/tsx/Turnstile';
import connecthub from '../assets/images/Featured-Projects/ConnectHub.jpg';
import neuralCheckers from '../assets/images/Featured-Projects/neural-checkers.jpg';
import pokemon from '../assets/images/Featured-Projects/Pokemon.jpg';
import empires from '../assets/images/Featured-Projects/Empires.jpg';
import filewizard from '../assets/images/Featured-Projects/File-Wizard.png';
// Define the array of project details
const images = [
    {
        title: 'File Wizard',
        imageURL: filewizard,
        descriptionURL: 'A file visualization and management tool that allows users to explore directories, retrieve file metadata, and manage files with a text-based UI. Built in Rust, it leverages multithreading for efficient directory searches and includes a logging system for error tracking.'
    },
    {
        title: 'ConnectHub',
        imageURL: connecthub,
        descriptionURL: 'A high-performance TCP server built in C that manages concurrent user connections through innovative socket pools. Features include bcrypt-secured authentication, session management, and a scalable architecture using POSIX threads and epoll for non-blocking I/O. Integrates SQLite for persistent user data and includes real-time communication between connected users.'
    },
    {
        title: 'Neural Checkers',
        imageURL: neuralCheckers,
        descriptionURL: 'A high-performance Checkers implementation featuring a custom-built HTTP server in Java with thread-per-user architecture for concurrent game sessions. The AI opponent utilizes Monte Carlo Tree Search with multi-threaded simulation capabilities, while the production deployment includes HTTPS encryption and Nginx reverse proxy configuration on Google Cloud. Try the live demo in the Neural Checkers tab to challenge the AI, powered by concurrent game sessions and real-time move processing.'
    },
    {
        title: 'Ascension of Empires (Backend)',
        imageURL: empires,
        descriptionURL: 'A Spring Boot backend for a multiplayer strategy game featuring real-time WebSocket communication, dynamic game board generation, and comprehensive resource management. Includes user authentication, server-specific chat systems, in-game economy with shops, and scalable game sessions supporting multiple concurrent players.'
    },
    {
        title: 'Pokemon Game',
        imageURL: pokemon,
        descriptionURL: 'An immersive Pokemon simulation featuring procedurally generated maps, advanced pathfinding with Dijkstra\'s algorithm, and dynamic difficulty scaling. Built with C++, it includes custom heap data structures, CSV parsing for game data, and over 400 unique maps that increase in difficulty based on Manhattan distance from origin.'
    }
];

const Home: React.FC = () => {
    return (
        <Turnstile imageDetailArray={images} />
    );
};

export default Home;