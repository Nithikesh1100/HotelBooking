

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HotelCard from './HotelCard';

import '../styles/Hotels.css';
import FilterSection from './FiltersSection';

const Hotels = () => {
  const filteredHotels = useSelector(state => state.filters.filterProducts);

  // State for handling search term
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter hotels based on search term
  const filteredHotelsBySearch = filteredHotels.filter(hotel =>
    hotel.hotelname.toLowerCase().includes(searchTerm) ||
    hotel.city.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='hotels'>
      <div className='filter-section'>
        <FilterSection />
      </div>
      <div className='hotel-section'>
        <div className='search'>
          <input
            type='text'
            placeholder='Search by hotel name, city, or address'
            className='search-input'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className='hotel-grid'>
          {filteredHotelsBySearch.map(hotel => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              photo={hotel.photos[0]}
              hotelname={hotel.hotelname}
              hotelchainname={hotel.hotelchainname}
              city={hotel.city}
              address={hotel.address}
              totalreviews={hotel.totalreviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
