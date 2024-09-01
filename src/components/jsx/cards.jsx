import React from 'react';

export function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </div>
  );
}
