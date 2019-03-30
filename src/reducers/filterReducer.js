const filtersReducerDefaultState = {
  sortBy: '',
  brand: '',
  color: '',
  size: '',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_MAX_PRICE':
      console.log('max price was changed')
      return {
        ...state,
        sortBy: 'maxPrice'
      };
    case 'SORT_BY_MIN_PRICE':
      console.log('min price was changed')
      return {
        ...state,
        sortBy: 'minPrice'
      };
    case 'SET_BRAND':
      console.log('brand was changed')
      return {
        ...state,
        brand: action.brand
      };
    case 'SET_COLOR':
    console.log('color was changed')
      return {
        ...state,
        color: action.color
      };
    case 'SET_SIZE':
    console.log('size was changed')
      return {
        ...state,
        size: action.size
      };
    default:
      return state;
  }
};