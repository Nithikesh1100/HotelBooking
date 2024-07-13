

import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/HotelInfo.css';
import HotelData from '../hotelsdata';
import { loadStripe } from '@stripe/stripe-js';
// import {useNavigate} from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51PbloSFNweSIly0ti4T7ykauTOaqqykE6ftANKaI8NgqmRC4cuPLK2kWd0GOdlfKG856ICqaVBq58u5UAJWcINM000dnZlbi3a');


// HotelInfo Component
const HotelInfo = () => {
  const { id } = useParams();
  const hotel = HotelData.find(h => h.id === parseInt(id));
  // const navigate = useNavigate();
  
  const data={
    name:hotel.hotelname,
    chain:hotel.hotelchainname,
    price:hotel.price,
  };

  // console.log(data);

  //payment method
  const handleBookNow = async() => {
    // navigate(`/payment/${id}`, { state: { amount: hotel.price } });
    // const stripe = loadStripe('pk_test_51PbloSFNweSIly0ti4T7ykauTOaqqykE6ftANKaI8NgqmRC4cuPLK2kWd0GOdlfKG856ICqaVBq58u5UAJWcINM000dnZlbi3a');
    const stripe = await stripePromise;
    const body={
      product:data
    }

    const headers={
      'Content-Type': 'application/json'
    }

    const response=await fetch('http://localhost:3000/api/payment/create-checkout-session',{
      method:'POST',
      headers:headers,
      body:JSON.stringify(body)
    });

    const session=await response.json();

    const result= stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log('Error:', result.error.message);
    }

  }; 

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="container">
      <div className="carousel-container">
        <Carousel showThumbs={true} infiniteLoop autoPlay>
          {hotel.photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`hotel-pic-${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="info-container">
        <h1 className="title">{hotel.hotelname}</h1>
        <h2 className="subtitle">{hotel.hotelchainname}</h2>
        <p className="location">{hotel.city}, {hotel.state}</p>
        <p className="address">{hotel.address}</p>
        <p className="description">{hotel.description}</p>
        <ul className="facilities">
          {hotel.facilities.map((facility, index) => (
            <li key={index} className="facility">{facility}</li>
          ))}
        </ul>
        <p className="price">Price per night: ₹{hotel.price}</p>
        <p className="rating">Rating: {hotel.rating} ({hotel.totalreviews} reviews)</p>
        {hotel.discount && <p className="discount">Discount available!</p>}

        <div className="book-button" onClick={handleBookNow}>
          <button>Book Now</button>
        </div>
  
      </div>
    </div>
  );
};

export default HotelInfo;
