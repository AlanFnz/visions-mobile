import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { AuthState, UserData } from '../../../types/user.types';

const initialState: AuthState = {
  token: null,
  userData: null,
  didTryAutoLogin: false,
  isLoggedIn: false
};

export const checkUserAuthentication = createAsyncThunk(
  'auth/checkUserAuthentication',
  async (_, { dispatch }) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        const userData: Partial<UserData> = {
          uid: user.uid,
          email: user.email
        };
        dispatch(authenticate({ token: 'dummy_token', userData }));
      } else {
        dispatch(logout());
      }
    });
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (
      state,
      action: PayloadAction<{ token: string; userData: Partial<UserData> }>
    ) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
      state.didTryAutoLogin = true;
      state.isLoggedIn = true;
    },
    setDidTryAutoLogin: (state) => {
      state.didTryAutoLogin = true;
    },
    logout: (state) => {
      state.token = null;
      state.userData = null;
      state.didTryAutoLogin = false;
      state.isLoggedIn = false;
    },
    updateLoggedInUserData: (
      state,
      action: PayloadAction<{ newData: Partial<UserData> }>
    ) => {
      if (state.userData) {
        state.userData = { ...state.userData, ...action.payload.newData };
      }
    }
  }
});

export const {
  authenticate,
  setDidTryAutoLogin,
  logout,
  updateLoggedInUserData
} = authSlice.actions;
export default authSlice.reducer;
