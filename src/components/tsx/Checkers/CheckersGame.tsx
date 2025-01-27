/**
 * Main checkers game logic (endpoint hits)
 */
import React, { useState, useEffect } from 'react';
import CheckersBoard from './CheckersBoard';
import SidePanel from './SidePanel';
import './CheckersGame.css';

const API_URL = 'http://localhost:9000';
const RED = 1;
const BLACK = 3;

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
    const [playerMove, setPlayerMove] = useState<number>(0);

  const fetchBoard = async () => {
    if (!connectionID) {
        console.log("No connection ID, skipping fetch");
        return;
    }
    try {
        console.log("Fetching board with ID:", connectionID);
        const response = await fetch(`${API_URL}/get-board`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'connection-id': connectionID })
        });
        console.log("Response status:", response.status);
        if (response.ok) {
            const data = await response.json();
            console.log("Board data:", data);
            if (data.success && data.data) {
                setBoard(data.data);
            }
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

useEffect(() => {
  let isActive = true;
  
  const fetchBoard = async () => {
      if (!connectionID || !isActive) return;
      try {
        const response = await fetch(`${API_URL}/get-board`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'connection-id': connectionID })
        });
          if (response.ok && isActive) {
              const data = await response.json();
              if (data.success && data.data) {
                  setBoard(data.data);
              }
          }
      } catch (error) {
          console.error('Fetch error:', error);
      }
  };

  if (!board) fetchBoard();
  
  return () => { isActive = false; };
}, [connectionID, board]);

useEffect(() => {
  if(isActive){
    console.log("game has started");
  }else{
    console.log("game has ended");
  }
}, [isActive]);


    /**
   * Called when user submits the difficulty/player form.
   * Makes an API request to start the game with chosen settings.
   */
    const handleGameStart = async (selectedDifficulty: number, selectedPlayer: number) => {
      try {
        const response = await fetch(`${API_URL}/start`, {
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
        //if player color is black handle AI move first 
        if(selectedPlayer == BLACK){
          makeAIMove();
        }
      } catch (error) {
        console.error('Error starting the game:', error);
      }
    };

    /**
     * Use effect to monitor if the player made a move if they did then call ot make the AI move 
     * 
     */

    useEffect(() => {

      if (playerMove > 0) {  // Only trigger after first move
        console.log("Player made a move, triggering AI turn");
        makeAIMove();  // Call AI move after player's move
      }
    }, [playerMove]);

    /**
 * Utility function to pause execution for a specified time.
 * @param ms - Milliseconds to wait.
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    const handlePlayerMove = async (fromRow: number, fromCol: number, toRow: number, toCol: number) => {
      try {
          console.log(`Moving piece from (${fromRow}, ${fromCol}) to (${toRow}, ${toCol})`);
          const response = await fetch(`${API_URL}/player-move`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  'connection-id': connectionID,
                  'f-row': fromRow,
                  'f-col': fromCol,
                  't-row': toRow,
                  't-col': toCol,
              }),
          });
          const result = await response.json();
          if (result.success) {
              console.log('Move successful:', result.message);
              setPlayerMove(prev => prev + 1); // Trigger AI move
              fetchBoard();
          } else {
              console.error('Move failed:', result.message);
          }
      } catch (error) {
          console.error('Error making move:', error);
      }
  };

    /**
     * Called to handle the AI move 
     */
    const makeAIMove = async () => {
      //spawn a thread to time how long it takes for the backend to make the ai move request
      //wait until at least 1 second has passed to let the ai move be recognized for user by calling fetch board
      
      //do not need any checks can just go straight into calling the api and let the GameResponse from the backend indicate any wrongdoing
      console.log("Attempting an ai move");
      try {
        await sleep(0);
        const response = await fetch(`${API_URL}/make-ai-move`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'connection-id': connectionID
          }),
        });
   
        if (!response.ok) {
          throw new Error(`Failed to start game. Status: ${response.status}`);
        }
        
        const data = await response.json();

        if(!data.success){
          console.log(data.message);
          return;
        }
        fetchBoard();

      }catch(error){
        console.error('Error moving AI:', error);
      }
        
    }

  return (
    <div className="game-layout">
      <div className="board-container">
      <CheckersBoard 
                connectionID={connectionID}
                board={board}
                fetchBoard={fetchBoard}
                onPlayerMove={handlePlayerMove}
            />
      </div>

      <SidePanel 
      isActive={isActive}
      onGameStart={handleGameStart}
      />
    </div>
  );
};

export default CheckersGame;