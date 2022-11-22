import React from 'react';
import useProducts from '../../hooks/useProducts';

const ProductDetail = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <h1>Single Product Information{products.length}</h1>
    </div>
  );
};

export default ProductDetail;