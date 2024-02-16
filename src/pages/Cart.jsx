import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='mt-28'>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
