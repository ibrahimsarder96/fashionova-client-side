import React from 'react';
import CardInfo from './CardInfo';
import car from '../../assest/icon/car.png';
import payment from '../../assest/icon/payment.png';
import gift from '../../assest/icon/gift.png';
import support from '../../assest/icon/support.png';

const Info = () => {
  return (
    <div>
       <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-10'>
      <CardInfo cardTitle="Free Shipping" className="bg-black " info="Orders over $400" img={car}></CardInfo>
      <CardInfo cardTitle="Quick Payment" bgclass="bg-slate-800" info="100% secure payment" img={payment}></CardInfo>
      <CardInfo cardTitle="Gift Certificate" className="bg-white" info="Buy Now $500" img={gift}></CardInfo>
      <CardInfo cardTitle="24/7 Support" className="bg-white" info="Ready Support" img={support}></CardInfo>
    </div>
    </div>
  );
};

export default Info;