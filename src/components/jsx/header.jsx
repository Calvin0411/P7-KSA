import React from 'react';
import logo from '../img/logo.png'; 

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de l'entreprise" />
      <nav>
        <span>Accueil</span>
        <span>A Propos</span>
      </nav>
    </header>
  );
}

export default Header;