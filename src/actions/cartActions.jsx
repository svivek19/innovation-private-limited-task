import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('ADD_TO_CART', (item) => {
  return {
    payload: { ...item, quantity: 1 } 
  };
});

export const increaseQuantity = createAction('INCREASE_QUANTITY', (index) => {
  return {
    payload: index
  };
});

export const decreaseQuantity = createAction('DECREASE_QUANTITY', (index) => {
  return {
    payload: index
  };
});

export const removeFromCart = createAction('REMOVE_FROM_CART', (index) => {
  return {
    payload: index
  };
});

export const setCheckoutProduct = createAction('SET_CHECKOUT_PRODUCT');
