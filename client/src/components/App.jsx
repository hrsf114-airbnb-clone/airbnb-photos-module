import React, { Fragment } from 'react';
import Photo from './Photo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: null,
      photos: [],
      view: 'main',
      hasMounted: false,
    };
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    fetch(`../../api${window.location.pathname}`)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          photos: response,
          hasMounted: true,
        });
      });
  }

  renderView() {
    const { photos, hasMounted } = this.state;

    if (hasMounted) {
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
    return 'Loading';
  }

  render() {
    return (
      <Fragment>
        {this.renderView()}
      </Fragment>
    );
  }
}

export default App;
