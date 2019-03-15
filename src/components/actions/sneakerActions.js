import { ADD_TO_CART,ADD_TO_ROTATION,REMOVE_FROM_ROTATION} from './action-types/sneaker-actions'

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