import { createReducer } from '@reduxjs/toolkit';
import { addToCart } from '../actions/cartActions';

const initialState = {
  items: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.items.push(action.payload);
  });
});

export default cartReducer;
