
import React, { useEffect, useState } from 'react';
import './CheckersBoard.css';
import CheckersPiece from './CheckersPiece';
import GameOver from './GameOver';
const BACKEND_IP = process.env.REACT_APP_BACKEND_IP;
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;
const API_URL = `http://${BACKEND_IP}:${BACKEND_PORT}`;

interface CheckersBoardProps {
    connectionID: string | null;
    board: number[][] | null;
    fetchBoard: () => Promise<void>;
    onPlayerMove: (fromRow: number, fromCol: number, toRow: number, toCol: number) => Promise<void>;
    status: number;
    playerColor: number | null;
    onNewGame: () => Promise<void>;
    onReset: () => Promise<void>;
}

const CheckersBoard: React.FC<CheckersBoardProps> = ({ 
    connectionID,
    board,
    fetchBoard,
    onPlayerMove,
    status,
    playerColor,
    onNewGame,
    onReset 
}) => {
    const [error, setError] = useState<string | null>(null);
    const [fetchAttempts, setFetchAttempts] = useState(0);
    const [selectedPiece, setSelectedPiece] = useState<{ row: number, col: number } | null>(null);
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

        const isPlayerPiece = ((pieceValue === 1 || pieceValue === 2) && playerColor === '1') ||
            ((pieceValue === 3 || pieceValue === 4) && playerColor === '3');

        if (!isPlayerPiece) {
            console.log('You can only move your own pieces');
            return;
        }

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
            } else {
                console.log("Error fetching legal moves:", data.message);
                setLegalMoves([]);
                setSelectedPiece(null);
            }
        } catch (error) {
            setSelectedPiece(null);
            setLegalMoves([]);
            console.log("Fetch error:", error);
        }
    };

    const onMove = async (row: number, col: number) => {
        if (!selectedPiece) return;

        const isLegalMove = legalMoves.some(move => move[0] === row && move[1] === col);
        if (!isLegalMove) {
            console.log(`Move to (${row}, ${col}) is not a legal move.`);
            return;
        }

        await onPlayerMove(selectedPiece.row, selectedPiece.col, row, col);
        setSelectedPiece(null);
        setLegalMoves([]);
    };

    const handleSquareClick = (row: number, col: number) => {
        if (selectedPiece) {
            onMove(row, col);
        }
    };


    const renderSquare = (value: number, isBlackSquare: boolean, row: number, col: number) => {
        const isLegalMove = legalMoves.some(move => move[0] === row && move[1] === col);
        const isSelected = selectedPiece?.row === row && selectedPiece?.col === col;


        return (
            <div
                key={`${row}-${col}`}
                className={`square ${isBlackSquare ? 'black-square' : 'white-square'} ${isLegalMove ? 'legal-move' : ''}`}
                onClick={() => handleSquareClick(row, col)}
            >
                {value !== 0 && (
                    <CheckersPiece
                        value={value}
                        row={row}
                        col={col}
                        onSelect={onSelect}
                        isSelected={isSelected}
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
                            renderSquare(  // RIGHT HERE - renderSquare is used!
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