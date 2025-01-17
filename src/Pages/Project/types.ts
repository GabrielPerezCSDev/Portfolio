
// src/Pages/Project/types.ts
// src/Pages/Project/types.ts
export interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    slug: string;
    image: string;
    subtitle?: string;
    techStack?: {
        frontend?: string[];
        backend?: string[];
        security?: string[]; // Added security section
        infrastructure?: string[]; // Optional for future use
    };
    features?: Array<{
        title: string;
        description: string;
    }>;
    plannedFeatures?: string[];
    overview?: string[]; // Changed to string array for paragraphs
    implementationDetails?: string[]; // Changed to string array for paragraphs
}

export interface ProjectDetailProps {
    data: ProjectData;
}