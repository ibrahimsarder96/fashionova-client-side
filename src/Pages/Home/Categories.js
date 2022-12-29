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
    'title': 'New Generation',
    'quantity': '2 Products',
    'img': cg1
  },
  { 'id': 2,
    'name': 'Shoes',
    'title': 'New Generation',
    'quantity': '3 Products',
    'img': cg2
  },
  { 'id': 3,
    'name': 'Computer & Laptop',
    'title': 'New Generation',
    'quantity': '4 Products',
    'img': cg3
  },
  { 'id': 4,
    'name': 'Sports',
    'title': 'New Generation',
    'quantity': '2 Products',
    'img': cg4
  },
  { 'id': 5,
    'name': 'Toys',
    'title': 'New Generation',
    'quantity': '6 Products',
    'img': cg5
  },
  { 'id': 6,
    'name': 'Health & Beauty',
    'title': 'New Generation',
    'quantity': '8 Products',
    'img': cg6
  }
 ]
  return (
    <div>
      <h1 className=' mt-11 font-bold text-2xl text-center'>Product Categories</h1>
      <div className='flex items-center justify-center'>
      <div className="divider bg-orange-400 w-72 h-1 rounded-md"></div>
      </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-5'>
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