import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import GiftCard from './GiftCard';
import Products from './Products';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <GiftCard></GiftCard>
      <Products></Products>
    </div>
  );
};

export default Home;