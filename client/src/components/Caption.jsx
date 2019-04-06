import React from 'react';
import ImageSlider from './ImageSlider.jsx';

const Caption = ({ photos, currentPhoto, handleClick, translateValue, showImageSlider}) => (
  <div className="caption">
    <div className="caption-space">
      <div className="caption-top">
        <div className="photo-details">
          <div className="photo-description">
            {`${currentPhoto.photoNum}/${photos.length}: ${currentPhoto.description}`}
          </div>
          <div className="toggler-slider">
            <button type="button" className="toggleImageSlider" name="toggleImageSlider" onClick={e => handleClick(e)}>
              <div>
                {showImageSlider ? "Hide photo list" : "Show photo list"} 
              </div>
              {showImageSlider
                ? <img className="down" name="toggleImageSlider" src="./images/down-arrow.svg" alt="hide-nav" />
                : <img className="down" name="toggleImageSlider" src="./images/up-arrow.svg" alt="show-nav" />
               }
            </button>
          </div>
        </div>
      </div>
      <div className="thumbnail-view-container">
        {showImageSlider 
          ? <ImageSlider photos={photos} handleClick={handleClick} translateValue={translateValue} />
          : <div />
        }
      </div>
    </div>
  </div>
);

export default Caption;
