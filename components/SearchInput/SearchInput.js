import React from 'react';
import { StyleSheet, 
         TextInput, 
         View, 
        } from 'react-native';
import PropTypes from 'prop-types';


export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  /** Change the state to match the text written in the inputBox **/
  handleChangeText = (text) => {
    this.setState({text});
  };

  /** Call Parent onSubmit function with the text property **/
  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text }  = this.state;

    if(!text) return;
    onSubmit(text);
    this.setState({text: ''});
  };

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
                onChangeText={this.handleChangeText}
                onSubmitEditing={this.handleSubmitEditing}
            />
        </View>
    );
  }
}

SearchInput.propTypes = {
    // The text we display inside the textbox
    placeholder: PropTypes.string.isRequired,
    // The parent function that is called when user presses 
    // "Enter" inside the searchbox
    onSubmit   : PropTypes.func.isRequired,
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
