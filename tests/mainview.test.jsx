import React from 'react';
import { shallow } from 'enzyme';
import MainView from '../client/src/components/MainView.jsx';
import Photo from '../client/src/components/Photo.jsx';
import photos from './__mocks__/photos.js';


describe('<MainView />', () => {
  const wrapper = shallow(<MainView photos={photos} />);

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
