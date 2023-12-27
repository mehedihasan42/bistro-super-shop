import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useShop from '../../hooks/useShop';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key);

const Payment = () => {

    const [shop] = useShop()
    const total = shop.reduce((total,item)=>total+item.price,0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle subHeading='Please process' heading='Payment'></SectionTitle>
            <Elements stripe={stripePromise}>
      <CheckOutForm price={price}/>
    </Elements>
        </div>
    );
};

export default Payment;