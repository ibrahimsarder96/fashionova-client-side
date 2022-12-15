import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
  const [products, setProducts] = useProducts();
  const handleDelete = id =>{
    const proceed = window.confirm('are you sure');
    if(proceed){
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = products.filter(product =>product._id !== id);
        setProducts(remaining);
      })
    }
  }
  return (
    <div className='w-50 mx-auto'>
      <div className="overflow-x-auto mt-4">
  <table className="table w-full">
    <thead>
      <tr className='bg-black text-white'>
        <th>Serial</th>
        <th>Product Name</th>
        <th>Remove</th>

      </tr>
    </thead>
    <tbody>
    {
    products.map((product, index) =><tr>
      <th>{index + 1}</th>
      <td className='font-bold'>{product.name}</td>
      <td> <button className='p-6 rounded-full bg-orange-400' onClick={() => handleDelete (product._id)}>
      <FontAwesomeIcon className='text-orange-600 w-7 h-7' icon={faTrashAlt}>     </FontAwesomeIcon>
        </button></td>
    </tr>)
  }
    </tbody>
  </table>
</div>
  </div>
  );
};

export default ManageProduct;