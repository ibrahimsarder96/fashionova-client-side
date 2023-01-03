import React from 'react';

const CardInfo = ({img, cardTitle, bgclass, info}) => {
  
  return (
    <div className={`card lg:card-side bg-gray-100 shadow-xl`}>
    <figure  className='pl-6 pt-4'>
      <img className='h-24 w-24' src={img} alt="Album"/>
      </figure>
    <div className="card-body text-white">
      <h2 className="card-title text-black font-bold">{cardTitle}</h2>
      <p className='text-black'>{info}</p>
    </div>
  </div>
  );
};

export default CardInfo;