import React from 'react';
import Banner from './components/jsx/banner';
import ExpandableSection from './components/jsx/expendablesection';
import bannerAbout from "./assets/images/banner-about.png";

function About() {
  const infoData = [
    {
      id: 0,
      title: 'Fiabilité',
      description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes'
    },
    {
      id: 1,
      title: 'Respect',
      description: 'Ma bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbaion du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      id: 2,
      title: 'Service',
      description: 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
    },
    {
      id: 3,
      title: 'Sécurité',
      description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hote qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous  organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    },
  ];

  return (
    <div>
      <Banner 
        bannerImage={bannerAbout} 
      />
      <div className="about-content">
        {infoData.map(info => (
          <ExpandableSection
            key={info.id}
            title={info.title}
            content={info.description}
            uniqueId={`toggle-${info.title}`}
          />
        ))}
      </div>
    </div>
  );
}

export default About;