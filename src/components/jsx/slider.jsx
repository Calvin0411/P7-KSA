import React from 'react';
import leftArrow from '../../assets/images/vector_left.png';
import rightArrow from '../../assets/images/vector_right.png';


const Slider = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button className="carousel-button left" onClick={handlePrev}>
            <img src={leftArrow} alt="Précédent" />
          </button>

          <img
            src={pictures[currentImageIndex]}
            alt={`Diapositive ${currentImageIndex + 1}`}
            className="carousel-image"
          />

          <button className="carousel-button right" onClick={handleNext}>
            <img src={rightArrow} alt="Suivant" />
          </button>

          <div className="carousel-indicator">
            {currentImageIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      {pictures.length === 1 && (
        <img
          src={pictures[0]}
          alt="Image unique"
          className="carousel-image"
        />
      )}
    </div>
  );
};

export default Slider;