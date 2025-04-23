import React from 'react';

const PublicImage = () => (
  <div>
    <h3>Image from public/Images folder:</h3>
    <img src={`${process.env.PUBLIC_URL}/Images/public-image.jpg`} alt="Public folder" width={200} />
  </div>
);

export default PublicImage;