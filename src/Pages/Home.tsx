import React from 'react';
import Turnstile from '../components/tsx/Turnstile';
import starfield from '../assets/images/Featured-Projects/starfield-skirmish.png';
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
        title: 'Pokemon Game',
        imageURL: pokemon,
        descriptionURL: 'An immersive Pokemon simulation featuring procedurally generated maps, advanced pathfinding with Dijkstra\'s algorithm, and dynamic difficulty scaling. Built with C++, it includes custom heap data structures, CSV parsing for game data, and over 400 unique maps that increase in difficulty based on Manhattan distance from origin.'
    },
    {
        title: 'Ascension of Empires (Backend)',
        imageURL: empires,
        descriptionURL: 'A Spring Boot backend for a multiplayer strategy game featuring real-time WebSocket communication, dynamic game board generation, and comprehensive resource management. Includes user authentication, server-specific chat systems, in-game economy with shops, and scalable game sessions supporting multiple concurrent players.'
    },
    {
        title: 'Starfield Skirmish',
        imageURL: starfield,
        descriptionURL: 'A space-themed shooter with dynamic difficulty progression, featuring level-scaled enemy ships and real-time combat mechanics. Built with responsive controls and an engaging UI, it includes features like dynamic alien ship management, progressive difficulty scaling, and real-time game state tracking.'
    }
];

const Home: React.FC = () => {
    return (
        <Turnstile imageDetailArray={images} />
    );
};

export default Home;