import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './state/store';

const App = () => {
  const isLoggedIn = store.getState().auth.isLoggedIn;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      {isLoggedIn ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text>Authorized</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text>Unauthorized</Text>
        </View>
      )}
    </Provider>
  );
};

export default App;
