import React, { Component } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

class PlaceAddSection extends Component {
  state = {
    placeName: ""
  }

  textChangedHandler = (text) => {
    this.setState({
      placeName: text
    })
  }

  render() {
    return (
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          onChangeText= {(text) => this.textChangedHandler(text)}
          value={this.state.placeName}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={() => this.props.addPlaceHandler(this.state.placeName)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputcontainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeInput: {
    width: '70%',
    borderColor: 'blue',
    borderWidth: 1,
    color: '#000',
  },
  placeButton: {
    width: '30%',
  },
});

export default PlaceAddSection;
