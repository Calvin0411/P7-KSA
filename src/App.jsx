import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/jsx/header';
import Banner from './components/jsx/banner';
import Footer from './components/jsx/footer';
import About from './components/jsx/about';
import ApartmentDetail from './components/jsx/ApartmentDetail';
import Error404 from './components/jsx/error-404';
import { CardsContainer } from './components/jsx/cards'; // Assure-toi que le chemin est correct

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <Banner />
            <CardsContainer />
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