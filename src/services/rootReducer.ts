import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import feedsReducer from './slices/feedsSlice';
import ingredientsReducer from './slices/ingredientsSlice';
import userOrdersReducer from './slices/userOrdersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  feeds: feedsReducer,
  ingredients: ingredientsReducer,
  userOrders: userOrdersReducer
});

export default rootReducer;
