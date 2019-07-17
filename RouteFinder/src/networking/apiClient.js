import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import api from './constants/api';

const client = axios.create({
  baseURL: `${api.BASE_URL}`,
  responseType: 'json',
});

const middleware = axiosMiddleware(client);
export default middleware;
