import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
