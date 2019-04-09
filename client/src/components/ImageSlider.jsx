import React from 'react';
import Photo from './Photo.jsx';

const ImageSlider = ({ photos, translateValue, handleClick }) => (
  <ul
    className="thumbnail-wrapper"
    style={{
      transform: `translateX(${translateValue}px)`,
    }}
  >
    {photos.map(photo => (
      <li className="photo-list-item" key={photo.photoNum}>
        <Photo photo={photo} handleClick={handleClick} />
      </li>
    ))}
  </ul>
);

export default ImageSlider;
