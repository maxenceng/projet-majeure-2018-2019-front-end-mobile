import React from 'react';
import { Provider } from 'react-redux';
import AppIn from './AppIn';
import store from './src/store';


export default () => (
  <Provider store={store}>
    <AppIn />
  </Provider>
);
