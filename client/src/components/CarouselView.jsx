import React from 'react';
import Photo from './Photo.jsx';

const CarouselView = ({ photos, currentPhoto, handleClick }) => (
  <div className="carousel-page-container">
    <div className="return-container">
      <button type="button" name="return" onClick={e => handleClick(e)}>
          SVG Placeholder
      </button>
    </div>
    <div className="main-content-container">
      <div className="main-photo-nav-container">
        <button type="button" name="back" onClick={e => handleClick(e)}>
          SVG Placeholder
        </button>
        <div>
          <Photo photo={currentPhoto} />
        </div>
        <button type="button" name="forward" onClick={e => handleClick(e)}>
          SVG Placeholder
        </button>
      </div>
      <figcaption>
        <div className="fig-caption-divider">
          <div className="photo-details">
            <div className="photo-description">
              {`${currentPhoto.photoNum}/${photos.length}: ${currentPhoto.description}`}
            </div>
            <div>
              <button type="button">
                Hide photo list
              </button>
            </div>
          </div>

        </div>
        <ul className="thumbnail-view">
          {photos.map(photo => (
            <li>
              <Photo key={photo.photoNum} photo={photo} handleClick={handleClick} />
            </li>
          ))}
        </ul>
      </figcaption>
    </div>
  </div>
);


export default CarouselView;
