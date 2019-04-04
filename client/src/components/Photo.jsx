import React from 'react';

const Photo = ({ photo }) => (
  <div className={photo.photoNum === 1 ? 'main' : 'secondary'}>
    <img src={photo.url} alt={photo.description} />
  </div>
);

export default Photo;
