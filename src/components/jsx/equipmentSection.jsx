import React from 'react';

const EquipmentsSection = ({ equipments, uniqueId }) => {
  return (
    <div className="expandable-section">
      <input type="checkbox" id={uniqueId} className="toggle-checkbox" />
      <div className="toggle-header">
        <h2>Équipements</h2>
        <label htmlFor={uniqueId} className="toggle-icon-label">
          <span className="toggle-icon">v</span>
        </label>
      </div>
      <div className="section-content">
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EquipmentsSection;

