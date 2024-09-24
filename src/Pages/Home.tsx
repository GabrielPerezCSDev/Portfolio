import React from 'react';
import Turnstile from '../components/tsx/Turnstile';
import starfield from '../assets/images/Featured-Projects/Starfield.jpg';
import pokemon from '../assets/images/Featured-Projects/Pokemon.jpg';
import empires from '../assets/images/Featured-Projects/Empires.jpg';

const images = [
    {
        title: 'Starfield Skirmish',
        imageURL: starfield,
        descriptionURL: 'A space-themed shooter where players battle alien ships and progressively increase difficulty levels. The game features dynamic alien ship management, level scaling, and user-friendly controls for an immersive space combat experience.'
    },
    {
        title: 'Pokemon Game',
        imageURL: pokemon,
        descriptionURL: 'A Pokémon-inspired game with a revamped battle system, new battle interface, dedicated screens for Pokémon battles, and support for wild Pokémon encounters. This update also includes enhanced move selection and interactive battle features.'
    },
    {
        title: 'Ascension of Empires (Backend)',
        imageURL: empires,
        descriptionURL: 'A strategy-based backend for a multiplayer game where players manage nations, expand territories, and battle for dominance. Features include resource management, player-vs-player interactions, and server-based game mechanics.'
    }
]
const Home: React.FC = () => {
    return (
        <Turnstile imageDetailArray={images} />
        
    )
}

export default Home;