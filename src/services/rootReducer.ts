import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import burgerConstructorReducer from './slices/burgerConstructorSlice';
import feedsReducer from './slices/feedsSlice';
import ingredientsReducer from './slices/ingredientsSlice';
import orderReducer from './slices/orderSlice';
import orderInfoReducer from './slices/orderInfoSlice';
import userOrdersReducer from './slices/userOrdersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  burgerConstructor: burgerConstructorReducer,
  feeds: feedsReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  orderInfo: orderInfoReducer,
  userOrders: userOrdersReducer
});

export default rootReducer;
