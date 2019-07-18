import {
  START_LOCATION_EDIT,
  END_LOCATION_EDIT,
  ROUTE_SEARCH_SUCCESS,
  ROUTE_SEARCH_REQUEST,
  ROUTE_SEARCH_FAILURE,
} from './SearchReducer.actionTypes';

let initialState = {
  startLocation: "",
  endLocation: "",
  isLoading: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOCATION_EDIT:
      return {
        ...state,
        startLocation: action.location,
      }
    case END_LOCATION_EDIT:
        return {
          ...state,
          endLocation: action.location,
        }
    case ROUTE_SEARCH_SUCCESS:
        return {
          ...state,
          isLoading: false
        }
    case ROUTE_SEARCH_REQUEST:
        return {
          ...state,
          isLoading: true
        }
    case ROUTE_SEARCH_FAILURE:
        return {
          ...state,
          isLoading: false
        }
    default:
      return state;
  }
}