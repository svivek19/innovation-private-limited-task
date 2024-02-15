import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-36 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Discounts offered on all available products. <a href="#" className="font-bold text-indigo-600 ">12% </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Gent's Shopping Mart</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Explore a diverse array of men's essentials including watches, sunglasses, shoes, and shirts at our store.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={'/Shirt'} className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
