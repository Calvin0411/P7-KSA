import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from '../../data/cardsData';
import Slider from './slider';
import ExpandableSection from './expendablesection';
import Presentation from './presentation';
import Error404 from './error-404';

function ApartmentDetail() {
  const { id } = useParams();
  const apartment = cardsData.find((item) => item.id === id);

  if (!apartment) {
    return <Error404 />;
  }

  return (
    <div className="apartment-detail">
      <Slider pictures={apartment.pictures} />

      <Presentation apartment={apartment} />

      <div className="expandable-sections">
        <ExpandableSection
          title="Description"
          content={apartment.description}
          uniqueId="toggle-description"
        />
        <ExpandableSection
          title="Équipements"
          listItems={apartment.equipments}
          uniqueId="toggle-equipments"
        />
      </div>
    </div>
  );
}

export default ApartmentDetail;