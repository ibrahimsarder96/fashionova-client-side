import React from 'react';
import './GiftCard.css'
import img1 from '../../assest/giftCard/img1.jpg';
import img2 from '../../assest/giftCard/img2.jpg';
import img3 from '../../assest/giftCard/img3.jpg';
import img4 from '../../assest/giftCard/img4.jpg';
import img5 from '../../assest/giftCard/img5.jpg';



const GiftCard = () => {
  return (
    <div>
     <h1 className='my-11 font-bold text-2xl ml-52'>GiftCard</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-52'>
     <div>
     <div className='bg-slate-200 pb-6'>
    <div className="hero h-42">
        <img className='w-96 h-56' src={img1} alt="" />
  </div>
  <div className="text-center text-xl font-bold">
    <a href="https://www.amazon.com/">amgon</a>
  </div>
    </div>
    <div className='bg-slate-200 pb-6 mt-6'>
    <div className="hero h-42">
        <img className='w-96 h-56' src={img2} alt="" />
  </div>
  <div className="text-center text-xl font-bold">
    <a href="https://www.amazon.com/">amgon</a>
  </div>
    </div>
     </div>
      <div className='bg-slate-200'>
      <div className="hero h-96">
      <img className='banner' src={img5} alt="" />
      </div>
    <div className='pt-32 text-center text-xl font-bold'>
    <a href="https://www.amazon.com/">amgon</a>
  </div>
      </div>
      <div>
     <div className='bg-slate-200 pb-6'>
    <div className="hero h-42">
        <img className='w-96 h-56' src={img3} alt="" />
  </div>
  <div className="text-center text-xl font-bold">
    <a href="https://www.amazon.com/">amgon</a>
  </div>
    </div>
    <div className='bg-slate-200 pb-6 mt-6'>
    <div className="hero h-42">
        <img className='w-96 h-56' src={img4} alt="" />
  </div>
  <div className="text-center text-xl font-bold">
    <a href="https://www.amazon.com/">amgon</a>
  </div>
    </div>
     </div>
   </div>
    </div>
   
  );
};

export default GiftCard;