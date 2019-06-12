import React from 'react';
import { Platform, 
         StyleSheet, 
         Text,
         KeyboardAvoidingView, 
         View, 
         ImageBackground,
         ActivityIndicator,
        } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import { fetchLocationId, fetchWeather } from './utils/api';
         
import SearchInput from './components/SearchInput/SearchInput';
import ErrorC from './components/Error/ErrorC';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      error: false,
      loading: false,
      temperature: 0,
      weather: '',
      image: undefined,
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
        const { location, weather, temperature } = await fetchWeather(locationId);
        const image = await getImageForWeather(weather); 

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
          image
        });

      } catch (e) {
        this.setState({
          loading: false,
          error: true,
          image: ''
      });
      }
    });
  };

  render() {
    const { loading, error, location, weather, temperature, image } = this.state;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        
        {<ImageBackground
          source={image || undefined}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
        
          <View style={styles.detailsContainer}>
            <ActivityIndicator
              animating={loading}
              color="white"
              size="large"
            />

            {!loading && (
              <View>
                {error && (
                  <ErrorC />
                )}

                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]} >
                      {location}
                    </Text>
                    
                    <Text style={[styles.smallText, styles.textStyle]} >
                      {weather}
                    </Text>

                    <Text style={[styles.largeText, styles.textStyle]} >
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                )}

                <SearchInput
                  placeholder="Search any city"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
        }
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
  }
});