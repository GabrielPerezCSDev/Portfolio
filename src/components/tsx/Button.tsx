import React from 'react';
import '../styling/Button.css'

interface ButtonProps {
    text: 'Next' | 'Previous';  // Limit text to either 'Next' or 'Previous'
    onClick: () => void;
  }


const Button: React.FC<{ text: string; onClick: () => void }> = ({ text, onClick }) => {
    return (
       <button className="arrow-button" onClick={onClick}>
            {text === 'Next' ? '→' : '←'} {/* Render right arrow for Next, left arrow for Previous */}
        </button>
    );
  };
  
  export default Button;