

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateFilterValue, filterHotels, clearFilters } from '../Action';
// import hotelsData from '../hotelsdata';
// import '../styles/FilterSection.css';

// const FilterSection = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector(state => state.filters);

//   const getUniqueData = (data, attr) => {
//     if (!data) return []; // Return an empty array if data is undefined or null
//     const uniqueValues = data.map(currElem => currElem[attr]);
//     return ['all', ...new Set(uniqueValues)];
//   };

//   const cityData = getUniqueData(hotelsData, 'city');
//   const stateData = getUniqueData(hotelsData, 'state');

//   const handleFilterChange = event => {
//     dispatch(updateFilterValue(event));
//     dispatch(filterHotels(event));
//   };

//   // Calculate price range
//   const prices = hotelsData.map(hotel => hotel.price);
//   const minPrice = Math.min(...prices);
//   const maxPrice = Math.max(...prices);

//   // Initialize price filter state
//   const [price, setPrice] = useState(maxPrice);

//   const handlePriceChange = event => {
//     setPrice(event.target.value);
//     handleFilterChange(event);
//   };

//   return (
//     <div>
//       Filter by
//       <div className='filter-city'>
//         <form>
//           City
//           <select
//             name='city'
//             id='city'
//             className='city-select'
//             value={filters.city}
//             onChange={handleFilterChange}
//           >
//             {cityData.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </form>
//       </div>
//       <div className='filter-state'>
//         <form>
//           State
//           <select
//             name='state'
//             id='state'
//             className='state-select'
//             value={filters.state}
//             onChange={handleFilterChange}
//           >

//             {stateData.map((state, index) => (
//               <option key={index} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </form>
//       </div>
//       <div className='filter-price'>
//         <h3>Price</h3>
//         {price}
//         <input
//           type="range"
//           name="price"
//           min={minPrice}
//           max={maxPrice}
//           value={price}
//           onChange={handlePriceChange}
//           step={100}
//         />
//       </div>

//       <div className='clear-btn'>
//         <button className='button' onClick={() => dispatch(clearFilters())}>Clear</button>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;

import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { updateFilterValue, filterHotels, clearFilters } from '../Action';
import hotelsData from '../hotelsdata';
import '../styles/FilterSection.css';

const FilterSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const getUniqueData = (data, attr) => {
    if (!data) return []; // Return an empty array if data is undefined or null
    const uniqueValues = data.map(currElem => currElem[attr]);
    return ['all', ...new Set(uniqueValues)];
  };

  const cityData = getUniqueData(hotelsData, 'city');
  const stateData = getUniqueData(hotelsData, 'state');

  const handleFilterChange = event => {
    dispatch(updateFilterValue(event));
    dispatch(filterHotels(event));
  };

  // Calculate price range
  const prices = hotelsData.map(hotel => hotel.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Initialize price filter state
  const [price, setPrice] = useState(maxPrice);

  const handlePriceChange = event => {
    setPrice(event.target.value);
    handleFilterChange(event);
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());

    // Reset price slider to maxPrice
    setPrice(maxPrice);
  };

  return (
    <div>
      Filter by
      <div className='filter-city'>
        <form>
          City
          <select
            name='city'
            id='city'
            className='city-select'
            value={filters.city} // Ensure 'all' is selected if filters.city is undefined/null
            onChange={handleFilterChange}
          >
            {cityData.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className='filter-state'>
        <form>
          State
          <select
            name='state'
            id='state'
            className='state-select'
            // value={filters.state || 'all'} // Ensure 'all' is selected if filters.state is undefined/null
            onChange={handleFilterChange}
          >
            {stateData.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className='filter-price'>
        <h3>Price</h3>
        {price}
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handlePriceChange}
          step={100}
        />
      </div>

      <div className='clear-btn'>
        <button className='button' onClick={handleClearFilters}>Clear</button>
      </div>
    </div>
  );
};

export default FilterSection;
