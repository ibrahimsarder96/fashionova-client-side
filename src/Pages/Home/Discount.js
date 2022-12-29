import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../assest/discount/photo-1.jfif';
import photo2 from '../../assest/discount/photo-2.jpg';
import photo3 from '../../assest/discount/photo-3.jpg';


const Discount = () => {
  
  return (
    <div className='bg-white shadow-lg mt-20'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <img className='h-full' src={photo1} alt="" />
          </div>
          <div className='pt-16'>
            <h1 className='text-xl pb-4'>New Collection</h1>
            <p className='font-bold text-2xl'>Get Up To 25% Off New Fashion</p>
            <p className='font-bold text-2xl'>Collection in 2023</p>
            <Link className='hover:underline text-orange-400'>Discover Now</Link>
          </div>
          <div>
            <img src={photo2} alt="" />
          </div>
          <div>
            <img src={photo3} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Discount;