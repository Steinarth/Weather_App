//This is some testing ...

import React from 'react';
import { KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import App from './App';
import ErrorC from './components/Error/ErrorC';
import WeatherInformation from './components/WeatherInformation/WeatherInformation';
import SearchInput from './components/SearchInput/SearchInput';
import { fetchLocationId, fetchWeather } from './utils/api';

describe('<App />', () => {
    // Initialize Adapter for Enzyme ..
    configure({ adapter: new Adapter() });

  it('should render three <KeyboardAvoidingView /> component so that the keyboard does not go over the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(KeyboardAvoidingView).length).toEqual(1);
  });

  it('Should render the loading icon when loading state = true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: true })

    expect(wrapper.find(ActivityIndicator).length).toEqual(1);
  });    image = jest.fn().mockReturnValue('fake image');


  it('Should NOT render the loading icon when loading state = false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: false })

    expect(wrapper.find(ActivityIndicator).length).toEqual(0);
  });

  it('Should render the error page if the error State = true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ error: true, loading: false })

    expect(wrapper.find(ErrorC).length).toEqual(1);
  });

  it('Should render the weatherInformation if not loading and not error', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ error: false, loading: false, weather: 'Cloudy', temperature: 17, location: 'Dubai' });

    expect(wrapper.find(WeatherInformation).length).toEqual(1);
  });

  it('Should render an inputBox if in error Page', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ error: true, loading: false, weather: 'Cloudy', temperature: 17, location: 'Dubai' });

    expect(wrapper.find(SearchInput).length).toEqual(1);
  });

  it('Should render an inputBox when not in error page and not loading', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ error: false, loading: false, weather: 'Cloudy', temperature: 17, location: 'Dubai' });

    expect(wrapper.find(SearchInput).length).toEqual(1);
  });
    
});