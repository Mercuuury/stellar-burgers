import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ingredientsReducer from './slices/ingredientsSlice';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  auth: authReducer
});

export default rootReducer;
