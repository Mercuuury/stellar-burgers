import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import burgerConstructorReducer from './slices/burgerConstructorSlice';
import feedsReducer from './slices/feedsSlice';
import ingredientsReducer from './slices/ingredientsSlice';
import orderReducer from './slices/orderSlice';
import userOrdersReducer from './slices/userOrdersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  burgerConstructor: burgerConstructorReducer,
  feeds: feedsReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  userOrders: userOrdersReducer
});

export default rootReducer;
