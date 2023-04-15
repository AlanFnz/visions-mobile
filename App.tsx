import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import Signup from './screens/Signup';
import Login from './screens/Login';

import { loginAction, logoutAction } from './state/slices/auth/auth';
import store, { RootState } from './state/store';
import Home from './screens/Home';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      const userData = { uid: user.uid, email: user.email };
      store.dispatch(loginAction(userData));
    } else {
      store.dispatch(logoutAction());
    }

    if (initializing) setInitializing(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#111111'
              },
              headerTintColor: '#fff'
            }}
          />
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
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#111111'
                },
                headerTintColor: '#fff'
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
