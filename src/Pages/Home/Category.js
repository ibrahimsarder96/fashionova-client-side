import React from 'react';

const Category = ({category}) => {
  const {img, name} = category;
  return (
    <div>
        <div className="avatar">
          <div className="w-32 rounded-full">
          <img src={img} alt=''/>
        </div>
      </div>
      <h1 className='text-2xl'>{name}</h1>
    </div>
  );
};

export default Category;