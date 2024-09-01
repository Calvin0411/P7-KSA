import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import du routeur
import Header from './components/jsx/header';
import Banner from './components/jsx/banner';
import { Card } from './components/jsx/cards';
import cardsData from './data/cardsData';
import Footer from './components/jsx/footer';
import About from './components/jsx/about'; 


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <Banner />
            <div className="cards-container">
              {cardsData.map(card => (
                <Card key={card.id} title={card.title} cover={card.cover} />
              ))}
            </div>
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;