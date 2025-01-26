// SidePanel.tsx
import React from 'react';
import DifficultySelect from './DifficultySelect';

interface SidePanelProps {
 isActive: boolean;
 onGameStart: (difficultyCode: number, colorCode: number) => void;
 onQuit?: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isActive, onGameStart, onQuit }) => {
 return (
   <div className="side-panel">
     {!isActive ? (
       <DifficultySelect onSubmit={onGameStart} />
     ) : (
       <div className="game-controls">
         <h3>Game Controls</h3>
         <button className="quit-button" onClick={onQuit}>
           Quit Game
         </button>
       </div>
     )}
   </div>
 );
};

export default SidePanel;