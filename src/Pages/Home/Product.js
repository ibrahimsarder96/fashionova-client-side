import React from 'react';
import './Product.css';

const Product = ({product}) => {
  const {img, name, price} = product;
  console.log(product)
  return (
    <div className="card  bg-gray-50 shadow-2xl">
    <figure className="px-10 pt-10">
      <img src={img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-xl font-bold">{name}</h2>
      <p className='text-xl'>${price}</p>
      <div className="ard-actions">
      <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default Product;