import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useAuthState}  from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  
  console.log(user)
  useEffect( () => {
    if(user){
      fetch(`http://localhost:5000/order?customer=${user.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
    }
  },[user])
  return (
    <div>
      <div className="overflow-x-auto mt-4">
  <table className="table w-full">
    <thead>
      <tr className='bg-black text-white'>
        <th>Serial</th>
        <th>Name</th>
        <th>Date</th>
        <th>Email</th>
        <th>Product</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
    {
      orders.map((order, index) =><tr>
        <th>{index + 1}</th>
        <td>{order.customerName}</td>
        <td>{order.date}</td>
        <td>{order.customer}</td>
        <td>{order.product}</td>
        <td>{order.quantity}</td>
      </tr>)
    }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;