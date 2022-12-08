import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Cart from './Cart';




const ProductDetail = () => {

  const {productId} = useParams();
  const [product, setProduct] = useProduct(productId);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(product)
  }
  
  return (
   <div className='px-40'>
     <div>
      <div className='grid md:grid-cols-1 lg:grid-cols-3 '>
        <div>
        <img className='w-96 h-96 mt-10' src={product.img} alt="" />
        <div>
        <button onClick={ () => handleAddToCart(product)} className="btn inline-block hover:bg-orange-500 bg-lime-500 text-xl font-bold text-white mt-5 w-96">Add To Cart</button>
      <button className="btn hover:bg-orange-500 bg-lime-500 text-xl font-bold text-white mt-5 w-96">Order</button>
        </div>
        </div>
        <div className='pt-32 ml-10 mt-10'>
          <h1 className='text-2xl font-bold'>{product.name}</h1>
          <p className='text-2xl my-3'>Price: <span className='text-amber-300'>${product.price}</span></p>
          <h3 className='text-2xl'>Stock: <span>{product.stock}</span></h3>
        </div>
        <div>
          <Cart
          cart={cart}
          ></Cart>
        </div>
      </div>
    </div>
    <div>
      <h1 className='text-2xl font-bold'>Product Description</h1>
      <p>{product.description}</p>
      </div>
   </div>
  );
};

export default ProductDetail;