import {
  REQUEST_LOCATION_PERMISSION,
  REQUEST_USER_LOCATION,
  REQUEST_USER_LOCATION_ERROR,
} from './MapReducer.actionTypes';

let initialState = {
  userLocation: undefined,
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOCATION_PERMISSION:
      return {}
    case REQUEST_USER_LOCATION:
      return {}
    case REQUEST_USER_LOCATION_ERROR:
      return {}
    default:
      return state;
  }
}