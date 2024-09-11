import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/jsx/header';
import Banner from './components/jsx/banner';
import { Card } from './components/jsx/cards';
import cardsData from './data/cardsData';
import Footer from './components/jsx/footer';
import About from './components/jsx/about';
import ApartmentDetail from './components/jsx/ApartmentDetail';
import Error404 from './components/jsx/error-404';

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
                <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
              ))}
            </div>
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<ApartmentDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;