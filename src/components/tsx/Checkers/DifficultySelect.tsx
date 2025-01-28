import React, { useState } from 'react';
import './styling/DifficultySelect.css';

interface DifficultySelectProps {
  onSubmit: (difficultyCode: number, colorCode: number) => void;
}

const DifficultySelect: React.FC<DifficultySelectProps> = ({ onSubmit }) => {
  // Map difficulties to numeric codes
  const difficultyMap: { [key: string]: number } = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  
  // Local states for form selections
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('easy'); // default "easy"
  const [selectedColor, setSelectedColor] = useState<string>('red');           // default "red"

  const handleSubmit = (event: React.FormEvent) => {
    
    event.preventDefault();
    // Convert the string keys to numeric codes
    const difficultyCode = difficultyMap[selectedDifficulty];
    
    console.log(`Submitting difficulty ${difficultyCode} and color ${1}`);
    // Pass numeric codes to the parent
    onSubmit(difficultyCode, 1);
  };

  return (
    <div className="difficulty-select">
        <form onSubmit={handleSubmit}>
            <div className="select-group">
                <label>Difficulty:</label>
                <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <button type="submit" className="start-button">
                Start Game
            </button>
        </form>
    </div>
);
};

export default DifficultySelect;
