import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/postSlice'
import authReducer from '../features/auth/authSlice'
import projectReducer from '../features/projects/projectSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: '1',
  storage
}
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
  project:projectReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer:persistedReducer
  }
})