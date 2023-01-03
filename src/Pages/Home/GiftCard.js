import React from 'react';
import { Link } from 'react-router-dom';
import mask from '../../assest/giftCard/mask.png';
import trimmer from '../../assest/giftCard/trimmer.png';


const GiftCard = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
     <div className='bg-indigo-100 rounded-xl'>
     <div className="card lg:card-side shadow-xl">
     <div className="card-body pt-36">
    <h2 className="text-2xl font-bold">N95 Face Mask</h2>
    <h2 className='text-2xl font-bold'>Multilayer Protect</h2>
    <p>Easy and free returns!</p>
    <p><span className='text-xl font-bold text-orange-400'>$22</span></p>
    <Link className='text-orange-400 hover:underline'>View More</Link>
  </div>
  <figure><img className='h-96' src={mask} alt="Album"/></figure>
</div>
     </div>
     <div className='bg-sky-100 rounded-xl'>
     <div className="card lg:card-side bg-base-100 shadow-xl">
     <div className="card-body pt-36">
    <h2 className="text-2xl font-bold">Botanical Head</h2>
    <h2 className='text-2xl font-bold'>Temprature Track</h2>
    <p>Easy and free returns!</p>
    <p><span className='text-xl font-bold text-orange-400'>$46</span></p>
    <Link className='text-orange-400 hover:underline '>Shop Now!</Link>
  </div>
  <figure><img className='h-96' src={trimmer} alt="Album"/></figure>
</div>
     </div>
    </div>
   
  );
};

export default GiftCard;