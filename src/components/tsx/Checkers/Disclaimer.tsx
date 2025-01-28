// Disclaimer.tsx
import React from 'react';
import './styling/Disclaimer.css';

const Disclaimer: React.FC = () => {
    return (
        <div className="disclaimer">
            <p>
                <span className="disclaimer-title">Performance Notice:</span>
                This game is hosted on a Google Cloud f1-micro instance with limited computing power. 
                AI moves may take longer to process due to these hardware constraints.
            </p>
        </div>
    );
};

export default Disclaimer;