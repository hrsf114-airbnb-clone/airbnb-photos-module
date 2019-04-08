import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider from '../client/src/components/ImageSlider.jsx';
import Photo from '../client/src/components/Photo.jsx';
import photos from './__mocks__/photos.js';

describe('<ImageSlider />', () => {
  const wrapper = shallow(<ImageSlider photos={photos} translateValue={110} />);

  test('image list exists', () => {
    expect(wrapper.find('.thumbnail-wrapper')).toHaveLength(1);
  });

  test('Correct number of Photo components exist in image list', () => {
    expect(wrapper.find(Photo)).toHaveLength(8);
  });

  test('image list translateX props is passed in', () => {
    const photoListStyle = wrapper.find('.thumbnail-wrapper').prop('style');
    expect(photoListStyle).toEqual({ transform: 'translateX(110px)' });
  });
});
