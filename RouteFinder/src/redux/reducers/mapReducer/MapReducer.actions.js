import Geolocation from 'react-native-geolocation-service';
import {
  REQUEST_LOCATION_PERMISSION,
  REQUEST_USER_LOCATION,
  REQUEST_USER_LOCATION_ERROR,
} from './MapReducer.actionTypes';

export const requestLocationPermission = () => ({
  type: START_LOCATION_EDIT,
  location,
});

export const requestUSerLocation =  () => {
  Geolocation.getCurrentPosition((position) => {
        console.log(position);
    },
    (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  return {};
};