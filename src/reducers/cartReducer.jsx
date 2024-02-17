import { createReducer } from '@reduxjs/toolkit';
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, setCheckoutProduct } from '../actions/cartActions';

const initialState = {
  items: [],
  checkoutProduct: null,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push(newItem);
      }
    })
    .addCase(increaseQuantity, (state, action) => {
      const index = action.payload;
      state.items[index].quantity += 1;
    })
    .addCase(decreaseQuantity, (state, action) => {
      const index = action.payload;
      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      }
    })
    .addCase(removeFromCart, (state, action) => {
      const index = action.payload;
      state.items.splice(index, 1);
    })
    .addCase(setCheckoutProduct, (state, action) => {
      state.checkoutProduct = action.payload;
    });
});

export default cartReducer;
