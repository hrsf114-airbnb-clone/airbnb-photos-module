import React from 'react';
import { shallow } from 'enzyme';
import Photo from '../client/src/components/Photo.jsx';
import photos from './__mocks__/photos.js';

describe('<Photo />', () => {
  const wrapper = shallow(<Photo photo={photos[0]} />);

  test('passes in an img url as props', () => {
    expect(wrapper.find('img').prop('src')).toEqual(photos[0].url);
  });

  test('photo description should match the description passed as props', () => {
    expect(wrapper.find('img').prop('alt')).toEqual(photos[0].description);
  });

  test('first photo should be the main photo', () => {
    expect(wrapper.hasClass('main')).toBe(true);
  });
});
