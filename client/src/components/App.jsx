import React, { Fragment } from 'react';
import MainView from './MainView.jsx';
import CarouselView from './CarouselView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPhoto: null,
      hasMounted: false,
      showCarousel: false,
      translateValue: 0,
      showImageSlider: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.shiftThumbnails = this.shiftThumbnails.bind(this);
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    const photosUri = `/api${window.location.pathname}`;
    fetch(photosUri)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          photos: response,
          currentPhoto: response[0],
          hasMounted: true,
        });
      });
  }

  handleClick(e, photo) {
    const { showCarousel, currentPhoto, photos } = this.state;
    const otherServices = document.getElementById('listing-booking-container');
    if (!showCarousel) {
      if (otherServices) {
        otherServices.style.display = 'none';
      }
      document.body.style.backgroundColor = '#262626';
      this.setState({
        showCarousel: true,
      });
    }
    if (!e) {
      this.setState({
        currentPhoto: photo,
      }, () => this.shiftThumbnails());
    } else {
      const { name } = e.target;
      
      if (name === 'return') {
        document.body.style.backgroundColor = 'white';
        if (otherServices) {
          otherServices.style.display = 'flex';
        }
        this.setState({
          showCarousel: false,
        });
      } else {
        const currentPhotoIdx = currentPhoto.photoNum - 1;
       
        if (name === 'back' && currentPhotoIdx > 0) {
          const newPhoto = photos[currentPhotoIdx - 1];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails());
        } else if (name === 'back' && currentPhotoIdx === 0) {
          const newPhoto = photos[photos.length - 1];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails());
        } else if (name === 'forward' && currentPhotoIdx < photos.length - 1) {
          const newPhoto = photos[currentPhotoIdx + 1];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails());
        } else if (name === 'forward' && currentPhotoIdx === photos.length - 1) {
          const newPhoto = photos[0];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails());
        }

        if (name === 'toggleImageSlider') {
          this.setState(prevState => ({ showImageSlider: !prevState.showImageSlider }));
        }
      }
    }
  }

  shiftThumbnails() {
    const { currentPhoto } = this.state;
    if (currentPhoto.photoNum <= 8) {
      this.setState({
        translateValue: 0,
      });
    } else {
      this.setState({
        translateValue: -110 * (currentPhoto.photoNum - 8),
      });
    }
  }

  renderView() {
    const {
      photos,
      hasMounted,
      showCarousel,
      currentPhoto,
      translateValue,
      showImageSlider,
    } = this.state;
    if (hasMounted) {
      if (!showCarousel) {
        return (
          <MainView
            photos={photos}
            handleClick={this.handleClick}
            showCarousel={showCarousel}
          />
        );
      }
      return (
        <CarouselView
          photos={photos}
          currentPhoto={currentPhoto}
          handleClick={this.handleClick}
          translateValue={translateValue}
          showImageSlider={showImageSlider}
        />
      );
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
