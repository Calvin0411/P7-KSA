import React from 'react';
import vectorImage from '../../assets/images/Vector.png'; 

const ExpandableSection = ({ title, content, listItems, uniqueId }) => {
  return (
    <div className="expandable-section">
      <input type="checkbox" id={uniqueId} className="toggle-checkbox" />
      <div className="toggle-header">
        <h2>{title}</h2>
        <label htmlFor={uniqueId} className="toggle-icon-label">
          <img src={vectorImage} alt="Toggle" className="toggle-icon" />
        </label>
      </div>
      <div className="section-content">
        {listItems ? (
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default ExpandableSection;
