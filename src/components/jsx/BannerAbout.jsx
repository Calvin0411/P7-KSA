import React from 'react';
import bannerImage from '../../assets/images/banner-about.png';

function BannerAbout() {
  return (
    <div className="banner">
        <img src={bannerImage} alt="Bannière À propos" className="banner-image" />
    </div>
  );
}

export default BannerAbout;
