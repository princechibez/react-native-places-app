import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const PlaceDetail = props =>
  props.selectedPlace ? (
    <Modal
      onRequestClose={props.modalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Delete"
            color="red"
            onPress={props.deletePlace}
          />
          <Button
            title="Close"
            onPress={props.modalClosed}
          />
        </View>
      </View>
    </Modal>
  ) : null;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    color: '#000',
    padding: 10,
    textAlign: 'center',
    fontSize: 28,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default PlaceDetail;
