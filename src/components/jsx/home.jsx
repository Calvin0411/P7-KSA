import React from 'react';
import Banner from './banner';
import { CardsContainer } from './cards';
import bannerHome from '../../assets/images/banner-home.png'; 

const Home = () => {
  return (
    <div>
      <Banner 
        bannerText="Chez vous, partout et ailleurs" 
        bannerImage={bannerHome} 
      />
      <CardsContainer />
    </div>
  );
};

export default Home;
