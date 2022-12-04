import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';


const ProductDetail = () => {

  const {productId} = useParams();
  const [product, setProduct] = useProduct(productId);
  
  return (
    <div className='px-40 my-10'>
      <div className='grid grid-cols-2'>
        <div>
        <img className='w-96 h-96' src={product.img} alt="" />
        </div>
        <div>
          <h1>{product.name}</h1>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetail;