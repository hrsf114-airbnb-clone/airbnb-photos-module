import React from 'react';
import ImageSlider from './ImageSlider.jsx';

const Caption = ({ photos, currentPhoto, handleClick, translateValue, showCarousel}) => (
  <div className="caption">
    <div className="caption-space">
      <div className="caption-top">
        <div className="photo-details">
          <div className="photo-description">
            {`${currentPhoto.photoNum}/${photos.length}: ${currentPhoto.description}`}
          </div>
          <div>
            <button type="button">
              <span>
                Hide photo list
                <button type="button" name="down" onClick={e => handleClick(e)}>
                  <img className="down" name="down" src="./images/down-arrow.svg" alt="forward-nav" />
                </button>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="thumbnail-view-container">
        <ImageSlider photos={photos} handleClick={handleClick} translateValue={translateValue} showCarousel={showCarousel} />
      </div>
    </div>
  </div>
);

export default Caption;
