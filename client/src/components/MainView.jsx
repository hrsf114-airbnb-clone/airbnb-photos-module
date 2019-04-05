import React from 'react';
import Photo from './Photo.jsx';

function MainView({ photos, handleClick }) {
  if (photos.length >= 4) {
    return (
      <div className="main-view-container">
        <div className="left">
          <Photo photo={photos[0]} handleClick={handleClick} />
        </div>
        <div className="right">
          {photos.slice(1, 3).map(photo => <Photo key={photo.photoNum} photo={photo} handleClick={handleClick} />)}
        </div>
        <div className="right">
          {photos.slice(3, 5).map(photo => <Photo key={photo.photoNum} photo={photo} handleClick={handleClick} />)}
        </div>
      </div>
    );
  }
  if (photos.length >= 2) {
    return (
      <div className="main-view-container">
        <div className="left">
          <Photo photo={photos[0]} handleClick={handleClick} />
        </div>
        <div className="right">
          {photos.slice(1, 3).map(photo => <Photo key={photo.photoNum} photo={photo} handleClick={handleClick} />)}
        </div>
      </div>
    );
  }
  if (photos.length === 1) {
    return (
      <div className="main-view-container">
        <div className="left">
          <Photo photo={photos[0]} handleClick={handleClick} />
        </div>
      </div>
    );
  }
}

export default MainView;
