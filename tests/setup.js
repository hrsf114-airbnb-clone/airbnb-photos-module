import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'node-fetch';

configure({ adapter: new Adapter() });

// mock fetch and window object so jest runs
global.fetch = fetch;
global.window = {
  location: {
    pathName: '/rooms/42',
  },
};
