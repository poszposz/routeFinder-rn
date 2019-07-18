import {
  SAMPLE_ACTION,
} from './SampleReducer.actionTypes';

let initialState = {};

export default function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {}
    default:
      return state;
  }
}