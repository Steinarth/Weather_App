import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Platform } from 'react-native';

export default class ErrorC extends Component {
  render() {
    return (
      <View >

        <Image
            style={styles.errorGlobe} 
            source={require('../../assets/globe.gif')} 
        />

        <Text style={[styles.smallText, styles.textStyle]}>
            Could not load the weather, please try a different
            city.
        </Text>
    
      </View>


    );
  }
}

const styles = StyleSheet.create({
  errorGlobe: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom : 20,
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



      