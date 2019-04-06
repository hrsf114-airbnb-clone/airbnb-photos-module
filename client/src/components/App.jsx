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
    };
    this.handleClick = this.handleClick.bind(this);
    this.shiftThumbnails = this.shiftThumbnails.bind(this);
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
          currentPhoto: response[0],
          hasMounted: true,
          translateValue: (response.length / 2) * 110,
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
      const currentPhotoIdx = photo.photoNum - 1;
      this.setState({
        currentPhoto: photo,
      }, () => this.shiftThumbnails(currentPhotoIdx));
    } else {
      const { name } = e.target;
      if (name === 'return') {
        document.body.style.backgroundColor = 'white';
        this.setState({
          showCarousel: false,
        });
      } else {
        const currentPhotoIdx = currentPhoto.photoNum - 1;
        if (name === 'back' && currentPhotoIdx > 0) {
          const newPhoto = photos[currentPhotoIdx - 1];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails(currentPhotoIdx));
        } else if (name === 'back' && currentPhotoIdx === 0) {
          const newPhoto = photos[photos.length - 1];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails(currentPhotoIdx));
        } else if (name === 'forward' && currentPhotoIdx < photos.length - 1) {
          const newPhoto = photos[currentPhotoIdx + 1];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails(currentPhotoIdx));
        } else if (name === 'forward' && currentPhotoIdx === photos.length - 1) {
          const newPhoto = photos[0];
          this.setState({
            currentPhoto: newPhoto,
          }, () => this.shiftThumbnails(currentPhotoIdx));
        }
      }
    }
  }

  shiftThumbnails(currentPhotoIdx) {

    this.setState({
      translateValue: 110*currentPhotoIdx
    })
    // const { translateValue } = this.state;
    // if (prevPhotoIdx < currentPhotoIdx) {
    //   this.setState(prevState => ({
    //     translateValue: prevState.translateValue + (110 * (currentPhotoIdx - prevPhotoIdx)),
    //   }));
    // }

    // if (prevPhotoIdx > currentPhotoIdx) {
    //   this.setState(prevState => ({
    //     translateValue: prevState.translateValue - (110 * (prevPhotoIdx - currentPhotoIdx)),
    //   }));
    // }

  }

  renderView() {
    const { photos, hasMounted, showCarousel, currentPhoto, translateValue } = this.state;
    if (hasMounted) {
      if (!showCarousel) {
        return <MainView photos={photos} handleClick={this.handleClick} showCarousel={showCarousel} />;
      }
      return <CarouselView photos={photos} currentPhoto={currentPhoto} handleClick={this.handleClick} translateValue={translateValue} showCarousel={showCarousel} />;
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
