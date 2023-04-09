import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/auth';
import reactotron from '../utils/reactotron';

const enhancers = [];

reactotron && enhancers.push(reactotron.createEnhancer());

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  enhancers: enhancers
});

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
export default store;
