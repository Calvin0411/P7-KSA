import React from 'react';

const DescriptionSection = ({ content, uniqueId }) => {
  return (
    <div className="expandable-section">
      <input type="checkbox" id={uniqueId} className="toggle-checkbox" />
      <div className="toggle-header">
        <h2>Description</h2>
        <label htmlFor={uniqueId} className="toggle-icon-label">
          <span className="toggle-icon">v</span>
        </label>
      </div>
      <div className="section-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DescriptionSection;






