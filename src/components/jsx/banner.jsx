import React from 'react';

function Banner({ bannerText, bannerImage }) {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner-image" />
      {bannerText && <p className="banner-content">{bannerText}</p>}
    </div>
  );
}

export default Banner;
