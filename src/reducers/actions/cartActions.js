export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';

export const removeItem=(id)=>{
  return{
    type: REMOVE_ITEM,
    id
  }
}

export const subtractQuantity=(id)=>{
  return{
    type: SUB_QUANTITY,
    id
  }
}

export const addQuantity=(id)=>{
  return{
    type: ADD_QUANTITY,
    id
  }
}

