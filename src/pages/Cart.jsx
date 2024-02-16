import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='mt-28'>
      <Link to={'/'} className='underline text-blue-500'>back</Link>
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
