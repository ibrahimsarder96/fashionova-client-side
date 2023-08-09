import React from 'react';
import banner from '../../assest/banner/banner.jpg';
import bg from '../../assest/banner/bg.jpg';
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';



const Banner = () => {
  const [flip, set] = useState(false)
  const props = useSpring({
    from: { opacity: 0 ,color: 'orange'},
    to: { opacity: 1, color: 'black' },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip)
  })
  
  return (
   <div className="lg:flex" style={{backgroundColor:"#E7EEF5"}}>
    <section className='w-6/12'>
    <div className='mt-24 ml-8'>
    <h1 className='text-7xl font-bold'>Make your fashion perfect</h1>
    <p className='text-xl my-4'>With your cloth in collection, you can take your style to the next level!</p>
    <button className='text-2xl px-7 py-4 rounded text-white font-bold' style={{backgroundColor:"#95D7DE"}} >Shop Now</button>
    </div>
    </section>
    <section className='w-6/12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:z-1'>
    <div className='lg:mt-24'>
      <img className="rounded" src={banner} alt="" />
      <img className="rounded mt-6" src={banner} alt=""/>
    </div>
    <div className=''>
      <img className="rounded" src={banner} alt="" />
      <img className="rounded my-6" src={banner} alt=""/>
      <img className="rounded" src={banner} alt="" />
    </div>
    <div className='lg:mt-24'>
      <img className="rounded" src={banner} alt="" />
      <img className="rounded mt-6" src={banner} alt=""/>
    
    </div>
    </section>
   </div>
  );
};

export default Banner;