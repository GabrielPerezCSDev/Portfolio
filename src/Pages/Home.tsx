import React from 'react';
import Turnstile from '../components/tsx/Turnstile';
import starfield from '../assets/images/Featured-Projects/Starfield.jpg';
import pokemon from '../assets/images/Featured-Projects/Pokemon.jpg';
import empires from '../assets/images/Featured-Projects/Empires.jpg';

const images = [
    {
        title: 'Starfield Skirmish',
        imageURL: starfield,
        descriptionURL: 'This update introduces significant enhancements and bug fixes to the battle system. Key changes include the implementation of a new battle interface (io_battle), a dedicated screen for Pokémon battles (io_pokemon_battle_screen), and an interface for selecting battle moves (io_battle_moves). Additionally, the system now supports wild Pokémon encounters through the io_wild_battle function.'
    },
    {
        title: 'Pokemon Game',
        imageURL: pokemon,
        descriptionURL: 'This update introduces significant enhancements and bug fixes to the battle system. Key changes include the implementation of a new battle interface (io_battle), a dedicated screen for Pokémon battles (io_pokemon_battle_screen), and an interface for selecting battle moves (io_battle_moves). Additionally, the system now supports wild Pokémon encounters through the io_wild_battle function.'
    },
    {
        title: 'Empires (Backend)',
        imageURL: empires,
        descriptionURL: 'This update introduces significant enhancements and bug fixes to the battle system. Key changes include the implementation of a new battle interface (io_battle), a dedicated screen for Pokémon battles (io_pokemon_battle_screen), and an interface for selecting battle moves (io_battle_moves). Additionally, the system now supports wild Pokémon encounters through the io_wild_battle function.'
    }
]
const Home: React.FC = () => {
    return (
        <Turnstile imageDetailArray={images} />
        
    )
}

export default Home;