import React, { useState, useEffect } from 'react';
import CheckersGame from '../components/tsx/Checkers/CheckersGame';
import CheckersBoard from '../components/tsx/Checkers/CheckersBoard';
import DifficultySelect from '../components/tsx/Checkers/DifficultySelect';
const API_URL = 'http://localhost:9000';

const Checkers: React.FC = () => {
    const [gameState, setGameState] = useState<'initial' | 'playing'>('initial');
    const [isConnected, setIsConnected] = useState(false);
    const [connectionID, setConnectionID] = useState<string | null>(
        localStorage.getItem('checkers_connection_id')
    );
    
    useEffect(() => {
        const connectToGame = async () => {
            const storedId = localStorage.getItem('checkers_connection_id');
            
            try {
                const response = await fetch(`${API_URL}/`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 'connection-id': storedId || null })
                });
     
                if (!response.ok) {
                    setIsConnected(false);
                    throw new Error(`Server error: ${response.status}`);
                }
     
                const newId = await response.text();
                if (!storedId) {
                    localStorage.setItem('checkers_connection_id', newId);
                    setConnectionID(newId);
                }
                setIsConnected(true);
                
            } catch (error) {
                console.error('Connection error:', error);
                setIsConnected(false);
            }
        };
     
        connectToGame();
     }, []);
 
    // Add connection status logging
    useEffect(() => {
        console.log("Connection status:", isConnected);
        console.log("Connection ID:", connectionID);
    }, [isConnected, connectionID]);
 
    return (
        <div className="checkers-page">
            <h1>Checkers AI</h1>
            {!isConnected ? (
                <div className="error-message">Not connected to game server</div>
            ) : (
                <CheckersGame 
                    isActive={gameState !== 'initial'} 
                    connectionID={connectionID} 
                />
            )}
        </div>
     );
 };

 export default Checkers;