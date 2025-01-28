import React, { useState, useEffect } from 'react';
import CheckersGame from '../components/tsx/Checkers/CheckersGame';
import './Checkers.css'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}`;

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
                console.log(`Connecting to ${API_URL}`);
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
            <h1 className='title'>Neural Checkers</h1>
            {!isConnected ? (
                <div className="error-message"><p>
                Thank you for visiting <strong>Neural Checkers</strong>, my AI-powered checkers game project! 
            </p>
            <p>
                Currently, the game-server is temporarily offline as I am in the process of upgrading and securing the backend infrastructure. This includes configuring HTTPS for secure connections and integrating a reliable domain setup.
            </p>
            <p>
                Please check back soon, or feel free to explore the rest of my portfolio to see my other projects and accomplishments. I’d be happy to discuss this project in more detail during an interview or via email or feel free to visit
                the source code on my github!
            </p></div>
            ) : (
                <CheckersGame  
                    connectionID={connectionID} 
                />
            )}
        </div>
     );
 };

 export default Checkers;