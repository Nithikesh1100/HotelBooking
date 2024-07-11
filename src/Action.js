
export const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return {
        type: "UPDATE_FILTERS_VALUE", 
        payload: { name, value }
    };
  };

export const filterHotels = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return {
        type: "FILTER_VALUE",
        payload: { name, value }
    };
  };

export const clearFilters=()=>{
    return {
        type: "CLEAR_FILTERS"
    };
};
