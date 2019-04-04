import React, { Fragment } from 'react';
import Photo from './Photo.jsx';
import MainView from './MainView.jsx'
import CarouselView from './CarouselView.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: null,
      photos: [],
      hasMounted: false,
      showCarousel: false,
    };
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

  renderView() {
    const { photos, hasMounted, showCarousel } = this.state;

    if (hasMounted) {
      if (!showCarousel) {
        return <MainView photos={photos} />;
      }
      return <CarouselView photos={photos} />;
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
