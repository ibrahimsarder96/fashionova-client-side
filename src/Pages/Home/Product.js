import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
  const { _id, img, name, price} = product;
  const navigate = useNavigate();

  const navigateToProductDetail = id => {
    navigate(`/product/${id}`)
  }
  
  return (
    <div className="card  bg-gray-50 shadow-2xl">
    <figure className="px-10 pt-10">
      <img src={img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-xl font-bold">{name}</h2>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  
</div>
      <p className='text-xl'>${price}</p>
      <div className="ard-actions">
      <button onClick={ () => navigateToProductDetail(_id)} className="buy-btn">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default Product;