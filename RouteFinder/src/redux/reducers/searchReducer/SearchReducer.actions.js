import {
  START_LOCATION_EDIT,
  END_LOCATION_EDIT,
  ROUTE_SEARCH_SUCCESS,
  ROUTE_SEARCH_REQUEST,
  ROUTE_SEARCH_FAILURE,
} from './SearchReducer.actionTypes';

export const editStartLocation = (location) => ({
  type: START_LOCATION_EDIT,
  location,
});

export const editEndLocation = (location) => ({
  type: END_LOCATION_EDIT,
  location,
});

export const searchRoutes = (startLocation, endLocation) => dispatch => dispatch({
  types: [
    ROUTE_SEARCH_REQUEST,
    ROUTE_SEARCH_SUCCESS,
    ROUTE_SEARCH_FAILURE,
  ],
  payload: {
    request: {
      method: 'GET',
      url: "http://example.pl",
      data:
          {
            start_location: startLocation,
            end_location: endLocation,
          },
    },
  },
});
