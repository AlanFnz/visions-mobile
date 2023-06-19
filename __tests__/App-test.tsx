/**
 * FIXME: create separate config for e2e and unit tests
 */
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../src/App';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../src/feature/Signup', () => () => null);
jest.mock('../src/feature/Login', () => () => null);
jest.mock('../src/services/firebase', () => ({
  firebaseCreateWithEmailAndPassword: jest.fn(),
  firebaseSignInWithEmailAndPassword: jest.fn()
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    NavigationContainer: ({ children }: any) => children
  };
});

const mockStore = configureStore([]);

describe('App', () => {
  it('should render the login screen when not logged in', () => {
    const store = mockStore({
      auth: { isLoggedIn: false }
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>
    );

    expect(getByTestId('loginScreen')).toBeDefined();
  });
});
