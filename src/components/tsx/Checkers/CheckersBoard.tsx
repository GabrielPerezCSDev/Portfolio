
import React, { useEffect, useState } from 'react';
import './CheckersBoard.css';
import CheckersPiece from './CheckersPiece';

const API_URL = 'http://localhost:9000';

interface CheckersBoardProps {
    connectionID: string | null;
}

const CheckersBoard: React.FC<CheckersBoardProps> = ({ connectionID }) => {
   const [board, setBoard] = useState<number[][] | null>(null);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    const fetchBoard = async () => {
        if (!connectionID) return;
        try {
            const response = await fetch(`${API_URL}/get-board`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'connection-id': connectionID })
            });
            if (response.ok) {
                const data = await response.json();
                if (data.success && data.data) {
                    setBoard(data.data);
                }
            }
        } catch (error) {
            setError('Error fetching board');
        }
    };

        fetchBoard();
    }, [connectionID]);

   const renderSquare = (value: number, isBlackSquare: boolean, row: number, col: number) => {
    return (
        <div 
            key={`${row}-${col}`} 
            className={`square ${isBlackSquare ? 'black-square' : 'white-square'}`}
        >
            <CheckersPiece value={value} row={row} col={col} />
        </div>
    );
};

   const renderBoard = () => {
       if (!board) return null;
       
       return (
           <div className="board-grid">
               {board.map((row, rowIndex) => (
                   <div key={rowIndex} className="board-row">
                       {row.map((square, colIndex) => 
                           renderSquare(
                               square,
                               (rowIndex + colIndex) % 2 === 1,
                               rowIndex,
                               colIndex
                           )
                       )}
                   </div>
               ))}
           </div>
       );
   };

   if (error) {
       return <div>Error: {error}</div>;
   }

   if (!board) {
       return <div>Loading board...</div>;
   }

   return (
       <div className="board-container">
           {renderBoard()}
       </div>
   );
};

export default CheckersBoard;