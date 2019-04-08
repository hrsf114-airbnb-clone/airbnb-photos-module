import React from 'react';
import { shallow } from 'enzyme';
import CarouselView from '../client/src/components/CarouselView.jsx';
import Photo from '../client/src/components/Photo.jsx';
import Caption from '../client/src/components/Caption.jsx';
import photos from './__mocks__/photos.js';

describe('<CarouselView />', () => {
  const clickRecorder = jest.fn();
  const wrapper = shallow(<CarouselView handleClick={clickRecorder} photos={photos} currentPhoto={photos[0]} showImageSlider />);

  test('navigiation buttons exist', () => {
    expect(wrapper.find('button')).toHaveLength(3);
  });

  test('click events are passed down in props', () => {
    expect(clickRecorder).toHaveBeenCalledTimes(0);
    wrapper.find('button.return').simulate('click');
    wrapper.find('button.forward').simulate('click');
    wrapper.find('button.back').simulate('click');
    expect(clickRecorder).toHaveBeenCalledTimes(3);
  });

  test('main photo exists', () => {
    expect(wrapper.find(Photo).exists()).toBeTruthy();
  });

  test('Caption component exists', () => {
    expect(wrapper.find(Caption).exists()).toBeTruthy();
  });
});
