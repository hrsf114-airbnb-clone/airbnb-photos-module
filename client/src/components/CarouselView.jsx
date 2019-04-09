import React from 'react';
import Photo from './Photo.jsx';
import Caption from './Caption.jsx';

const CarouselView = ({ photos, currentPhoto, handleClick, translateValue, showImageSlider }) => (
  <div className="carousel-page-container">
    <div className="return-container">
      <button type="button" className="return" name="return" onClick={e => handleClick(e)}>
        <img className="return" name="return" src="https://s3-us-west-1.amazonaws.com/hrsf-fec/svg/return.svg" alt="return-nav" />
      </button>
    </div>
    <div className="main-content-container">
      <div className="main-photo-nav-container">
        <div className="nav-button-container">
          <button type="button" className="back" name="back" onClick={e => handleClick(e)}>
            <img className="back" name="back" src="https://s3-us-west-1.amazonaws.com/hrsf-fec/svg/left-arrow.svg" alt="back-nav" />
          </button>
        </div>
        <div>
          <Photo photo={currentPhoto} handleClick={handleClick} />
        </div>
        <div className="nav-button-container">
          <button type="button" className="forward" name="forward" onClick={e => handleClick(e)}>
            <img className="forward" name="forward" src="https://s3-us-west-1.amazonaws.com/hrsf-fec/svg/right-arrow.svg" alt="forward-nav" />
          </button>
        </div>
      </div>
      <Caption
        photos={photos}
        currentPhoto={currentPhoto}
        handleClick={handleClick}
        translateValue={translateValue}
        showImageSlider={showImageSlider}
      />
    </div>
  </div>
);


export default CarouselView;
