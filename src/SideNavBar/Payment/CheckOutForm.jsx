import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState()

  const handleSubmit = async(event) =>{
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)

    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError(' ')
    }
  }

  return (
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
    <button type="submit" disabled={!stripe}>
      Pay
    </button>
    <p className='text-red-500'>{error}</p>
  </form>
  );
};

export default CheckOutForm;