export const sortByMaxPrice = () => ({
  type: 'SORT_BY_MAX_PRICE',
  sortBy: 'maxPrice'
});

export const sortByMinPrice = () => ({
  type: 'SORT_BY_MIN_PRICE',
  sortBy: 'minPrice'
});

export const setBrand = (brand = undefined) => ({
  type: 'SET_BRAND',
  brand
});

export const setColor = (color = undefined) => ({
  type: 'SET_COLOR',
  color
});

export const setSize = (size = undefined) => ({
  type: 'SET_SIZE',
  size
});
