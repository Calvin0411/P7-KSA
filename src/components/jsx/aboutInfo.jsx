import React, { useState } from 'react';

function AboutInfo({ title, description }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="about-info">
      <div className="content">
        <h2>{title}</h2>
        <button className="toggle-button" onClick={handleToggle}>
          <i className="fa-solid fa-v"></i>
        </button>
      </div>
      <div className={`description ${isVisible ? 'show' : 'hide'}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutInfo;

