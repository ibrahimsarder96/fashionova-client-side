import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useAuthState}  from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect( () => {
    if(user){
      fetch(`https://fashionova-server-ibrahimsarder96.vercel.app/order?customer=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
    .then(res => {
      if(res.status === 401 || res.status === 403){
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
      }
     return res.json()
    })
    .then(data => {
      setOrders(data)
    })
    }
  },[user])
  return (
    <div>
      <div className="overflow-x-auto mt-4">
  <table className="table w-full">
    <thead>
      <tr className=' text-white'>
        <th className='bg-black'>Serial</th>
        <th className='bg-black'>Name</th>
        <th className='bg-black'>Date</th>
        <th className='bg-black'>Email</th>
        <th className='bg-black'>Product</th>
        <th className='bg-black'>Payment</th>
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
        <td>
          {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs bg-green-500 hover:bg-green-500'>pay</button></Link>}
          {(order.price && order.paid) && <div>
            <p><span className='text-green-400'>Paid</span></p>
            <p>TransactionId: <span className='text-green-400'>{order.transactionId}</span></p>
          </div>}
        </td>
      </tr>)
    }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;