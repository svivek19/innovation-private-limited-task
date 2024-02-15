// import React, { useEffect, useState } from 'react';
// import { Oval } from 'react-loader-spinner';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {

//     fetch('https://dummyjson.com/products/category/mens-shirts')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data); 
//       setProducts(data.products); 
//       setIsLoading(false); 
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//       setIsLoading(false);
//     });

//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {isLoading ? (
//         <div className='flex justify-center mt-10 md:mt-28'>
//           <Oval
//             visible={true}
//             height="50"
//             width="50"
//             color='#000'
//           />
//         </div>
//       ) : (
//         <div className='mt-28'>
//           <div>
//             {products.length > 0 ? (
//               <div>
//                 {products.map((product, index) => (
//                   <div key={index}>
//                     <h2>{product.title}</h2>
//                     <img src={product.images[2]} alt="" srcset="" />
//                   </div>
//                 ))}
//               </div>
//             ) : 'No products'}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
import React from 'react'
import HeroSection from '../Component/HeroSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
    </div>
  )
}

export default Home
