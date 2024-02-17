import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";



const LogoutIcon = () => (
  <IoMdLogOut className='text-white' />
);

const CartIcon = () => (
  <IoCartOutline className='text-white text-4xl' />
);

const ArrowUpIcon = () => (
  <FaArrowAltCircleUp className='text-5xl' />
);

const IncrementIcon = () => (
  <FaPlus />
);

const DecrementIcon = () => (
  <FaMinus />
);

const StarIcon = () => (
  <FaStar className='text-yellow-400' />
)



export { LogoutIcon, CartIcon, ArrowUpIcon, IncrementIcon, DecrementIcon, StarIcon };
