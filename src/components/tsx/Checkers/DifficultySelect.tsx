import React, { useState } from 'react';
import './DifficultySelect.css';

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

  // Map color to numeric codes
  const colorMap: { [key: string]: number } = {
    red: 1,
    black: 3,
  };

  // Local states for form selections
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('easy'); // default "easy"
  const [selectedColor, setSelectedColor] = useState<string>('red');           // default "red"

  const handleSubmit = (event: React.FormEvent) => {
    
    event.preventDefault();
    // Convert the string keys to numeric codes
    const difficultyCode = difficultyMap[selectedDifficulty];
    const colorCode = colorMap[selectedColor];
    console.log(`Submitting difficulty ${difficultyCode} and color ${colorCode}`);
    // Pass numeric codes to the parent
    onSubmit(difficultyCode, colorCode);
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

            <div className="select-group">
                <label>Color:</label>
                <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    <option value="red">Red</option>
                    <option value="black">Black</option>
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
