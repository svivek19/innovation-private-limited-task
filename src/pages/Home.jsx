import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import SearchBar from '../Component/SearchBar';
import ShirtProductCard from '../Component/ShirtProductCard';
import MobileProductCard from '../Component/MobileProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMobile(data.mobile);
        setFilteredProducts(data.mobile); // Initialize filteredProducts with all products
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-shirts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.products);
        setFilteredProducts(data.products); // Initialize filteredProducts with all products
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Filter products based on category
  const filterProducts = (category) => {
    if (category === 'Shirts') {
      setFilteredProducts(products.filter(product => product.category === 'Shirts'));
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className='flex justify-center mt-10 md:mt-28'>
          <Oval
            visible={true}
            height="50"
            width="50"
            color='#000'
          />
        </div>
      ) : (
        <div className='mt-28'>
          <div className='flex justify-center'>
            <SearchBar />
          </div>
          <div className='mt-4'>
            <ul className='flex justify-center'>
              <li className="mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer" onClick={() => filterProducts('Shirts')}>Shirts</li>
              <li className="mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer" onClick={() => filterProducts('Mobile')}>Mobile</li>
              <li className="mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer" onClick={() => filterProducts('Sunglass')}>Sunglass</li>
              <li className="mx-2 px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer" onClick={() => filterProducts('Shoes')}>Shoes</li>
            </ul>
          </div>

          <div>
            {filteredProducts.length > 0 ? (
              <div>
                {filteredProducts.map((product, index) => (
                  <>
                    <ShirtProductCard key={index} product={product} />
                    <MobileProductCard />
                  </>
                ))}
              </div>
            ) : 'No products'}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
