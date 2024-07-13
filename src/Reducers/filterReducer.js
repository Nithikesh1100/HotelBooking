
// import hotelsdata from "../hotelsdata";

// const initialState ={
    
//     hotels:hotelsdata,
//     filteredProducts:hotelsdata,
//     filters:{
//         city:"all",
//         state:"all",
//         price:0,
//         maxPrice:0,
//         minPrice:0,
//     },
// }

// const filterReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'UPDATE_FILTERS_VALUE':
//         return {
//           ...state,
//           filters: {
//             ...state.filters,
//             [action.payload.name]: action.payload.value
//           }
//         };

//         case 'FILTER_VALUE':

//         const { city} = state.filters;
//         let filteredHotels = hotelsdata;

//         if (city !== 'all') {
//             filteredHotels = filteredHotels.filter(hotel => hotel.city === city);
//           }

//         // if(state != 'all'){
//         //     filteredHotels = filteredHotels.filter(hotel => hotel.state === state);
//         // }


//         return {
//          ...state,
//          filterProducts: filteredHotels,
          
//         };
//       default:
//         return state;
//     }
//   };

// export default filterReducer;

import hotelsdata from "../hotelsdata";

// Calculate initial min and max price
const prices = hotelsdata.map(hotel => hotel.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);

const initialState = {
  hotels: hotelsdata,
  filterProducts: hotelsdata, // Initialize with all hotels
  filters: {
    city: "all",
    state: "all",
    price: maxPrice, // Initialize price filter with maxPrice
    maxPrice: maxPrice,
    minPrice: minPrice,
  },
  isAuthenicated: false,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FILTERS_VALUE':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value
        }
      };

    case 'FILTER_VALUE':
      const { city, state: filterState, price } = state.filters;
      let filteredHotels = hotelsdata;

      if (city !== 'all') {
        filteredHotels = filteredHotels.filter(hotel => hotel.city === city);
      }

      if (filterState !== 'all') {
        filteredHotels = filteredHotels.filter(hotel => hotel.state === filterState);
      }

      filteredHotels = filteredHotels.filter(hotel => hotel.price <= price);

      return {
        ...state,
        filterProducts: filteredHotels
      };

      case "CLEAR_FILTERS":{
        console.log('hi');
        return {
         ...state,
         filterProducts: hotelsdata,
          filters: {
            city: "all",
            state: "all",
            price: maxPrice,
            maxPrice: maxPrice,
            minPrice: minPrice,
          },
          
        };
      }

    default:
      return state;
  }
};

export default filterReducer;
