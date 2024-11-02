import React, { useState } from 'react';
import '../css/Carousel.css'


const Carousel = () => {
  const images = [
    '/assets/imgs/carousel-1.jpg',
    '/assets/imgs/carousel-2.jpg',
    '/assets/imgs/carousel-1.jpg',
    '/assets/imgs/carousel-2.jpg'
  ];
const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image"
        />
        <button className="carousel-arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="carousel-arrow right-arrow" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;


