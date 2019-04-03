import React from 'react';

const Photo = ({ photo }) => (
  <img src={photo.url} alt={photo.description} className={photo.photoNum === 1 ? 'main' : 'secondary'} />
);

export default Photo;
