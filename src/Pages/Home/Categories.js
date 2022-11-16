import React from 'react';
import cg1 from '../../assest/categories/cg-1.jpg';
import cg2 from '../../assest/categories/cg-2.webp';
import cg3 from '../../assest/categories/cg-3.png';
import cg4 from '../../assest/categories/cg-4.png';
import cg5 from '../../assest/categories/cg-1.jpg';
import cg6 from '../../assest/categories/cg-1.jpg';
import Category from './Category';

const Categories = () => {

 const Categories = [
  { 'id': 1,
    'name': 'Fashion',
    'img': cg1
  },
  { 'id': 2,
    'name': 'a',
    'img': cg2
  },
  { 'id': 3,
    'name': 'v',
    'img': cg3
  },
  { 'id': 4,
    'name': 'b',
    'img': cg4
  },
  { 'id': 5,
    'name': 'c',
    'img': cg5
  },
  { 'id': 6,
    'name': 'd',
    'img': cg6
  }
 ]
  return (
    <div>
      <h1 className='my-11 font-extrabold text-2xl ml-52'>Categories</h1>
    <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 mx-52 my-11'>
    {
      Categories.map(category => <Category
      key={category.id}
      category={category}
      ></Category>)
    }
    </div>
    </div>
  );
};

export default Categories;