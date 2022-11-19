import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div>
      <h1 className='my-11 font-bold text-2xl ml-52'>Categories</h1>
      <div className='mx-52 grid grid-cols-3'>
      {
        products.map(product => <Product
        key={product.id}
        product={product}
        ></Product>)
      }
      </div>
    </div>
  );
};

export default Products;