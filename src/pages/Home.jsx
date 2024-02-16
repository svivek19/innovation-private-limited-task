import React, { useEffect, useState } from 'react';
import SearchBar from '../Component/SearchBar';
import Card from '../Component/Card';
import { ColorRing, Oval } from 'react-loader-spinner';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(activeCategory);
  }, []);

  const fetchProducts = (category) => {
    setLoading(true);

    let urls = [];

    if (category === 'all') {
      urls = [
        'https://dummyjson.com/products/category/sunglasses',
        'https://dummyjson.com/products/category/mens-shoes',
        'https://dummyjson.com/products/category/mens-shirts'
      ];
    } else {
      urls = [`https://dummyjson.com/products/category/${category}`];
    }

    Promise.all(urls.map(url =>
      fetch(url).then(res => res.json())
    ))
      .then(dataArray => {
        const allProducts = category === 'all' ? dataArray.flatMap(data => data.products) : dataArray[0].products;
        setProducts(allProducts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
    fetchProducts(newCategory);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePriceFilter = (event) => {
    const selectedPriceRange = event.target.value;
    setPriceFilter(selectedPriceRange);
  };

  const isPriceInRange = (price, range) => {
    const [min, max] = range.split('-').map(str => parseInt(str.replace(/\$/g, '').trim()));
    return price >= min && price <= max;
  };
  const filteredProducts = products.filter(product =>
    (product.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (activeCategory === 'all' || product.category === activeCategory) &&
    (priceFilter === '' || isPriceInRange(product.price, priceFilter))
  );

  return (
    <div className='mt-28'>
      <div className='flex justify-center'>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className='mt-4'>
        <ul className='flex justify-center space-x-4'>
          <li onClick={() => handleCategoryChange('all')} className={`px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'all' ? 'bg-slate-800 text-white' : ''}`} >All</li>
          <li onClick={() => handleCategoryChange('mens-shirts')} className={`px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'mens-shirts' ? 'bg-slate-800 text-white' : ''}`} >Shirts</li>
          <li onClick={() => handleCategoryChange('sunglasses')} className={`px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'sunglasses' ? 'bg-slate-800 text-white' : ''}`} >Sunglass</li>
          <li onClick={() => handleCategoryChange('mens-shoes')} className={`px-4 py-1 bg-gray-300 font-semibold rounded text-md cursor-pointer ${activeCategory === 'mens-shoes' ? 'bg-slate-800 text-white' : ''}`} >Shoes</li>
        </ul>
      </div>

      <div className='mt-5 w-11/12 text-right'>
        <select onChange={handlePriceFilter} className='font-semibold bg-slate-300 px-2 py-1 rounded-md cursor-pointer'>
          <option value="0$ - 200$">Filter by Price</option>
          <option value="0$ - 30$">0$ - 30$</option>
          <option value="31$ - 60$">31$ - 60$</option>
          <option value="61$ - 100$">61$ - 100$</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center mt-5 font-semibold text-gray-600 text-2xl">
          <Oval
            visible={true}
            height="60"
            width="60"
            color='#000'
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 mt-5 md:mt-10 gap-4">
          {filteredProducts.length === 0 ? (
            <p className="text-center md:text-end text-gray-600 font-semibold text-2xl mt-10">No Products Found</p>
          ) : (
            filteredProducts.map(product => (
              <Card key={product.id} product={product} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
