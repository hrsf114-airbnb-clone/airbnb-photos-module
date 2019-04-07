import React from 'react';
import { shallow } from 'enzyme';
import Caption from '../client/src/components/Caption.jsx';
import ImageSlider from '../client/src/components/ImageSlider.jsx';
import photos from './__mocks__/photos.js';

describe('<Caption />', () => {
  const clickRecorder = jest.fn();
  const wrapper = shallow(<Caption handleClick={clickRecorder} photos={photos} currentPhoto={photos[0]} showImageSlider />);

  test('caption text exists', () => {
    expect(wrapper.find('.caption-text').text()).toEqual('1/8: Dolores fuga aut.');
  });

  test('Image Slider renders', () => {
    expect(wrapper.find(ImageSlider).exists()).toBeTruthy();
  });

  test('CSS to handle hiding Image Slider updates when props change', () => {
    wrapper.setProps({ showImageSlider: false });
    expect(wrapper.find('.thumbnail-view-container.hidden').exists()).toBeTruthy();
  });


  test('click handlers are passed down to toggleImageSlider button', () => {
    wrapper.find('button.toggleImageSlider').simulate('click');
    expect(clickRecorder).toHaveBeenCalledTimes(1);
  });
});
