import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';



const stripePromise = loadStripe('pk_test_51IgymSIG0j33M0uGLPr5lXHivArOTZ0j2NI5EMspo5T3Vo2cPiWVhO1ricIzofrh7Xq7xwP1w5ckhzWaifDMXdEw00hVCwcyvr');

const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
             <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment}></PaymentForm>
    </Elements>
            
        </div>
    );
};

export default ProcessPayment;