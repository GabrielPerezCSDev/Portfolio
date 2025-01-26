
import React, { useEffect, useState } from 'react';
import './CheckersBoard.css';
import CheckersPiece from './CheckersPiece';

const API_URL = 'http://localhost:9000';

interface CheckersBoardProps {
    connectionID: string | null;
    board: number[][] | null;
    fetchBoard: () => Promise<void>;
 }
 
 const CheckersBoard: React.FC<CheckersBoardProps> = ({ connectionID, board, fetchBoard }) => {
    const [error, setError] = useState<string | null>(null);
    const [fetchAttempts, setFetchAttempts] = useState(0);
    const [selectedPiece, setSelectedPiece] = useState<{row: number, col: number} | null>(null);
    const [legalMoves, setLegalMoves] = useState<number[][]>([]);

    useEffect(() => {
        if (!board && fetchAttempts < 3) {
            fetchBoard();
            setFetchAttempts(prev => prev + 1);
        }
    }, [board, fetchBoard, fetchAttempts]);

    const onSelect = async (row: number, col: number) => {
        const playerColor = localStorage.getItem('player_color');
        if (!playerColor) {
            console.log('Please select a color and start the game first');
            return;
        }

        if (!board) {
            console.log('Board not loaded yet');
            return;
        }

        const pieceValue = board[row][col];

        const isPlayerPiece = (pieceValue === 1 && playerColor === '1') || 
                              (pieceValue === 3 && playerColor === '3');

        if (!isPlayerPiece) {
            console.log('You can only move your own pieces');
            return;
        }

        console.log(`Clicked piece at: (${row}, ${col})`);

        try {
            const response = await fetch(`${API_URL}/legal-moves`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'connection-id': connectionID,
                    row,
                    col,
                }),
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                setLegalMoves(data.data);
                setSelectedPiece({ row, col });
                console.log("Legal moves:", data.data);
            } else {
                console.log("Error fetching legal moves:", data.message);
                setLegalMoves([]);
                setSelectedPiece(null);
            }
        } catch(error) {
            setSelectedPiece(null);
            setLegalMoves([]);
            console.log("Fetch error:", error);
        }
    };

 
    const renderSquare = (value: number, isBlackSquare: boolean, row: number, col: number) => {
        const isLegalMove = legalMoves.some(move => move[0] === row && move[1] === col);
        // Debug log to verify isLegalMove
        console.log(`Square (${row}, ${col}) isLegalMove: ${isLegalMove}`);

        return (
            <div 
                key={`${row}-${col}`} 
                className={`square ${isBlackSquare ? 'black-square' : 'white-square'} ${isLegalMove ? 'legal-move' : ''}`}
            >
                {value !== 0 && (
                    <CheckersPiece 
                        value={value} 
                        row={row} 
                        col={col} 
                        onSelect={onSelect}
                    />
                )}
            </div>
        );
    };
 
    const renderBoard = () => {
        if (!board) {
            fetchBoard();
            return null;
        }
        return (
            <div className="board-grid">
                {board.map((rowData, rowIndex) => (
                    <div key={rowIndex} className="board-row">
                        {rowData.map((square, colIndex) => 
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

    if (error) return <div>Error: {error}</div>;
    if (!board) return <div>Attempting to fetch board...</div>;

    return (
        <div className="board-container">
            {renderBoard()}
        </div>
    );
};

export default CheckersBoard;