import React, { Fragment } from 'react';
import MainView from './MainView.jsx';
import CarouselView from './CarouselView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: null,
      photos: [],
      hasMounted: false,
      showCarousel: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    const photosUri = `../../api${window.location.pathname}`;
    fetch(photosUri)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          photos: response,
          hasMounted: true,
        });
      });
  }

  handleClick(e, photo) {
    const { showCarousel, currentPhoto, photos } = this.state;
    if (!showCarousel) {
      document.body.style.backgroundColor = '#262626';
      this.setState({
        showCarousel: true,
      });
    }
    if (!e) {
      this.setState({
        currentPhoto: photo,
      });
    } else {
      const { name } = e.target;
      if (name === 'return') {
        this.setState(currentState => ({ showCarousel: !currentState.showCarousel }));
      } else {
        const currentPhotoIdx = currentPhoto.photoNum - 1;
        if (name === 'back' && currentPhotoIdx > 0) {
          const newPhoto = photos[currentPhotoIdx - 1];
          this.setState({
            currentPhoto: newPhoto,
          });
        } else if (name === 'forward' && currentPhotoIdx < photos.length - 1) {
          const newPhoto = photos[currentPhotoIdx + 1];
          this.setState({
            currentPhoto: newPhoto,
          });
        }
      }
    }
  }

  renderView() {
    const { photos, hasMounted, showCarousel, currentPhoto } = this.state;
    if (hasMounted) {
      if (!showCarousel) {
        return <MainView photos={photos} handleClick={this.handleClick} />;
      }
      return <CarouselView photos={photos} currentPhoto={currentPhoto} handleClick={this.handleClick} />;
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
