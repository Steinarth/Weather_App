import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import PropTypes from 'prop-types';

export default class WeatherInformation extends Component {
	render() {
		const { location, weather, temperature } = this.props;
		return (
			<View >
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


		);
	}
}

WeatherInformation.propTypes = {
  // The name of the city for example: 'San Francisco'
  location: PropTypes.string.isRequired,
  // Weather description for example: 'Light cloud'
  weather:  PropTypes.string.isRequired,
  // The temperature in the city for example : 17
  temperature: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
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



