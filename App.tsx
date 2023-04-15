import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import store from './state/store';
import Signup from './screens/Signup';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  const isLoggedIn = store.getState().auth.isLoggedIn;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text>Home</Text>
            </View>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Welcome',
                  headerStyle: {
                    backgroundColor: '#111111'
                  },
                  headerTintColor: '#fff'
                }}
              />
              <Stack.Screen name="Sign up" component={Signup} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
