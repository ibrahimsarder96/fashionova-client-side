import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit =async data => {
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
      if(result){
        toast.success('Product Add Successful');
      }
      else{
        toast.error('Product Add Failed');
      }
      console.log(result);
    })
  };
  return (
    <div className='w-full flex justify-center items-center'>
  <div className="card w-100 mt-4 ">
  <div className='card w-96 bg-purple-200 shadow-2xl'>
  <div className="card-body w-96">
  <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
    <input className='input input-bordered max-w-xs my-5 bg-white shadow-2xl w-full' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
    <input className='input mb-5 h-24  border-black bg-white shadow-2xl w-96 max-w-xs' placeholder='Description' required {...register("description")} />
    <input className='input input-bordered bg-white shadow-2xl w-full max-w-xs' placeholder='Price' required type="text" {...register ("price")} />
    <input className='my-5 input input-bordered bg-white shadow-2xl w-full max-w-xs' placeholder='Quantity' required type="number" {...register ("stock")} />
    <input className='input input-bordered bg-white shadow-2xl w-full max-w-xs' placeholder='text' required type="text" {...register ("img")} />
    <input className='btn mt-5 hover:bg-slate-600 bg-orange-400 w-full max-w-xs uppercase orange-400 text-white font-extrabold' type="submit" value="Add Product" />
        </div>
    </form>
  </div>
  </div>
</div>
  </div>
  );
};

export default AddProduct;