import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSlider.css';
const ProSlider = ({product}) => {
  const {img, name, price} = product;
  
  return (
   <div>
      <Link>
          <div  className="card w-96 bg-slate-600 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body rounded items-center bg-slate-600 text-center">
    <h2 className="card-title text-white">{name}</h2>
    <p className='text-orange-400 text-xl'><span>${price}</span></p>
  </div>
</div>
</Link>
   </div>
  );
};

export default ProSlider;