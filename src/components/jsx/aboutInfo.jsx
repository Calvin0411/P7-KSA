import React from 'react';
import vectorImage from '../../assets/images/Vector.png';

function AboutInfo({ title, description }) {
  return (
    <div className="about-info-container">
      <input type="checkbox" id={`toggle-${title}`} className="about-info-checkbox" />
      <div className="about-info-header">
        <h2>{title}</h2>
        <label htmlFor={`toggle-${title}`} className="about-info-icon-label">
          <img src={vectorImage} alt="Toggle" className="about-info-icon" />
        </label>
      </div>
      <div className="about-info-content">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutInfo;