import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Home/Cart';
import ReviewItem from '../Home/ReviewItem';

const Order = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);  
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-2 px-40'>
      <div className="">
        {
          cart.map(product => <ReviewItem
          key={product._id}
          product={product}
          ></ReviewItem>)
        }
      </div>
      <div className="">
      <Cart
      cart={cart}
      ></Cart>
      </div>
    </div>
  );
};

export default Order;