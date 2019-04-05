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
        <div className="nav-button-container">
          <button type="button" name="back" onClick={e => handleClick(e)}>
            SVG Placeholder
          </button>
        </div>
        <div>
          <Photo photo={currentPhoto} />
        </div>
        <div className="nav-button-container">
          <button type="button" name="forward" onClick={e => handleClick(e)}>
            SVG Placeholder
          </button>
        </div>
      </div>
      <figcaption>
        <div className="fig-caption-space">
          <div className="fig-caption-top">
            <div className="photo-details">
              <div className="photo-description">
                {`${currentPhoto.photoNum}/${photos.length}: ${currentPhoto.description}`}
              </div>
              <div>
                <button type="button">
                  <span>
                    Hide photo list
                    insert svg
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="thumbnail-view-container">
            <ul className="thumbnail-view">
              {photos.map(photo => (
                <li key={photo.photoNum}>
                  <Photo photo={photo} handleClick={handleClick} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </figcaption>
    </div>
  </div>
);


export default CarouselView;
