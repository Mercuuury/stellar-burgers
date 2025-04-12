import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { orderBurgerApi } from '@api';
import { TOrder } from '@utils-types';

interface TOrderState {
  order: TOrder | null;
  orderRequest: boolean;
  error: string | undefined | null;
}

const initialState: TOrderState = {
  order: null,
  orderRequest: false,
  error: null
};

export const submitOrder = createAsyncThunk(
  'order/submitOrder',
  orderBurgerApi
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder(state) {
      state.order = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.orderRequest = true;
        state.error = null;
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.order = action.payload.order;
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.orderRequest = false;
        state.error = action.error.message;
      });
  }
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
