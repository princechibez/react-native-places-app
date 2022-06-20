import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = props => {
  return (
    <FlatList
      style={style.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const style = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default PlaceList;
