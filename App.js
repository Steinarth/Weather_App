import React from 'react';
import { Platform, 
         StyleSheet, 
         Text,
         KeyboardAvoidingView, 
         View, 
         ImageBackground,
         ActivityIndicator,
         StatusBar } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import { fetchLocationId, fetchWeather } from './utils/api';
         
import SearchInput from './components/SearchInput/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      error: false,
      loading: false,
      temperature: 0,
      weather: '',
    };

    this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
  }


  componentDidMount() {
    this.handleUpdateLocation('San Francisco');
  };

  // Update the information about the city from the inputbox
  handleUpdateLocation = async (city) => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId,
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  render() {
    const { location, weather, temperature, loading, error } = this.state;
    return (
        
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >

      <ImageBackground
        source={getImageForWeather(weather)}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
      <View style={styles.detailsContainer}>
      
        <Text style={[ styles.largeText, styles.textStyle]} id="cityName">
          {location}
        </Text>
        
        <Text style={[ styles.smallText, styles.textStyle]}>
          {weather}
        </Text>
        
        <Text style={[ styles.largeText, styles.textStyle]}>
          {temperature}°
        </Text>

        <SearchInput 
          placeholder={'Search any City'}
          onSubmit={this.handleUpdateLocation}
        />
        </View>
        </ImageBackground>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
