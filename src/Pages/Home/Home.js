import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Discount from './Discount';
import GiftCard from './GiftCard';
import Info from './Info';
import Products from './Products';
import ProductSlider from './ProductSlider';
import Brand from './Brand';


const Home = () => {
  return (
   <>
   <div>
   <Banner></Banner>
   </div>
    <div className='max-w-[1440px] mx-auto'>
      <Info></Info>
      <Brand></Brand>
      <GiftCard></GiftCard>
      <Products></Products>
      <Categories></Categories>
      <Discount></Discount>
    </div>
    <div>
    <ProductSlider></ProductSlider>
    </div>
   </>
  );
};

export default Home;