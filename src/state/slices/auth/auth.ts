import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

interface User {
  uid: string;
  email: string | null;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null
};

export const checkUserAuthentication = createAsyncThunk(
  'auth/checkUserAuthentication',
  async (_, { dispatch }) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        const userData = { uid: user.uid, email: user.email };
        dispatch(loginAction(userData));
      } else {
        dispatch(logoutAction());
      }
    });
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutAction(state) {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});

const { actions, reducer } = authSlice;
export const { loginAction, logoutAction } = actions;
export default reducer;
