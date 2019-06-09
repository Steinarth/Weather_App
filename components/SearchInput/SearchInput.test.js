//This is some testing ...

import React from 'react';
import { TextInput } from 'react-native';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import SearchInput from './SearchInput';




describe('<SearchInput />', () => {
    // Initialize Adapter for Enzyme ..
    configure({ adapter: new Adapter() });

  it('should render three <Text /> components', () => {
    const wrapper = shallow(
        <SearchInput 
            placeholder={'Search any City'}
        />);
    expect(wrapper.find(TextInput).length).toEqual(1);
  });
});