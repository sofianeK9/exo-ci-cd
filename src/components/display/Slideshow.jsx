import React, { useState } from 'react';

const Slideshow = ({ images = [], className = '', ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative w-full max-w-lg mx-auto ${className}`} {...props}>
      {images.length > 0 && (
        <>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            onClick={prevSlide}
          >
            ◀
          </button>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full rounded-lg shadow"
          />
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            onClick={nextSlide}
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
};

export default Slideshow;
