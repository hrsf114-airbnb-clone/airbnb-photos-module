import React from 'react';
import Photo from './Photo.jsx';
import Caption from './Caption.jsx';

const CarouselView = ({ photos, currentPhoto, handleClick, translateValue }) => (
  <div className="carousel-page-container">
    <div className="return-container">
      <button type="button" name="return" onClick={e => handleClick(e)}>
        <img className="return" name="return" src="./images/return.svg" alt="return-nav" />
      </button>
    </div>
    <div className="main-content-container">
      <div className="main-photo-nav-container">
        <div className="nav-button-container">
          <button type="button" name="back" onClick={e => handleClick(e)}>
            <img className="back" name="back" src="./images/left-arrow.svg" alt="back-nav" />
          </button>
        </div>
        <div>
          <Photo photo={currentPhoto} />
        </div>
        <div className="nav-button-container">
          <button type="button" name="forward" onClick={e => handleClick(e)}>
            <img className="forward" name="forward" src="./images/right-arrow.svg" alt="forward-nav" />
          </button>
        </div>
      </div>
      <Caption photos={photos} 
        currentPhoto={currentPhoto}
        handleClick={handleClick}
        translateValue={translateValue}
      />
    </div>
  </div>
);


export default CarouselView;
