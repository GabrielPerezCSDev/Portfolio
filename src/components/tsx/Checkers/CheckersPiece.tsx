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
        let pieceClass = '';
        let isKing = false;
    
        switch(value) {
            case 1:
                pieceClass = 'red-piece';
                break;
            case 2:
                pieceClass = 'red-piece red-king';
                isKing = true;
                break;
            case 3:
                pieceClass = 'black-piece';
                break;
            case 4:
                pieceClass = 'black-piece black-king';
                isKing = true;
                break;
            default:
                return null;
        }
    
        return (
            <div 
                className={`piece ${pieceClass} ${isSelected ? 'selected' : ''}`} 
                onClick={handleClick}
            >
                {isKing && <span className="king-indicator">♔</span>}
            </div>
        );
};

export default CheckersPiece;