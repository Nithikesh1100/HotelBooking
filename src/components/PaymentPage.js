// // import React, { useState } from 'react';
// // import { useParams, useLocation } from 'react-router-dom';
// // import { loadStripe } from '@stripe/stripe-js';
// // import { Elements,  CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // import axios from 'axios';
// // import '../styles/PaymentPage.css';


// // const stripePromise = loadStripe('pk_test_51PbloSFNweSIly0ti4T7ykauTOaqqykE6ftANKaI8NgqmRC4cuPLK2kWd0GOdlfKG856ICqaVBq58u5UAJWcINM000dnZlbi3a');



// // const CheckoutForm = () => {
// //     const stripe = useStripe();
// //     const elements = useElements();
// //     const { id } = useParams();
// //     const [name, setName] = useState('');
// //     const [error, setError] = useState(null);
// //     const [success, setSuccess] = useState(false);
// //     const location = useLocation();
// //     const { amount } = location.state || {};
  
// //     const handleSubmit = async (event) => {
// //       event.preventDefault();
  
// //       if (!stripe || !elements) {
// //         return;
// //       }
  
// //       if (!name) {
// //         setError('Please enter the name on the card');
// //         return;
// //       }
  
// //       const cardElement = elements.getElement(CardNumberElement);
  
// //       const { error, paymentMethod } = await stripe.createPaymentMethod({
// //         type: 'card',
// //         card: cardElement,
// //         billing_details: {
// //           name,
// //         },
// //       });
  
// //       if (error) {
// //         setError(error.message);
// //         return;
// //       }
  
// //       const { id: paymentMethodId } = paymentMethod;
  
// //       try {
// //         const response = await axios.post('http://localhost:3000/api/payment/create-payment-intent', {
// //           amount, // Replace with the actual amount
// //           paymentMethodId,
// //           hotelId: id,
// //         });
  
// //         const { clientSecret } = response.data;
  
// //         const result = await stripe.confirmCardPayment(clientSecret, {
// //           payment_method: paymentMethodId,
// //         });
  
// //         if (result.error) {
// //           setError(result.error.message);
// //         } else {
// //           if (result.paymentIntent.status === 'succeeded') {
// //             setSuccess(true);
// //           }
// //         }
// //       } catch (error) {
// //         setError(error.message);
// //       }
// //     };

// //   return (
// //     <div className='payment-container'>
// //         <div className='payment-title'>Pay By</div>
// //     <form onSubmit={handleSubmit} className='payment-form'>
        
// //       <label>
// //         Name on Card<br/>
// //         <input
// //           type='text'
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           className='payment-input'
// //         />
// //       </label>
// //       <label>
// //         Card Number
// //         <CardNumberElement  className='payment-input' />
// //       </label>

// //       <div className='expiryNcvc'>
// //       <label>
// //         Expiry Date
// //         <CardExpiryElement  className='payment-input' />
// //       </label>
// //       <label>
// //         CVC
// //         <CardCvcElement  className='payment-input' />
// //       </label>
// //       </div>

// //       <button type="submit" disabled={!stripe} className="payment-button">
// //       Pay ₹{amount}
// //       </button>
// //       {error && <div className="payment-error">{error}</div>}
// //       {success && <div className="payment-success">Payment Successful!</div>}
// //     </form>
// //     </div>
// //   );
// // };

// // const PaymentPage = () => (
// //   <Elements stripe={stripePromise}>
// //     <CheckoutForm />
// //   </Elements>
// // );

// // export default PaymentPage;


// import React, { useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import '../styles/PaymentPage.css';

// const stripePromise = loadStripe('pk_test_51PbloSFNweSIly0ti4T7ykauTOaqqykE6ftANKaI8NgqmRC4cuPLK2kWd0GOdlfKG856ICqaVBq58u5UAJWcINM000dnZlbi3a');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const { id } = useParams();
//   const location = useLocation();
//   const { amount } = location.state || {}; // Get the amount from the location state

//   const [name, setName] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     if (!name) {
//       setError('Please enter the name on the card');
//       return;
//     }

//     const cardElement = elements.getElement(CardNumberElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//       billing_details: {
//         name,
//       },
//     });

//     if (error) {
//       setError(error.message);
//       return;
//     }

//     const { id: paymentMethodId } = paymentMethod;

//     try {
//       console.log('Amount:', amount); // Debug: Check if amount is being passed correctly
//       console.log('Payment Method ID:', paymentMethodId); // Debug: Check payment method ID

//       const response = await axios.post('http://localhost:3000/api/payment/create-payment-intent', {
//         amount, // Use the amount from the location state
//         paymentMethodId,
//         hotelId: id,
//       });

//       console.log('Response from backend:', response.data); // Debug: Check response from backend

//       const { clientSecret } = response.data;

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: paymentMethodId,
//       });

//       if (result.error) {
//         setError(result.error.message);
//       } else {
//         if (result.paymentIntent.status === 'succeeded') {
//           setSuccess(true);
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error('Error creating payment intent:', error); // Log the error to console
//     }
//   };

//   return (
//     <div className='payment-container'>
//       <div className='payment-title'>Pay By</div>
//       <form onSubmit={handleSubmit} className='payment-form'>
//         <label>
//           Name on Card<br/>
//           <input
//             type='text'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className='payment-input'
//           />
//         </label>
//         <label>
//           Card Number
//           <CardNumberElement className='payment-input' />
//         </label>

//         <div className='expiryNcvc'>
//           <label>
//             Expiry Date
//             <CardExpiryElement className='payment-input' />
//           </label>
//           <label>
//             CVC
//             <CardCvcElement className='payment-input' />
//           </label>
//         </div>

//         <p className="amount">Amount: ₹{amount}</p> {/* Display the amount */}
        
//         <button type="submit" disabled={!stripe} className="payment-button">
//           Pay ₹{amount} {/* Display the amount on the button */}
//         </button>
//         {error && <div className="payment-error">{error}</div>}
//         {success && <div className="payment-success">Payment Successful!</div>}
//       </form>
//     </div>
//   );
// };

// const PaymentPage = () => (
//   <Elements stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// );

// export default PaymentPage;
