
import React from 'react';
import Header from './components/jsx/header';
import Banner from './components/jsx/banner';
import { Card } from './components/jsx/cards';
import cardsData from './data/cardsData';
import Footer from './components/jsx/footer'; 

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
      <Footer />
    </div>
  );
}

export default App;
