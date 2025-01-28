/**
 * Main checkers game logic (endpoint hits)
 */
import React, { useState, useEffect } from 'react';
import CheckersBoard from './CheckersBoard';
import SidePanel from './SidePanel';
import './CheckersGame.css';
import GameOver from './GameOver';

const BACKEND_IP = process.env.REACT_APP_BACKEND_IP;
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;
const API_URL = `http://${BACKEND_IP}:${BACKEND_PORT}`;
const RED = 1;
const BLACK = 3;

interface CheckersGameProps {
  connectionID: string | null;
}

const CheckersGame: React.FC<CheckersGameProps> = ({ connectionID }) => {
  // Game state management here
  const [board, setBoard] = useState<number[][] | null>(null);
  const [playerColor, setPlayerColor] = useState<number | null>(
    parseInt(localStorage.getItem('player_color') || 'null')
  );
  const [difficulty, setDifficulty] = useState<number | null>(
    parseInt(localStorage.getItem('difficulty') || 'null')
  );
  const [playerMove, setPlayerMove] = useState<number>(0);
  const [status, setStatus] = useState<number>(-1);
  const [isActive, setIsActive] = useState<boolean>(
    localStorage.getItem('isActive') === 'true'
  );

  const handleNewGame = async () => {
    try {
      // First stop current game
      const response = await fetch(`${API_URL}/stop`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'connection-id': connectionID
        })
      });

      if (response.ok) {
        // Reset local state
        setStatus(-1);
        setBoard(null);
        setPlayerColor(null);
        setPlayerMove(0);
        localStorage.removeItem('player_color');
        setIsActive(false);
      }
    } catch (error) {
      console.error('Error stopping game:', error);
    }
  };

  const handleReset = async () => {
    try {

      setIsActive(false);
      localStorage.setItem('isActive', 'false');

      const response = await fetch(`${API_URL}/reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'connection-id': connectionID
        })
      });

      if (response.ok) {
        // Reset game state but keep settings
        setStatus(-1);
        setBoard(null);
        setPlayerMove(0);
        // Retrieve and parse settings from localStorage
        const storedDifficulty = localStorage.getItem('difficulty');
        const storedPlayerColor = localStorage.getItem('player_color');

        const parsedDifficulty = storedDifficulty ? parseInt(storedDifficulty) : 1; // Default difficulty
        const parsedPlayerColor = storedPlayerColor ? parseInt(storedPlayerColor) : 1; // Default player color

        await handleGameStart(parsedDifficulty, parsedPlayerColor);
        fetchBoard();
      }
    } catch (error) {
      console.error('Error resetting game:', error);
    }
  };



  const fetchBoard = async () => {
    if (!connectionID) {
      console.log("No connection ID, skipping fetch");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/get-board`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'connection-id': connectionID })
      });
      console.log("Response status:", response.status);
      if (response.ok) {
        const data = await response.json();
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
    if (isActive) {
      console.log("game has started");
    } else {
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
      localStorage.setItem('difficulty', selectedDifficulty.toString());
      setDifficulty(selectedDifficulty);
      localStorage.setItem('isActive', 'true');
      setIsActive(true);

      //if player color is black handle AI move first 
      if (selectedPlayer == BLACK) {
        makeAIMove();
      }
    } catch (error) {
      console.error('Error starting the game:', error);
    }
  };

  /**
   * Checks the game status from the backend.
   * @returns The game status or null if not available.
   */
  const checkStatus = async (): Promise<number | null> => {
    try {
      const response = await fetch(`${API_URL}/game-status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'connection-id': connectionID })
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Game status:", data.data);
        setStatus(data.data);
        return data.data;
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
    return null;
  };

  const getStatusMessage = (status: number) => {
    switch (status) {
      case 0: return "Red wins!";
      case 1: return "Black wins!";
      case 2: return "Draw!";
      case -1: return "Game in progress";
      default: return "Unknown status";
    }
  };
  /**
    * Handles actions after a player makes a move.
    */
  const handlePostPlayerMove = async () => {
    if (playerMove > 0) {  // Only trigger after the first move
      console.log("Player made a move, checking status...");
      const currentStatus = await checkStatus();
      console.log("Current status" + currentStatus);
      if (currentStatus == -1) { // Adjust based on your terminationState logic
        console.log("Triggering AI move");
        makeAIMove();
      }
    }
  };

  const handlePostAIMove = async () => {
    const currentStatus = await checkStatus();
  }

  useEffect(() => {
    console.log("status has updated to : " + status);
  }, [status])
  /**
   * Use effect to monitor if the player made a move if they did then call ot make the AI move 
   * 
   */

  useEffect(() => {
    console.log("Player made a move");
    handlePostPlayerMove();
  }, [playerMove]);

  /**
* Utility function to pause execution for a specified time.
* @param ms - Milliseconds to wait.
*/
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


  const handlePlayerMove = async (fromRow: number, fromCol: number, toRow: number, toCol: number) => {
    try {
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

      if (!data.success) {
        return;
      }
      fetchBoard();
      await handlePostAIMove();
    } catch (error) {
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
          status={status}
          playerColor={playerColor}
          onNewGame={handleNewGame}
          onReset={handleReset}
        />
      </div>

      <SidePanel
        isActive={isActive}
        onGameStart={handleGameStart}
        onStop={handleNewGame}
        onReset={handleReset}
      />

      {status !== -1 && (
        <GameOver
          status={status}
          playerColor={playerColor || 0}
          onNewGame={handleNewGame}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default CheckersGame;