import React from 'react';
import { Link } from 'react-router-dom';
import cardsData from '../../data/cardsData'; 

export function Card({ id, title, cover }) {
  return (
    <Link to={`/apartment/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export function CardsContainer() {
  return (
    <div className="cards-container">
      {cardsData.map(card => (
        <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
      ))}
    </div>
  );
}