import React from 'react';
import cg1 from '../../assest/categories/cg-1.jpg';
import cg2 from '../../assest/categories/cg-2.jpg';
import cg3 from '../../assest/categories/cg-3.jpg';
import cg4 from '../../assest/categories/cg-4.jpg';
import cg5 from '../../assest/categories/cg-5.jpg';
import cg6 from '../../assest/categories/cg-6.jpg';
import Category from './Category';

const Categories = () => {

 const Categories = [
  { 'id': 1,
    'name': 'Fashion',
    'img': cg1
  },
  { 'id': 2,
    'name': 'Shoes',
    'img': cg2
  },
  { 'id': 3,
    'name': 'Computer & Laptop',
    'img': cg3
  },
  { 'id': 4,
    'name': 'Sports',
    'img': cg4
  },
  { 'id': 5,
    'name': 'Toys',
    'img': cg5
  },
  { 'id': 6,
    'name': 'Health & Beauty',
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