import React from 'react';
import Photo from './Photo.jsx';

function MainView({ photos }) {
  if (photos.length >= 4) {
    return (
      <div className="container">
        <div className="left">
          <Photo photo={photos[0]} />
        </div>
        <div className="right">
          {photos.slice(1, 3).map(photo => <Photo key={photo.photoNum} photo={photo} />)}
        </div>
        <div className="right">
          {photos.slice(3, 5).map(photo => <Photo key={photo.photoNum} photo={photo} />)}
        </div>
      </div>
    );
  }
  if (photos.length >= 2) {
    return (
      <div className="container">
        <div className="left">
          <Photo photo={photos[0]} />
        </div>
        <div className="right">
          {photos.slice(1, 3).map(photo => <Photo key={photo.photoNum} photo={photo} />)}
        </div>
      </div>
    );
  }
  if (photos.length === 1) {
    return (
      <div className="container">
        <div className="left">
          <Photo photo={photos[0]} />
        </div>
      </div>
    );
  }
}

export default MainView;
