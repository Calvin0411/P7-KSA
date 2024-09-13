import React from 'react';
import { useParams } from 'react-router-dom';
import cardsData from './data/cardsData';
import Slider from './components/jsx/slider';
import ExpandableSection from './components/jsx/expendablesection';
import Presentation from './components/jsx/presentation';
import Error404 from './components/jsx/error-404';

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