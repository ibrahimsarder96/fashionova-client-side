import React from 'react';
import img1 from '../../assest/giftCard/img1.png';
import img2 from '../../assest/giftCard/img2.jpg';
import img3 from '../../assest/giftCard/img3.jpg';
import img4 from '../../assest/giftCard/img4.jpg';
import img5 from '../../assest/giftCard/img5.jpg';



const GiftCard = () => {
  return (
    <div>
     <h1 className='my-11 font-bold text-2xl ml-52'>GiftCard</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-52'>
     <div>
      <div className="hero h-42" >
        <img className='w-56 h-56'  src={img1} alt="" />
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-xl font-bold">Hello there</h1>
        <p className="mb-5"></p>
      </div>
    </div>
  </div>
      <div className="hero h-42 my-2">
        <img className='w-56 h-56' src={img2} alt="" />
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-xl font-bold">Hello there</h1>
      </div>
    </div>
  </div>
     </div>
     <div className="hero h-96">
      <img className='h-96 w-96' src={img5} alt="" />
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-xl font-bold">Hello there</h1>
      </div>
    </div>
  </div>
     <div>
     <div className="hero h-42">
      <img className='w-56 h-56' src={img3} alt="" />
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-xl font-bold">Hello there</h1>
        <p className="mb-5"></p>
      </div>
    </div>
  </div>
     <div className="hero h-42 my-2">
      <img className='w-56 h-56' src={img2} alt="" />
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-xl font-bold">Hello there</h1>
      </div>
    </div>
  </div>
     </div>
   </div>
    </div>
   
  );
};

export default GiftCard;