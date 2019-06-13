import React from 'react';
import { Text } from 'react-native';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import WeatherInformation from './WeatherInformation';

describe('<WeatherInformation />', () => {
    // Initialize Adapter for Enzyme ..
    configure({ adapter: new Adapter() });

  it('should render three <Text /> attributes', () => {
    const wrapper = shallow(
        <WeatherInformation 
            location={'Dubai'}
            weather={'Light Cloud'}
            temperature={17}
        />);
        
    expect(wrapper.find(Text).length).toEqual(3);
  });

  it('should render the props inside the <Text /> attributes', () => {
    const wrapper = shallow(
        <WeatherInformation 
            location={'Dubai'}
            weather={'Light Cloud'}
            temperature={17}
        />);

        
        // Render the Text component to see what the text is
        // location (at-0)
        expect(wrapper.find(Text).at(0).render().text()).toEqual('Dubai');
        // weather (at-1)
        expect(wrapper.find(Text).at(1).render().text()).toEqual('Light Cloud');
        // temperature (at-2)
        expect(wrapper.find(Text).at(2).render().text()).toEqual('17°');
  });
});