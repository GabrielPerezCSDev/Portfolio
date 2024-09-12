import React, { useState } from 'react';
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



const Turnstile: React.FC<TurnstileProps>  = ({ imageDetailArray }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    //fucntion to navigate toi th enext image 
    const nextImage = () => {
        console.log("new image: " + imageDetailArray[currentIndex].imageURL);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageDetailArray.length)
    }

    //fucntion to navigate toi the previous image 
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex -1 + imageDetailArray.length) % imageDetailArray.length)
    }

    // Log an error to the console if the image is not found
    const handleImageError = () => {
        console.error(`Image not found at ${imageDetailArray[currentIndex].imageURL}`);
    };

    return (
        <div className= 'turnstile'>
        <Button text= "Previous" onClick={prevImage} />
        <div className='image'>
            <h1>{imageDetailArray[currentIndex].title}</h1>
                <img 
                src={imageDetailArray[currentIndex].imageURL}
                alt={imageDetailArray[currentIndex].descriptionURL}
                style={{ width: '300px', height: 'auto'}}
                />
            <p>{imageDetailArray[currentIndex].descriptionURL}</p>
        </div>
        <Button text= "Next" onClick={nextImage} />
        </div>
    )
}

export default Turnstile;
