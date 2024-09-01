import React from 'react';
import logo from '../../assets/images/LOGO-B-A-W.png'; 

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;