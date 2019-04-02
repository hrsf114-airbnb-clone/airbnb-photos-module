import React from 'react';

const Photo = ({ photo }) => (
  <div>
    <img src={photo.url} alt={photo.description} />
  </div>
);

export default Photo;
