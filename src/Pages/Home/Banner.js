import React from 'react';
import banner from '../../assest/banner/banner.jpg';
import bg from '../../assest/banner/bg.jpg';

const Banner = () => {
  return (
    <div style={{
      background: `url(${bg})`,
      backgroundSize: 'cover'
    }} className="hero min-h-screen">
  <div className="hero-content flex-col  lg:flex-row-reverse xl:max-w-screen-2xl">
    <img src={banner} alt='' className="lg:max-w-md sm:min-w-xs h-full rounded-lg shadow-2xl" />
    <div className='sm: my-24'>
      <h1 className="text-5xl font-bold text-black">The Classics</h1>
      <p className="py-6 text-black">A resolution to get behind Effortlessly refined Styles for Celebrating A Stand out Shirt is a on-and done autumn look</p>
      <button src='buy' className='btn bg-orange-400 border-none text-white hover:bg-slate-600 text-xl font-bold hover:text-orange-400'>BUY IT NOW!</button>
    </div>
  </div>
</div>
  );
};

export default Banner;