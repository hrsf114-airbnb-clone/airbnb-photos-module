import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import Photo from '../client/src/components/Photo';
import photos from './__mocks__/photos.js';


describe('<App />', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ photos, hasMounted: true });

  test('photo order is preserved in state', () => {
    expect(wrapper.state().photos[0].photoNum).toBe(1);
  });

  test('renders 5 < Photo /> components', () => {
    expect(wrapper.find(Photo)).toHaveLength(5);
  });

  test('renders a container class for photos', () => {
    expect(wrapper.find('.container')).toHaveLength(1);
  });

  test('has one main photo container', () => {
    expect(wrapper.find('.left')).toHaveLength(1);
  });

  test('has two secondary photo containers', () => {
    expect(wrapper.find('.right')).toHaveLength(2);
  });

});
