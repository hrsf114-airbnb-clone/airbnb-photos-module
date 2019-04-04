import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import photos from './__mocks__/photos.js';


describe('<App />', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ photos, hasMounted: true });

  test('photo order is preserved in state', () => {
    expect(wrapper.state().photos[0].photoNum).toBe(1);
  });
});
