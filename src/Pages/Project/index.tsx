// src/Pages/Project/index.tsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ConnectHub from './projects/ConnectHub';
import FileWizard from './projects/FileWizard'
import './ProjectDetail.css';

// Define the valid project components
const projectComponents: Record<string, React.FC> = {
    'connect-hub': ConnectHub,
    'file-wizard': FileWizard,
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