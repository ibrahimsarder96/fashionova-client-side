import React, { useEffect, useState } from 'react';
import Shops from './Shops';

const Shop = () => {
  const [shops, setProducts] = useState([]);
  useEffect( () => {
    fetch('Shop.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-8 mt-10'>
      {
        shops.map(shop => <Shops
        key={shop.id}
        shop={shop}
        ></Shops>)
      }
    </div>
  );
};

export default Shop;