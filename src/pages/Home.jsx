import React, { useEffect, useState } from 'react';
import SearchBar from '../Component/SearchBar';
import Card from '../Component/Card';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('mens-shirts');

  useEffect(() => {
    fetchProducts(activeCategory);
  }, []);

  const fetchProducts = (category) => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
    fetchProducts(newCategory);
  };

  return (
    <div className='mt-28'>
      <div className='flex justify-center'>
        <SearchBar />
      </div>
      <div className='mt-4'>
        <ul className='flex justify-center'>
          <li onClick={() => handleCategoryChange('mens-shirts')} className={`mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'mens-shirts' ? 'bg-slate-800 text-white' : ''}`} >Shirts</li>
          <li onClick={() => handleCategoryChange('smartphones')} className={`mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'smartphones' ? 'bg-slate-800 text-white' : ''}`} >Mobile</li>
          <li onClick={() => handleCategoryChange('sunglasses')} className={`mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'sunglasses' ? 'bg-slate-800 text-white' : ''}`} >Sunglass</li>
          <li onClick={() => handleCategoryChange('mens-shoes')} className={`mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'mens-shoes' ? 'bg-slate-800 text-white' : ''}`} >Shoes</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
