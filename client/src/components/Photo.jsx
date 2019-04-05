import React from 'react';

const Photo = ({ photo, handleClick }) => (
  <div className={photo.photoNum === 1 ? 'main' : 'secondary'}>
    <img src={photo.url} alt={photo.description} onClick={() => handleClick(null, photo)} />
  </div>
);

export default Photo;
