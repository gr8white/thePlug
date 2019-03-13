import itemsReducer from './itemsReducer'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'

const initState = {
  cartItems:[],
  total: 0
}
const cartReducer = (state = initState, sneakers = itemsReducer,action)=>{
  // //ADD TO CART function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // if(action.type === ADD_TO_CART){
  //   let newItem = sneakers.items.find(item=> item.id === action.id)
  //   //check if the action id exists in the cartItems
  //   let existed_item = state.cartItems.find(item => action.id === item.id)
  //   if(existed_item) {
  //     newItem.quantity += 1 
  //     return{
  //       ...state,
  //       total: state.total + newItem.price 
  //     }
  //   } else {
  //     state.cartItem.quantity = 1;
  //     //calculating the total
  //     let newTotal = state.total + newItem.price 
      
  //     return{
  //       ...state,
  //       cartItems: [...state.cartItems, newItem],
  //       total : newTotal
  //     }
  //   }
  // }

  // //REMOVE FROM CART function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // if(action.type === REMOVE_ITEM){
  //   let itemToRemove= state.cartItems.find(item=> action.id === item.id)
  //   let new_items = state.cartItems.filter(item=> action.id !== item.id)
    
  //   //calculating the total
  //   let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
  //   console.log(itemToRemove)
  //   return{
  //     ...state,
  //     cartItems: new_items,
  //     total: newTotal
  //   }
  // }
  
  // //INCREASE QUANTITY function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // if(action.type === ADD_QUANTITY){
  //   let cartItem = state.items.find(item=> item.id === action.id)
  //   cartItem.quantity += 1 
  //   let newTotal = state.total + cartItem.price
  //   return{
  //     ...state,
  //     total: newTotal
  //   }
  // }

  // //DECREASE QUANTITY function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // if(action.type=== SUB_QUANTITY){  
  //   let cartItem = state.items.find(item => item.id === action.id) 
  //   //if the qt == 0 then it should be removed
  //   if(cartItem.quantity === 1){
  //     let new_items = state.cartItems.filter(item=>item.id !== action.id)
  //     let newTotal = state.total - cartItem.price
  //     return{
  //       ...state,
  //       cartItems: new_items,
  //       total: newTotal
  //     }
  //   } else {
  //     cartItem.quantity -= 1
  //     let newTotal = state.total - cartItem.price
  //     return{
  //       ...state,
  //       total: newTotal
  //     }
  //   }
  // }

  // if(action.type === 'ADD_SHIPPING'){
  //   return{
  //   ...state,
  //   total: state.total + 6
  //   }
  // }

  // if(action.type === 'SUB_SHIPPING'){
  //   return{
  //   ...state,
  //   total: state.total - 6
  //   }
  // }

  return state
}
export default cartReducer;
