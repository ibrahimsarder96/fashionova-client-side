import React from 'react';
import brand1 from '../../assest/brand/1.png';
import brand2 from '../../assest/brand/2.png';
import brand3 from '../../assest/brand/3.png';
import brand4 from '../../assest/brand/4.png';
import brand5 from '../../assest/brand/5.png';
import brand6 from '../../assest/brand/6.png';
const Brand = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16'>
      <img className='px-24' src={brand1} alt="" />
      <img className='px-24' src={brand2} alt="" />
      <img className='px-24' src={brand3} alt="" />
      <img className='px-24' src={brand4} alt="" />
      <img className='px-24' src={brand5} alt="" />
      <img className='px-24' src={brand6} alt="" />
    </div>
  );
};

export default Brand;