import React from 'react';
import bannerImage from '../img/Mask-Group.png';

function Banner() {
  return (
    <div className="banner">
        <img src={bannerImage} alt="Bannière" className="banner-image" />
        <p className="banner-content">Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
