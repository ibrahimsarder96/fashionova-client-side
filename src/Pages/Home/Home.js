import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import GiftCard from './GiftCard';
import Info from './Info';
import Products from './Products';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <GiftCard></GiftCard>
      <Products></Products>
      <Categories></Categories>
    </div>
  );
};

export default Home;