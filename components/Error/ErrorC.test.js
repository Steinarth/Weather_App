import React from 'react';
import { Text, Image } from 'react-native';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import ErrorC from './ErrorC';




describe('<ErrorC />', () => {
    // Initialize Adapter for Enzyme ..
    configure({ adapter: new Adapter() });

  it('should render One <Text /> components containing error message', () => {
    const wrapper = shallow( <ErrorC /> );
    expect(wrapper.find(Text).length).toEqual(1);
  });

  it('should render One <Image /> components containing gif', () => {
    const wrapper = shallow( <ErrorC /> );
    expect(wrapper.find(Image).length).toEqual(1);
  });
});