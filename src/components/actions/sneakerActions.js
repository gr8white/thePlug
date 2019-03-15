export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_ROTATION = 'ADD_TO_ROTATION';
export const REMOVE_FROM_ROTATION = 'REMOVE_FROM_ROTATION';

export const addToCart= (id)=>{
  return{
    type: ADD_TO_CART,
    id 
  }
}

export const addToRotation= (id)=>{
  return{
    type: ADD_TO_ROTATION,
    id 
  }
}

export const removeFromRotation= (id)=>{
  return{
    type: REMOVE_FROM_ROTATION,
    id 
  }
}