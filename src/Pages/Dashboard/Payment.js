import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise =loadStripe('pk_test_51L1DfkJEK7zr13jHy0Xz1Iazbk2wOr90vfCoLwQ8kxk8h8MAbl7NzgWiSA97OkAgQpWuTZ31hQKQJUImhdznqCVR00yhX3dS1R');


const Payment = () => {
  const {id} = useParams()
  const url = `http://localhost:5000/order/${id}`
  const {data: order, isLoading} = useQuery(['order', id], () => fetch(url,{
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res=>res.json()))

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
    <div class="hero min-h-screen">
<div class="hero-content flex-col lg:flex-row-reverse">
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   <div className="card-body shadow-2xl rounded-xl">
   <h1 class="text-2xl font-bold text-green-400">{order.customerName}</h1>
    <p class="py-3 text-2xl text-accent">{order.product}</p>
    <p class="py-3 text-2xl text-accent">Your order: <span className='text-purple-300'>{order.date}</span></p>
    <p class="py-3 text-2xl text-accent">Please pay: ${order.price}</p>
   </div>
  </div>
  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body shadow-2xl">
    <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
    </div>
  </div>
</div>
</div>
  </div>
  );
};

export default Payment;