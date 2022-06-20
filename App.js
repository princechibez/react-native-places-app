import React, { Component } from 'react';
import { StyleSheet,  View } from 'react-native';


import PlaceAddSection from './src/components/placeaddSection/placeaddSection';
import PlaceList from './src/components/placeList/placeList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, selectPlace, deSelectPlace, deletePlace } from './src/store/index';

import { connect } from 'react-redux';


class App extends Component {
  addPlaceHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  onItemSelected = (key) => {
    this.props.onSelectPlace(key)
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  deletePlaceHandler = () => {
    this.props.onDeletePlace()
  }


  render () {

    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.props.selectedPlace}
        deletePlace={this.deletePlaceHandler}
        modalClosed={this.modalClosedHandler} />
        <PlaceAddSection
        addPlaceHandler = {(placeName) => this.addPlaceHandler(placeName)} />
        <PlaceList
          places = {this.props.places}
          onItemSelected = {(id) => this.onItemSelected(id)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deSelectPlace()),
    onDeletePlace: () => dispatch(deletePlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);