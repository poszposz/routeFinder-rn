import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/redux/store';

const App = () => (
  <Provider
    store={store}
  >
    <AppNavigation />
  </Provider>
);

export default App;