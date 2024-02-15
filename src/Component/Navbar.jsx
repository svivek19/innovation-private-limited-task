import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className={`fixed w-full z-20 top-0 start-0 ${location.pathname === '/login' ? 'hidden' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="https://yshop.org/cdn/shop/t/4/assets/logo-image-file.png?v=73107786777602669321430073421" className="w-20" alt="Brand Logo" />
        <div>
          <ul className="flex space-x-6">
            <li><Link to={'/shirt'} className="text-gray-800 hover:text-blue-500">Shirt</Link></li>
            <li><Link to={'/watch'} className="text-gray-800 hover:text-blue-500">Watch</Link></li>
            <li><Link to={'/sunglasses'} className="text-gray-800 hover:text-blue-500">Sunglasses</Link></li>
            <li><Link to={'/shoes'} className="text-gray-800 hover:text-blue-500">Shoes</Link></li>
          </ul>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="bg-red-500 hover:bg-red-600 focus:ring-4 text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
