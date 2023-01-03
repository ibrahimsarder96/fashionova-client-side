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
    <div>
      <Banner></Banner>
      <Info></Info>
      <GiftCard></GiftCard>
      <Products></Products>
      <Categories></Categories>
      <Discount></Discount>
      <ProductSlider></ProductSlider>
    </div>
  );
};

export default Home;