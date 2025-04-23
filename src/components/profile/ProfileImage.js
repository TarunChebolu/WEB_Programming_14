import React from 'react';

const ProfileImage = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} style={{ width: '150px', borderRadius: '50%' }} />
  </div>
);

export default ProfileImage;