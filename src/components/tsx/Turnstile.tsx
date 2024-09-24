import React, { useState , useEffect } from 'react';
import Button from './Button';
import '../styling/Turnstile.css';

interface ImageDetail {
    title: string;
    imageURL: string;
    descriptionURL: string;
}

interface TurnstileProps {
    imageDetailArray: ImageDetail[];
}



const Turnstile: React.FC<TurnstileProps> = ({ imageDetailArray }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

   

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageDetailArray.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageDetailArray.length) % imageDetailArray.length);
    };

    return (
        <div className="turnstile">
            <Button text="Previous" onClick={prevImage} />
            <div className="image">
                <h1>{imageDetailArray[currentIndex].title}</h1>
                <img
                    src={imageDetailArray[currentIndex].imageURL}
                    alt={imageDetailArray[currentIndex].descriptionURL}
                />
                <p>{imageDetailArray[currentIndex].descriptionURL}</p>
            </div>
            <Button text="Next" onClick={nextImage} />
        </div>
    );
};

export default Turnstile;