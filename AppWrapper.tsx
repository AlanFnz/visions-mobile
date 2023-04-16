import React, { useCallback, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from './state/store';
import App from './App';

const AppWrapper = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const onLayout = useCallback(() => {
    if (!isAppLoaded) {
      SplashScreen.hide();
      setIsAppLoaded(true);
    }
  }, [isAppLoaded]);

  return (
    <SafeAreaProvider onLayout={onLayout}>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
};

export default AppWrapper;
