import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StarIcon } from './Icon';

const Card = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        toast.success('Product added to cart!', {
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                margin:'10px',
                padding: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#222B38',
                borderRadius:'10px'
            }
        });
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='mb-5'>
            <div className="relative mx-auto mt-5 md:mt-0 mb-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover w-full h-full" src={product.images[0]} alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-slate-900 px-2 text-center text-sm font-medium text-white">{product.discountPercentage.toFixed(0)} % Offer </span>
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight overflow-hidden whitespace-nowrap text-slate-900">{capitalizeFirstLetter(product.title)}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                        </p>
                        <div className="flex items-center">
                            {Array.from({ length: Math.max(0, Math.round(product.rating)) }).map((_, index) => (
                                <StarIcon key={index}/>
                            ))}
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.toFixed(1)}</span>
                        </div>

                    </div>
                    <button onClick={handleAddToCart} className="flex items-center justify-center rounded-md bg-[#222B38] w-full py-2.5 text-center text-sm font-medium text-white hover:bg-[#2e3a4b] ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
