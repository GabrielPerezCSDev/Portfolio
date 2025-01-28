import React, { useState, useEffect } from 'react';
import CheckersGame from '../components/tsx/Checkers/CheckersGame';
const BACKEND_IP = process.env.REACT_APP_BACKEND_IP;
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;
const API_URL = `http://${BACKEND_IP}:${BACKEND_PORT}`;

const Checkers: React.FC = () => {
    const [gameState, setGameState] = useState<'initial' | 'playing'>('initial');
    const [isConnected, setIsConnected] = useState(false);
    const [connectionID, setConnectionID] = useState<string | null>(
        localStorage.getItem('checkers_connection_id')
    );
    
    useEffect(() => {
        let isActive = true;
    
        const connectToGame = async () => {
            if (!isActive) return;
            const storedId = localStorage.getItem('checkers_connection_id');
            try {
                const response = await fetch(`${API_URL}/`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 'connection-id': storedId || null })
                });
    
                if (!response.ok || !isActive) return;
    
                const result = await response.json();
                if (result.success && isActive) {
                    localStorage.setItem('checkers_connection_id', result.message);
                    setConnectionID(result.message);
                    setIsConnected(true);
                } else if (isActive) {
                    setIsConnected(true);
                }
            } catch (error) {
                if (isActive) {
                    console.error('Connection error:', error);
                    setIsConnected(false);
                }
            }
        };
    
        connectToGame();
        return () => { isActive = false; };
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
                    connectionID={connectionID} 
                />
            )}
        </div>
     );
 };

 export default Checkers;