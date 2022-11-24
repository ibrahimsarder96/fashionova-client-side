import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ProductDetail = () => {
  const [products, setProducts] = useProducts();
  const {productId} = useParams();
  console.log(productId)
  return (
    <div>
      <h1 className='text-lime-500'>Single Product Information{productId}</h1>
    </div>
  );
};

export default ProductDetail;