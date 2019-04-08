import React from 'react';
import ImageSlider from './ImageSlider.jsx';

const Caption = ({ photos, currentPhoto, handleClick, translateValue, showImageSlider}) => (
  <div className="caption">
    <div className="caption-space">
      <div className="caption-top">
        <div className="photo-details">
          <div className="caption-text">
            {`${currentPhoto.photoNum}/${photos.length}: ${currentPhoto.description}`}
          </div>
          <button type="button" className="toggleImageSlider" name="toggleImageSlider" onClick={e => handleClick(e)}>
            {showImageSlider ? "Hide photo list" : "Show photo list"} 
            {showImageSlider
              ? <img className="toggle" name="toggleImageSlider" src="https://s3-us-west-1.amazonaws.com/hrsf-fec/svg/down-arrow.svg" alt="hide-nav" />
              : <img className="toggle" name="toggleImageSlider" src="https://s3-us-west-1.amazonaws.com/hrsf-fec/svg/up-arrow.svg" alt="show-nav" />
              }
          </button>
        </div>
      </div>
      <div className={showImageSlider ? "thumbnail-view-container open" : "thumbnail-view-container hidden"}>
        <ImageSlider photos={photos} handleClick={handleClick} translateValue={translateValue} />
      </div>
    </div>
  </div>
);

export default Caption;
