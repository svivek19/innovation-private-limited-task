import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <Link to={'/'}>
          <img src="https://yshop.org/cdn/shop/t/4/assets/logo-image-file.png?v=73107786777602669321430073421" className="w-20" alt="Brand Logo" />
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to={'/shirt'} className="text-gray-800 hover:text-blue-500">Shirt</Link></li>
            <li><Link to={'/watch'} className="text-gray-800 hover:text-blue-500">Watch</Link></li>
            <li><Link to={'/sunglass'} className="text-gray-800 hover:text-blue-500">Sunglasses</Link></li>
            <li><Link to={'/shoes'} className="text-gray-800 hover:text-blue-500">Shoes</Link></li>
          </ul>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="bg-red-500 hover:bg-red-600 focus:ring-4 text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" onClick={handleLogout}>Logout</button>
          <button type="button" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="h-6 w-6 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M3 18h18v-2H3v2zM3 11h18V9H3v2zm0-7h18V2H3v2z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16V5H4v1zM4 12h16v-1H4v1zm16 6H4v1h16v-1z" />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden w-1/2 mx-56 font-semibold bg-gray-200 rounded-md">
            <ul className="flex flex-col my-4 space-y-2 mx-4">
              <li><Link to={'/shirt'} className="text-gray-800 hover:text-blue-500">Shirt</Link></li>
              <li><Link to={'/watch'} className="text-gray-800 hover:text-blue-500">Watch</Link></li>
              <li><Link to={'/sunglass'} className="text-gray-800 hover:text-blue-500">Sunglasses</Link></li>
              <li><Link to={'/shoes'} className="text-gray-800 hover:text-blue-500">Shoes</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
