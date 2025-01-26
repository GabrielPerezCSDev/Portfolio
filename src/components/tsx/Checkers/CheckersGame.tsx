/**
 * Main checkers game logic (endpoint hits)
 */
import React, { useState } from 'react';
import CheckersBoard from './CheckersBoard';
import SidePanel from './SidePanel';

import './CheckersGame.css'

interface CheckersGameProps {
    isActive: boolean;         // Whether the game is in "playing" mode
    connectionID: string | null;
}

const CheckersGame: React.FC<CheckersGameProps> = ({ isActive, connectionID }) => {
    // Game state management here
    const [board, setBoard] = useState<number[][] | null>(null);
    const [playerColor, setPlayerColor] = useState<number | null>(
      parseInt(localStorage.getItem('player_color') || 'null')
  );
    /**
   * Called when user submits the difficulty/player form.
   * Makes an API request to start the game with chosen settings.
   */
    const handleGameStart = async (selectedDifficulty: number, selectedPlayer: number) => {
      try {
        const response = await fetch('http://localhost:9000/start', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            difficulty: selectedDifficulty,
            playerColor: selectedPlayer,
            'connection-id': connectionID
          }),
        });
   
        if (!response.ok) {
          throw new Error(`Failed to start game. Status: ${response.status}`);
        }
        
        const data = await response.json();
        setBoard(data.board);
        console.log(data.message || 'Game started successfully');
        console.log("Player color: " + selectedPlayer);
        localStorage.setItem('player_color', selectedPlayer.toString());
        setPlayerColor(selectedPlayer);
      } catch (error) {
        console.error('Error starting the game:', error);
      }
    };

  return (
    <div className="game-layout">
      <div className="board-container">
        <CheckersBoard connectionID={connectionID}/>
      </div>

      <SidePanel 
      isActive={isActive}
      onGameStart={handleGameStart}
      />
    </div>
  );
};

export default CheckersGame;