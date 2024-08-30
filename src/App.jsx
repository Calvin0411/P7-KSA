// src/App.jsx
import React from 'react';
import Header from './components/jsx/header';
import Banner from './components/jsx/banner';
import { Card } from './components/jsx/cards';
import cardsData from './data/cardsData'; // Importer les données

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="cards-container">
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} cover={card.cover} />
        ))}
      </div>
    </div>
  );
}

export default App;
