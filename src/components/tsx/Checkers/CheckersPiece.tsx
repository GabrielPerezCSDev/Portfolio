import React, { useState } from 'react';

interface CheckersPieceProps {
    value: number;
    row: number;
    col: number;
    onSelect: (row: number, col: number) => void;
}

const CheckersPiece: React.FC<CheckersPieceProps> = ({ 
    value, row, col, onSelect  
}) => {
    if (value === 0) return null;

    const handleClick = () => {
        onSelect(row, col);
    };

    return (
        <div 
            className={`piece ${value === 1 ? 'red-piece' : 'black-piece'} 
            ${/* Optionally, add 'selected' class here if needed */ ''}`} 
            onClick={handleClick}
        />
    );
};

export default CheckersPiece;