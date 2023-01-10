import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import ProSlider from './ProSlider';
import './ProductSlider.css';


const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch('ProductsSlider.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <div>
      <h1 className='mt-12 font-bold text-2xl text-center uppercase'>Latest Products</h1>
      <div className='flex items-center justify-center'>
      <div className="divider bg-orange-400 w-60 h-1 rounded-md"></div>
      </div>
    <Slider className='app mt-10 mx-10' {...settings }>
     {
      products.map(product => <ProSlider
      key={product.id}
      product={product}
      ></ProSlider>)
     }
    </Slider>
    </div>
  );
};

export default ProductSlider;