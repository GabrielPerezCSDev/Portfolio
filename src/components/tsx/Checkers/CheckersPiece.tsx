import React from 'react';

interface CheckersPieceProps {
    value: number;
    row: number;
    col: number;
    onSelect: (row: number, col: number) => void;
    isSelected: boolean;
}

const CheckersPiece: React.FC<CheckersPieceProps> = ({ 
    value, row, col, onSelect, isSelected  
}) => {
    if (value === 0) return null;

    const handleClick = () => {
        onSelect(row, col);
    };
    return (
        <div 
        className={`piece ${value === 1 ? 'red-piece' : 'black-piece'} 
        ${isSelected ? 'selected' : ''}`} 
        onClick={handleClick}
        />
    );
};

export default CheckersPiece;