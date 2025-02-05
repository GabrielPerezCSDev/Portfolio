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
        descriptionURL: 'A cross-platform file management and visualization tool with an Electron-based UI and a Rust-powered backend. Features multithreading for efficient directory traversal and metadata retrieval.'
    },
    {
        title: 'ConnectHub',
        imageURL: connecthub,
        descriptionURL: 'A lightweight multiplayer TCP server in C featuring socket bucket architecture for efficient connection management. Implements POSIX threads for concurrency, epoll-based I/O multiplexing for non-blocking operations, and a comprehensive security system with bcrypt hashing, rate limiting, and session management. Uses SQLite with prepared statements for secure user data management and supports real-time communication between users.'
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
];

const Home: React.FC = () => {
    return (
        <Turnstile imageDetailArray={images} />
    );
};

export default Home;