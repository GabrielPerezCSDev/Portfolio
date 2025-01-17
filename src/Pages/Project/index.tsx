// src/Pages/Project/index.tsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ConnectHub from './projects/ConnectHub';
import FileWizard from './projects/FileWizard'
import AscensionOfEmpires from './projects/AscencionOfEmpires'
import StarfieldSkirmish from './projects/StarfieldSkirmish';
import PokemonGame from './projects/PokemonSimulation';
import './ProjectDetail.css';


// Define the valid project components
const projectComponents: Record<string, React.FC> = {
    'connect-hub': ConnectHub,
    'file-wizard': FileWizard,
    'ascension-of-empires': AscensionOfEmpires,
    'starfield-skirmish': StarfieldSkirmish,
    'pokemon-game': PokemonGame,
    // Additional projects will be added here
};

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    
    // Check if the slug is valid and redirect if not
    if (!slug || !(slug in projectComponents)) {
        return <Navigate to="/projects" replace />;
    }

    const ProjectComponent = projectComponents[slug];
    return <ProjectComponent />;
};

export default ProjectDetail;