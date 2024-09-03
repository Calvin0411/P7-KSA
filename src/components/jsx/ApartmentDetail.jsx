import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../../data/cardsData';
import leftArrow from '../../assets/images/vector_left.png';
import rightArrow from '../../assets/images/vector_right.png';

function ApartmentDetail() {
  const { id } = useParams();
  const apartment = cardsData.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!apartment) {
    return <h2>Appartement non trouvé</h2>;
  }

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === apartment.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour générer les étoiles
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${i <= apartment.rating ? 'filled-star' : 'empty-star'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="apartment-detail">
      <div className="carousel">
        <button className="carousel-button left" onClick={handlePrev}>
          <img src={leftArrow} alt="Précédent" />
        </button>

        <img
          src={apartment.pictures[currentImageIndex]}
          alt={`Diapositive ${currentImageIndex + 1}`}
          className="carousel-image"
        />

        <button className="carousel-button right" onClick={handleNext}>
          <img src={rightArrow} alt="Suivant" />
        </button>

        <div className="carousel-indicator">
          {currentImageIndex + 1}/{apartment.pictures.length}
        </div>
      </div>

      <h1>{apartment.title}</h1>

      
    </div>
  );
}

export default ApartmentDetail;

