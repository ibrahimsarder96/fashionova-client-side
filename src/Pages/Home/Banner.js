import React from 'react';
import banner1 from '../../assest/banner/1.jpg';
import banner2 from '../../assest/banner/2.jpg';
import banner3 from '../../assest/banner/3.jpg';
import banner4 from '../../assest/banner/4.jpg';
import banner5 from '../../assest/banner/5.jpg';
import banner6 from '../../assest/banner/6.jpg';
import banner7 from '../../assest/banner/7.jpg';
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
   <div className="lg:flex pt-12 pb-12" style={{backgroundColor:"#E7EEF5"}}>
    <section className='lg:w-6/12'>
    <div className='lg:mt-24 sm:mt-12 ml-16'>
    <h1 className='text-4xl lg:text-7xl  sm:text-center
     font-bold'>Make your fashion perfect</h1>
    <p className='text-xl my-4'>With your cloth in collection, you can take your style to the next level!</p>
    <button id='btn' className='text-xl px-7 py-4 rounded bg-primary text-black font-bold' >Shop Now</button>
    </div>
    </section>
    <section className='w-6/12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:z-1 mr-16'>
    <div className='lg:mt-24'>
      <img className="rounded sm:w-full" src={banner1} alt="" />
      <img className="rounded mt-6" src={banner2} alt=""/>
    </div>
    <div className=''>
      <img className="rounded" src={banner3} alt="" />
      <img className="rounded my-6" src={banner4} alt=""/>
      <img className="rounded" src={banner5} alt="" />
    </div>
    <div className='lg:mt-24'>
      <img className="rounded" src={banner6} alt="" />
      <img className="rounded mt-6" src={banner7} alt=""/>
    
    </div>
    </section>
   </div>
  );
};

export default Banner;