import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/images/LOGO.png'; 

function Header() {
  return (
    <header>
      <h1>
        <img src={logo} alt="Logo de KASA" />
      </h1>
      <nav>
        <Link to="/">Accueil</Link> 
        <Link to="/about">À Propos</Link>
      </nav>
    </header>
  );
}

export default Header;