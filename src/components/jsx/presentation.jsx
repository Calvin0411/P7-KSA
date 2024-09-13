import React from 'react';

function Presentation({ apartment }) {
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
    <div className="info-container">
      <div className="info-left-tags">
        <div className="info-left">
          <h1 className="apartment-title">{apartment.title}</h1>
          <p className="apartment-location">{apartment.location}</p>
        </div>
        <div className="tags">
          {apartment.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="host-details-rating">
        <div className="host-details">
          <h3>{apartment.host.name}</h3>
          <img src={apartment.host.picture} alt={apartment.host.name} className="host-picture" />
        </div>
        <div className="rating-stars">
          {renderStars()}
        </div>
      </div>
    </div>
  );
}

export default Presentation;