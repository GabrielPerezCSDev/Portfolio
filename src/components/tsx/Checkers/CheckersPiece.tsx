import React from 'react';

interface CheckersPieceProps {
    value: number;  // 0: empty, 1: red, 3: black (and later king pieces)
    row: number;
    col: number;
}

const CheckersPiece: React.FC<CheckersPieceProps> = ({ value, row, col }) => {
    if (value === 0) return null;

    const handleClick = () => {
        const playerColor = localStorage.getItem('player_color');
        if (!playerColor) {
            console.log('Please select a color and start the game first');
            return;
        }
 
        const isPlayerPiece = (value === 1 && playerColor === '1') || 
                            (value === 3 && playerColor === '3');
        
        if (!isPlayerPiece) {
            console.log('You can only move your own pieces');
            return;
        }
 
        console.log(`Clicked piece at: (${row}, ${col})`);
    };

    return (
        <div className={`piece ${value === 1 ? 'red-piece' : 'black-piece'}`} 
        onClick={handleClick}
        />
    );
};

export default CheckersPiece;