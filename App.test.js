//This is some testing ...

import React from 'react';
import { Text, Platform } from 'react-native';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import App from './App';
import { platform } from 'os';




describe('<App />', () => {
    // Initialize Adapter for Enzyme ..
    configure({ adapter: new Adapter() });

  it('should render three <Text /> components', () => {
    Platform.OS = 'android';
    const wrapper = shallow(<App />);
    expect(wrapper.find(Text).length).toEqual(3);
  });
});