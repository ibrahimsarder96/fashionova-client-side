import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../assest/discount/1.png';
import photo2 from '../../assest/discount/photo-2.jpg';
import photo3 from '../../assest/discount/photo-3.png';
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react';


const Discount = () => {
 
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
    <div className='bg-white shadow-lg mt-20'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <img className='h-full' src={photo2} alt="" />
          </div>
          <div className='pt-16'>
            <h1 className='text-xl lg:ml-0 ml-8 pb-4'><animated.div style={props}>New Collection</animated.div></h1>
            <p className='font-bold text-2xl lg:ml-0 ml-8 '>Get Up To 25% Off New Fashion</p>
            <p className='font-bold text-2xl lg:ml-0 ml-8 '>Collection in 2023</p>
            <Link className='hover:underline lg:ml-0 ml-8  text-orange-400'>Discover Now</Link>
          </div>
          <div>
            <img className='h-full' src={photo3} alt="" />
          </div>
          <div>
            <img className='h-full' src={photo1} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Discount;