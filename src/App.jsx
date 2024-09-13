import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/jsx/header';
import Footer from './components/jsx/footer';
import About from './about';
import ApartmentDetail from './ApartmentDetail';
import Error404 from './components/jsx/error-404';
import Home from './components/jsx/home'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apartment/:id" element={<ApartmentDetail />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
