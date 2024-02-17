import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('ADD_TO_CART', (item) => {
    return {
      payload: { ...item, quantity: 1 } 
    };
  });
export const increaseQuantity = createAction('INCREASE_QUANTITY');
export const decreaseQuantity = createAction('DECREASE_QUANTITY');
export const removeFromCart = createAction('REMOVE_FROM_CART');

