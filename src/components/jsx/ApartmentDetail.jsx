import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../../data/cardsData';
import leftArrow from '../../assets/images/vector_left.png';
import rightArrow from '../../assets/images/vector_right.png';

function ApartmentDetail() {
  const { id } = useParams();
  const apartment = cardsData.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

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

      <div className="header-info">
        <div className="info-left">
          <h1 className="apartment-title">{apartment.title}</h1>
          <p className="apartment-location">{apartment.location}</p>
        </div>
        <div className="host-details">
          <h4>{apartment.host.name}</h4>
          <img src={apartment.host.picture} alt={apartment.host.name} className="host-picture" />
        </div>
      </div>

      <div className="apartment-info">
        <div className="tags">
          {apartment.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="rating-stars">
          {renderStars()}
        </div>
      </div>

      <div className="expandable-sections">
        <div className="expandable-section">
          <input type="checkbox" id="toggle-description" className="toggle-checkbox" />
          <label htmlFor="toggle-description" className="toggle-label">
            <span className="toggle-icon">v</span>
            <span>Description</span>
          </label>
          <div className="section-content">
            <p>{apartment.description}</p>
          </div>
        </div>

        <div className="expandable-section">
          <input type="checkbox" id="toggle-equipments" className="toggle-checkbox" />
          <label htmlFor="toggle-equipments" className="toggle-label">
            <span className="toggle-icon">v</span>
            <span>Équipements</span>
          </label>
          <div className="section-content">
            <ul>
              {apartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetail;

