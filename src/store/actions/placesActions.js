import { SELECT_PLACE, ADD_PLACE, DELETE_PLACE, DESELECT_PLACE } from '../index';

export const addPlace = ( placeName ) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}
export const selectPlace = ( key ) => {
    return {
        type: SELECT_PLACE,
        key: key
    }
}
export const deSelectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}
export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
}