interface GameOverProps {
    status: number;
    playerColor: number;
    onNewGame: () => Promise<void>;  // Stop and start new game
    onReset: () => Promise<void>;    // Reset current game
 }
 
 const GameOver: React.FC<GameOverProps> = ({ status, playerColor, onNewGame, onReset }) => {
    const getWinnerMessage = () => {
        if (status === 0) return "Black Wins!";
        if (status === 1) return "Red Wins!";
        if (status === 2) return "Draw!";
        return "Game Over";
    };
 
    return (
        <div className="game-over-overlay">
            <div className="game-over-content">
                <h2>{getWinnerMessage()}</h2>
                <p>{status === playerColor ? "Congratulations!" : "Better luck next time!"}</p>
                <div className="game-over-buttons">
                    <button 
                        className="reset-button"
                        onClick={onReset}
                    >
                        Quick Restart
                    </button>
                    <button 
                        className="new-game-button"
                        onClick={onNewGame}
                    >
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
 };
 
 export default GameOver;