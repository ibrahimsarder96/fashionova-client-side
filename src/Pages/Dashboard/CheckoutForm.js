import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState();
  const [clientSecret, setClientSecret] = useState('');
  const {_id, price, customer, customerName} = order;


  useEffect( () => {
    fetch('http://localhost:5000/create-payment-intent',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => {
        if(data?.clientSecret){
          setClientSecret(data.clientSecret);
        }
    })
  },[price])


  const handleSubmit = async (event)=> {
    event.preventDefault()

    if(!stripe || !elements){
      return
    }
    const card = elements.getElement(CardElement);
    if(card === null) {
      return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    setCardError(error?.message || '');
    setSuccess('');
    setProcessing(true);
    // payment intent ----------------
    const {paymentIntent,  error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: customer
          },
        },
      },
    );
    if(intentError){
      setCardError(error?.message);
      setProcessing(false);
    }
    else{
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent)
      setSuccess('Congrats! Your Payment is Completed');
      // store payment on database -----
      const payment = {
        order : _id,
        transactionId: paymentIntent.id
      }
      fetch(`http://localhost:5000/order/${_id}`,{
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => {
        setProcessing(false)
        console.log(data)
      })
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button className='btn btn-sm bg-green-400 hover:bg-green-400 mt-4' type="submit" disabled={!stripe || !clientSecret}>
      Pay
    </button>
  </form>
  {
    cardError && <p className='text-red-400 mt-3'>{cardError}</p>
  }
  {
    success && <div className='text-green-400 mt-3'>
      <p>{success}</p>
      <p>Your transaction Id: <span className="text-orange-400 font-bold">{transactionId}</span></p>
      </div>
  }
  </div>
  );
};

export default CheckoutForm;