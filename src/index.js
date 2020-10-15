import React from 'react';
import store from './Store';
import {Provider} from 'react-redux';
import App from './routes';

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
