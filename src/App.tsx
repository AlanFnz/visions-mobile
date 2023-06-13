import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import Home from './feature/Home';
import Signup from './feature/Signup';
import Login from './feature/Login';
import Settings from './feature/Settings';

import { loginAction, logoutAction } from './state/slices/auth/auth';
import { useSelector } from 'react-redux';
import store, { RootState } from './state/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerTitle: '' }}>
    <Tab.Screen
      name={'DropList'}
      component={Home}
      options={{ tabBarLabel: 'Drops' }}
    />
    <Tab.Screen
      name={'Settings'}
      component={Settings}
      options={{ tabBarLabel: 'Settings' }}
    />
  </Tab.Navigator>
);

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [initializing, setInitializing] = useState(true);

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
            component={TabNavigator}
            options={{
              headerShown: false
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
