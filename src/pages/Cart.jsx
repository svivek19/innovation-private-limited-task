import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../Component/ScrollToTopButton';
import { DecrementIcon, IncrementIcon } from '../Component/Icon';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const increaseQuantity = (index) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: index });
  };

  const decreaseQuantity = (index) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: index });
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity + 6 + 10), 0);
    return isNaN(totalPrice) ? '0' : totalPrice.toFixed(0);
  };


  return (
    <div className="mt-28 md:m-32 mb-6 md:flex">
      <div>
        <div className="flex justify-center text-4xl font-bold text-slate-900">
          Shopping Cart
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((cart, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row m-8 md:m-12"
            >
              <div>
                <div className="md:w-3/4">
                  <span>
                    <img
                      src={cart.images[(0)]}
                      alt="product img"
                      className="rounded-lg w-full md:w-full h-40 md:h-full object-cover"
                    />
                  </span>
                </div>
              </div>
              <div className="mx-auto md:mx-16 mt-4 md:mt-0 w-10/12 md:w-full">
                <div className="text-lg font-bold mb-2">
                  <span>{cart.title}</span>
                </div>
                <div className="text-lg font-semibold mb-2">
                  <span className="text-slate-800">₹{cart.price}</span>
                </div>
                <div className="p-1 flex justify-evenly font-bold text-lg md:justify-between cursor-pointer ">
                  <button
                    onClick={() => increaseQuantity(index)} disabled={cart.quantity >= 10}
                    className="bg-green-400 py-1 px-3 rounded-lg"
                  >
                   <IncrementIcon/>
                  </button>
                  <span className="bg-slate-200 px-4 py-1 mx-2 rounded-lg">
                    {cart.quantity}
                  </span>
                  <button
                    onClick={() => decreaseQuantity(index)} disabled={cart.quantity <= 1}
                    className="bg-red-400 py-1 px-3 rounded-lg"
                  >
                    <DecrementIcon/>
                  </button>
                </div>
                <div className="my-3 flex font-semibold text-lg">
                  <span className="">Total cost: ${(cart.price * cart.quantity).toFixed()}</span>
                </div>
                <div
                  onClick={() => dispatch(removeFromCart(index))}
                  className="bg-[#222B38] font-semibold text-white px-5 py-1 text-center rounded-lg cursor-pointer hover:bg-[#2d394b]"
                >
                  <span>
                    DELETE 
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-5 w-96 mx-auto">
            <img src='https://www.getillustrations.com/packs/matilda-startup-illustrations/scenes/_1x/shopping,%20e-commerce%20_%20empty,%20shopping%20cart,%20items,%20products,%20zero,%20none_md.png' alt="emptyCart" />
          </div>
        )}
      </div>
      <div className="flex flex-col my-20 mx-auto md:w-5/12 bg-slate-100 rounded-xl md:h-3/4">
        <div className="mt-8 mx-14">
          <div className="cartText mb-4 text-2xl text-[#222B38] font-bold">ITEMS{`(${cartItems.length})`}</div>
          <div className="cartText mb-2 text-xl text-[#222B38] font-semibold">GST: $6</div>
          <div className="cartText mb-2 text-xl text-[#222B38] font-semibold">Shipping Charge: $10</div>
          <div className="cartText text-xl text-[#222B38] font-semibold">
            Total Price: ${calculateTotalPrice()}
          </div>
          <Link
            
            className="w-full mt-4 inline-flex items-center justify-center py-2 overflow-hidden font-semibold text-white uppercase hover:bg-[#2f3b4d] transition-all duration-150 ease-in-out rounded-lg  bg-[#222B38] group"
          >
            Check Out
          </Link>
          <div className="mt-3 mb-5 text-md text-center">
            <span>
              Otherwise,{" "}
              <Link to="/" className="text-violet-900 font-medium underline">
                continue shopping
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ScrollToTopButton/>
    </div>
  );
};

export default Cart;
