import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import feedsReducer from './slices/feedsSlice';
import ingredientsReducer from './slices/ingredientsSlice';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  auth: authReducer,
  feeds: feedsReducer
});

export default rootReducer;
