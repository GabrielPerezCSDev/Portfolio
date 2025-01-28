// GameControls.tsx
import React from 'react';
import './styling/GameControls.css';

interface GameControlsProps {
    onStop: () => Promise<void>;
    onReset: () => Promise<void>;
}

const GameControls: React.FC<GameControlsProps> = ({ onStop, onReset }) => {
    return (
        <div className="game-controls">
            <h3>Game Controls</h3>
            <div className="control-buttons">
                <button 
                    className="control-button reset-button"
                    onClick={onReset}
                >
                    Reset Game
                </button>
                <button 
                    className="control-button stop-button" 
                    onClick={onStop}
                >
                    Stop Game
                </button>
            </div>
        </div>
    );
};

export default GameControls;