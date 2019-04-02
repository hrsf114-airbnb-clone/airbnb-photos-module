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
    const photosToShow = photos.slice(0, 5);

    if (hasMounted) {
      return (
        <div className="container">
          <Photo className="main" photo={photosToShow[0]} />
          <div className="right">
            {photosToShow.slice(1, 3).map(photo => <Photo className="secondary" photo={photo} />)}
          </div>
          <div className="right">
            {photosToShow.slice(3, 5).map(photo => <Photo className="secondary" photo={photo} />)}
          </div>
        </div>
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
