import React, { useState } from 'react';
import Button from './Button';
import '../styling/Turnstile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="turnstile container d-flex flex-column align-items-center py-4">
            <div className="row w-100">
                <div className="col-2 d-flex justify-content-center">
                    <Button text="Previous" onClick={prevImage} />
                </div>
                <div className="col-8">
                    <div className="card text-center">
                        <h1 className="card-header">{imageDetailArray[currentIndex].title}</h1>
                        <img
                            className="card-img-top"
                            src={imageDetailArray[currentIndex].imageURL}
                            alt={imageDetailArray[currentIndex].title}
                        />
                        <div className="card-body">
                            <p className="card-text">{imageDetailArray[currentIndex].descriptionURL}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center">
                    <Button text="Next" onClick={nextImage} />
                </div>
            </div>
        </div>
    );
};

export default Turnstile;
