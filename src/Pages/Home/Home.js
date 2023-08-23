import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Discount from './Discount';
import GiftCard from './GiftCard';
import Info from './Info';
import Products from './Products';
import ProductSlider from './ProductSlider';


const Home = () => {
  return (
   <>
    <div className='max-w-[1440px] mx-auto'>
      <Banner></Banner>
      <Info></Info>
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