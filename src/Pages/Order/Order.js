import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Home/Cart';
import ReviewItem from '../Home/ReviewItem';

const Order = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveProduct = (product) => {
    const rest = cart.filter(pd => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id)
    console.log(product)
  }  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-40'>
      <div className="">
        {
          cart.map(product => <ReviewItem
          handleRemoveProduct={handleRemoveProduct}
          key={product._id}
          product={product}
          ></ReviewItem>)
        }
      </div>
      <div className="">
      <Cart
      cart={cart}
      >
        <Link to='/dashboard'><button className='text-white bg-emerald-500 rounded-lg p-3 mt-5'>Proceed Checkout</button></Link>
      </Cart>
      </div>
    </div>
  );
};

export default Order;