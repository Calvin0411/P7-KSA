import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../../data/cardsData'; 

function ApartmentDetail() {
  const { id } = useParams();
  const apartment = cardsData.find((item) => item.id === id);

  if (!apartment) {
    return <h2>Appartement non trouvé</h2>;
  }


//test

  return (
    <div className="apartment-detail">
      <img src={apartment.cover} alt={apartment.title} className="apartment-image" />
      <h1>{apartment.title}</h1>
      <p>{apartment.description}</p>
      <h3>Localisation: {apartment.location}</h3>
      <h3>Équipements:</h3>
      <ul>
        {apartment.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3>Tags:</h3>
      <div>
        {apartment.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default ApartmentDetail;
