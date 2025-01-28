import React from 'react';
import DifficultySelect from './DifficultySelect';
import GameControls from './GameControls';

interface SidePanelProps {
    isActive: boolean;
    onGameStart: (difficultyCode: number, colorCode: number) => void;
    onStop: () => Promise<void>;
    onReset: () => Promise<void>;
}

const SidePanel: React.FC<SidePanelProps> = ({ isActive, onGameStart, onStop, onReset }) => {
    return (
        <div className="side-panel">
            {!isActive ? (
                <DifficultySelect onSubmit={onGameStart} />
            ) : (
                <GameControls onStop={onStop} onReset={onReset} />
            )}
        </div>
    );
};

export default SidePanel;