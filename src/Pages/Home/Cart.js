import React from 'react';

const Cart = (props) => {
  const {cart} = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart){
      quantity = quantity + product.quantity;
       total = total + product.price * product.quantity;
       shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tax;
  return (
    <div className='bg-orange-200 sticky'>
      <h1 className='text-center pt-5 text-xl font-bold text-orange-500'>Order Summary</h1>
      <div className="pl-3 py-4 text-xl">
      <h1>Selected Items: {cart.length}</h1>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: {tax}</p>
      <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
      </div>
     
    </div>
  );
};

export default Cart;