import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './feature/Signup';
import Login from './feature/Login';
import TabNavigator from './components/TabNavigator';

import { checkUserAuthentication } from './state/slices/auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './state/store';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkUserAuthentication());
  }, []);

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
