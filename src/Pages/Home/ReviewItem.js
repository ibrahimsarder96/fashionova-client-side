import React from 'react';

const ReviewItem = (props) => {
  const {name} = props.product;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ReviewItem;