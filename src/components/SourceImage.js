import React from 'react';
import srcImage from '../Images/src-image.jpg';

const SourceImage = () => (
  <div>
    <h3>Image from src/Images folder:</h3>
    <img src={srcImage} alt="SRC folder" width={200} />
  </div>
);

export default SourceImage;