import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import photos from './__mocks__/photos.js';


describe('<App />', () => {
  const wrapper = shallow(<App />);
  wrapper.setState(
    {
      photos,
      hasMounted: true,
      currentPhoto: photos[0],
      showCarousel: true,
      translateValue: Math.random() * 10,
    },
  );

  test('photo order is preserved in state', () => {
    expect(wrapper.state().photos[0].photoNum).toBe(1);
  });

  test('shiftThumbnails() updates translateValue state', () => {
    const shiftThumbnails = () => {
      const currentPhoto = wrapper.state('currentPhoto');
      if (currentPhoto.photoNum <= 8) {
        wrapper.setState({
          translateValue: 0,
        });
      } else {
        wrapper.setState({
          translateValue: -110 * (currentPhoto.photoNum - 8),
        });
      }
    };
    shiftThumbnails();
    expect(wrapper.state('translateValue')).toEqual(0);
  });

  test('handleClick() updates showCarousel state', () => {
    const e = {
      target: {
        name: 'return',
      },
    };
    const handleClick = (event, photo) => {
      const { name } = event.target;
      if (name) {
        wrapper.setState({
          showCarousel: false,
        });
      }
    };
    handleClick(e);
    expect(wrapper.state('showCarousel')).toEqual(false);
  });
});
