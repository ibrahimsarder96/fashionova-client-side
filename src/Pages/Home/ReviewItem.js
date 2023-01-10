import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
  const {product, handleRemoveProduct} = props;
  const {img, name, price, shipping} = product;
  return (
    <div className='flex items-center my-6 rounded-md bg-gray-300'>
      <div>
        <img className='w-36 h-36' src={img} alt="" />
      </div>
     <div className='flex justify-between w-full'>
     <div className='lg:ml-4'>
      <h1 className='text-xl' title={name}>
        {name.length > 15 ? name.slice(0, 15) + '...' : name}
        </h1>
      <p className='text-xl'>Price: <span className='text-orange-400'>${price}</span></p>
      <p className='text-xl'>Shaping: {shipping}</p>
      </div>
      <div className='mr-5'>
        <button onClick={() => handleRemoveProduct(product)} className='p-6 rounded-full bg-orange-400'>
        <FontAwesomeIcon className='text-orange-700 w-7 h-7' icon={faTrashAlt}>     </FontAwesomeIcon>
        </button>
      </div>
     </div>
    </div>
  );
};

export default ReviewItem;