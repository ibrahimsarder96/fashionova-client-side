import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrder] = useState([]);
  const {user} = useAuthState(auth);
  useEffect( () => {
    if(user){
      fetch(`http://localhost:5000/order?customer${user.email}`)
    .then(res => res.json())
    .then(data => setOrder(data))
    }
  },[user])
  return (
    <div>
      <h1>user {orders.length}</h1>
    </div>
  );
};

export default MyOrders;