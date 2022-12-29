import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
  const {img, name, title, quantity} = category;
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl`}>
    <figure  className='pl-6 pt-4'>
      <img className='h-24 w-24' src={img} alt="Album"/>
      </figure>
    <div className="card-body text-white">
      <h2 className="card-title text-black font-bold">{name}</h2>
      <p className='text-black'>{title}</p>
      <p className='text-black'>{quantity}</p>
      <Link className='hover:underline text-orange-400'>View More</Link>
    </div>
  </div>
  );
};

export default Category;