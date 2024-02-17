import { createReducer } from '@reduxjs/toolkit';
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } from '../actions/cartActions';

const initialState = {
  items: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity by 1 if item already exists
      } else {
        state.items.push(newItem);
      }
    })
    .addCase(increaseQuantity, (state, action) => {
      const index = action.payload;
      state.items[index].quantity++;
    })
    .addCase(decreaseQuantity, (state, action) => {
      const index = action.payload;
      if (state.items[index].quantity > 1) {
        state.items[index].quantity--;
      }
    })
    .addCase(removeFromCart, (state, action) => {
      const index = action.payload;
      state.items.splice(index, 1);
    });
});

export default cartReducer;
