import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartIcon, LogoutIcon } from './Icon';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get cart items from Redux store
  const cartItems = useSelector(state => state.cart.items || []);

  useEffect(() => {
    if (!localStorage.getItem('authToken') && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [navigate, location]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className={`fixed w-full z-20 bg-[#222b38] top-0 start-0 ${location.pathname === '/login' ? 'hidden' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'}>
          <h1 className='font-bold text-white text-2xl'>Shopify</h1>
        </Link>
        <div className="flex items-center">
          <Link to={'/cartdetails'} className="flex text-lg font-bold px-5 md:px-10 text-white">
            <CartIcon/> {`(${cartItems.length})`}
          </Link>
          <div className="cursor-pointer text-4xl" onClick={handleLogout}>
            <LogoutIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
