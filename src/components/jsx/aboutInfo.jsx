import React from 'react';

function AboutInfo({ title, description }) {
  return (
    <div className="about-info-container">
      <input type="checkbox" id={`toggle-${title}`} className="about-info-checkbox" />
      <label htmlFor={`toggle-${title}`} className="about-info-label">
        <span className="about-info-icon">v</span>
        <h2>{title}</h2>
      </label>
      <div className="about-info-content">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutInfo;