

import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/HotelInfo.css';
import HotelData from '../hotelsdata';

// HotelInfo Component
const HotelInfo = () => {
  const { id } = useParams();
  const hotel = HotelData.find(h => h.id === parseInt(id));

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

        <div className="book-button">
          <button>Book Now</button>
        </div>
  
      </div>
    </div>
  );
};

export default HotelInfo;
