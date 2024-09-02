import React from 'react';
import { Link } from 'react-router-dom';

export function Card({ id, title, cover }) {
  return (
    <Link to={`/apartment/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </Link>
  );
}