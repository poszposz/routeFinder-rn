import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import middleware from '../networking/apiClient';
import combineReducers from './reducers';

const store = composeWithDevTools(
  applyMiddleware(
    thunk,
    middleware,
  ),
)(createStore)(combineReducers);

export default store;
