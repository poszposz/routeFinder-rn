import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: `http://example.com`,
  responseType: 'json',
});

const middleware = axiosMiddleware(client);
export default middleware;
