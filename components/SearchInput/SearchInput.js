import React from 'react';
import { StyleSheet, 
         TextInput, 
         View, 
        } from 'react-native';
import PropTypes from 'prop-types';


export default class SearchInput extends React.Component {
  render() {
      let { placeholder } = this.props;
    return (
        <View style={styles.container}>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                clearButtonMode="always"
            />
        </View>
    );
  }
}

SearchInput.propTypes = {
    // The text we display inside the textbox
    placeholder: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  textInput: {
      flex: 1,
      color: 'white'
  }
});
