import Item1 from '../components/images/sneaker-images/adidasAWang.jpg'
import Item2 from '../components/images/sneaker-images/adidasNeighborhood.jpg'
import Item3 from '../components/images/sneaker-images/adidasNMDHumanRaceYellow.jpg'
import Item4 from '../components/images/sneaker-images/adidasNMDNERD.jpg'
import Item5 from '../components/images/sneaker-images/adidasUndefeated.jpg'
import Item6 from '../components/images/sneaker-images/chuckTaylorCDG.jpg'
import Item7 from '../components/images/sneaker-images/chuckTaylorKith .jpg'
import Item8 from '../components/images/sneaker-images/jordan1Bred.jpg'
import Item9 from '../components/images/sneaker-images/jordan1OffWhite.jpg'
import Item10 from '../components/images/sneaker-images/jordan1OffWhiteUNC.jpg'
import Item11 from '../components/images/sneaker-images/jordan1Royal.jpg'
import Item12 from '../components/images/sneaker-images/jordan1Union.jpg'
import Item13 from '../components/images/sneaker-images/jordan3BlackCement.jpg'
import Item14 from '../components/images/sneaker-images/jordan3WhiteCement.jpg'
import Item15 from '../components/images/sneaker-images/jordan4WhiteCement.jpg'
import Item16 from '../components/images/sneaker-images/jordan11Bred.jpg'
import Item17 from '../components/images/sneaker-images/nikeAdapt.jpg'
import Item18 from '../components/images/sneaker-images/nikeAirForce1.jpg'
import Item19 from '../components/images/sneaker-images/nikeAirForce1TravisScott.jpg'
import Item20 from '../components/images/sneaker-images/nikeAirMag.jpg'
import Item21 from '../components/images/sneaker-images/nikeAirMax1:97.jpg'
import Item22 from '../components/images/sneaker-images/nikeAirMax1.jpg'
import Item23 from '../components/images/sneaker-images/nikeAirMax1Parra.jpg'
import Item24 from '../components/images/sneaker-images/nikeAirMax98Gundam.jpg'
import Item25 from '../components/images/sneaker-images/nikeAirMax180CDG.jpg'
import Item26 from '../components/images/sneaker-images/nikeAirMax720.jpg'
import Item27 from '../components/images/sneaker-images/nikeAirPrestoAcronym.jpg'
import Item28 from '../components/images/sneaker-images/nikeDunkDiamond.jpg'
import Item29 from '../components/images/sneaker-images/nikeDunkPigeon.jpg'
import Item30 from '../components/images/sneaker-images/nikeEpicReact.jpg'
import Item31 from '../components/images/sneaker-images/nikeFlyknitRacer.jpg'
import Item32 from '../components/images/sneaker-images/nikeFlyknitTrainer.jpg'
import Item33 from '../components/images/sneaker-images/nikeFOGAir.jpg'
import Item34 from '../components/images/sneaker-images/nikeFOGSkylon.jpg'
import Item35 from '../components/images/sneaker-images/nikeGalaxyFoamposite.jpg'
import Item36 from '../components/images/sneaker-images/nikeSupremeFoamposite.jpg'
import Item37 from '../components/images/sneaker-images/nikeHyperAdapt.jpg'
import Item38 from '../components/images/sneaker-images/nikeLebron15Kith.jpg'
import Item39 from '../components/images/sneaker-images/nikePresto.jpg'
import Item40 from '../components/images/sneaker-images/nikeReactElement87.jpg'
import Item41 from '../components/images/sneaker-images/nikeTomSachsMarsYard.jpg'
import Item42 from '../components/images/sneaker-images/nikeVaporMaxCDG.jpg'
import Item43 from '../components/images/sneaker-images/nikeZoomFlyOffWhite.jpg'
import Item44 from '../components/images/sneaker-images/vansFOGEra.jpg'
import Item45 from '../components/images/sneaker-images/vansOldSkool.jpg'
import Item46 from '../components/images/sneaker-images/vansYachtClub.jpg'
import Item47 from '../components/images/sneaker-images/versaceChainReaction.jpg'
import Item48 from '../components/images/sneaker-images/yeezy700.jpg'
import Item49 from '../components/images/sneaker-images/yeezyStatic.jpg'
import Item50 from '../components/images/sneaker-images/yeezyBoost750OG.jpg'
import { REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from './actions/cartActions'
import { ADD_TO_CART,ADD_TO_ROTATION, REMOVE_FROM_ROTATION, SET_SNEAKERS } from './actions/sneakerActions'
import releaseReducer from './realeaseReducer'

const initState = {
  // sneakers: {...itemsReducer},
  releases:{...releaseReducer},
  sneakers: [
    // {id:1,title:'Adidas Alexander Wang', price:200, img:Item1},
    // {id:2,title:'Adidas Neighborhood', price:200, img:Item2},
    // {id:3,title:'Adidas NMD Human Race - Yellow', price:200, img:Item3},
    // {id:4,title:'Adidas NMD Human Race - N.E.R.D.', price:200, img:Item4},
    // {id:5,title:'Adidas Undefeated', price:200, img:Item5},
    // {id:6,title:'Chuck Taylor CDG', price:200, img:Item6},
    // {id:7,title:'Chuck Taylor Kith ', price:200, img:Item7},
    // {id:8,title:'Jordan 1 - Bred', price:200, img:Item8},
    // {id:9,title:'Jordan 1 - Off-White', price:200, img:Item9},
    // {id:10,title:'Jordan 1 - Off-White (UNC)', price:200, img:Item10},
    // {id:11,title:'Jordan 1 - Royal', price:200, img:Item11},
    // {id:12,title:'Jordan 1 - Union', price:200, img:Item12},
    // {id:13,title:'Jordan 3 - Black Cement', price:200, img:Item13},
    // {id:14,title:'Jordan 3 - 88', price:200, img:Item14},
    // {id:15,title:'Jordan 4 White Cement', price:200, img:Item15},
    // {id:16,title:'Jordan 11 Bred', price:200, img:Item16},
    // {id:17,title:'Nike Adapt', price:200, img:Item17},
    // {id:18,title:'Nike Air Force 1', price:200, img:Item18},
    // {id:19,title:'Nike Air Force 1 - Travis Scott', price:200, img:Item19},
    // {id:20,title:'Nike Air Mag', price:200, img:Item20},
    // {id:21,title:'Nike Air Max 1/97 - Sean Wotherspoon', price:200, img:Item21},
    // {id:22,title:'Nike Air Max 1', price:200, img:Item22},
    // {id:23,title:'Nike Air Max 1 - Parra', price:200, img:Item23},
    // {id:24,title:'Nike Air Max 98 - Gundam', price:200, img:Item24},
    // {id:25,title:'Nike Air Max 180 - CDG', price:200, img:Item25},
    // {id:26,title:'Nike Air Max 720', price:200, img:Item26},
    // {id:27,title:'Nike Air Presto - Acronym', price:200, img:Item27},
    // {id:28,title:'Nike Dunk - Diamond', price:200, img:Item28},
    // {id:29,title:'Nike Dunk - Pigeon', price:200, img:Item29},
    // {id:30,title:'Nike Epic React', price:200, img:Item30},
    // {id:31,title:'Nike Flyknit Racer', price:200, img:Item31},
    // {id:32,title:'Nike Flyknit Trainer', price:200, img:Item32},
    // {id:33,title:'Nike Air Fear of God', price:200, img:Item33},
    // {id:34,title:'Nike Fear of God Skylon', price:200, img:Item34},
    // {id:35,title:'Nike Foamposite - Galaxy', price:200, img:Item35},
    // {id:36,title:'Nike Foamposite - Supreme', price:200, img:Item36},
    // {id:37,title:'Nike Hyper Adapt', price:200, img:Item37},
    // {id:38,title:'Nike Lebron 15 - Kith', price:200, img:Item38},
    // {id:39,title:'Nike Presto', price:200, img:Item39},
    // {id:40,title:'Nike React Element 87', price:200, img:Item40},
    // {id:41,title:'Nike Mars Yard - Tom Sachs', price:200, img:Item41},
    // {id:42,title:'Nike Vapor Max - CDG', price:200, img:Item42},
    // {id:43,title:'Nike Zoom Fly - Off-White', price:200, img:Item43},
    // {id:44,title:'Vans Era - Fear of God', price:200, img:Item44},
    // {id:45,title:'Vans Old Skool', price:200, img:Item45},
    // {id:46,title:'Vans Old Skool - YachtClub', price:200, img:Item46},
    // {id:47,title:'Versace Chain Reaction', price:200, img:Item47},
    // {id:48,title:'Yeezy 700', price:200, img:Item48},
    // {id:49,title:'Yeezy 700 - Static', price:200, img:Item49},
    // {id:50,title:'Yeezy Boost 750', price:200, img:Item50},
  ],
  addRemovePhrase: "",
  rotationItems: [],
  cartItems:[],
  total: 0
}
const sneakerReducer = (state = initState, action)=>{
  if(action.type === SET_SNEAKERS) {
    return {
      ...state,
      sneakers: action.response.items
    }
  }
  
  //ADD TO ROTATION function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if(action.type === ADD_TO_ROTATION){
    let newItem = state.sneakers.find(item=> item.id === action.id)
    //check if the action id exists in the rotationItems
    let existed_item = state.rotationItems.find(item => action.id === item.id)
    if(existed_item) {
      return null
    } else {
      newItem.quantity = 1; 
      return{
        ...state,
        rotationItems: [...state.rotationItems, newItem]
      }
    }
  }

  //REMOVE FROM ROTATION function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if(action.type === REMOVE_FROM_ROTATION){
    let itemToRemove= state.rotationItems.find(item=> action.id === item.id)
    let new_items = state.rotationItems.filter(item=> action.id !== item.id)
    console.log(itemToRemove)
    return{
      ...state,
      rotationItems: new_items
    }
  }
  
  //ADD TO CART function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if(action.type === ADD_TO_CART){
    let newItem = state.sneakers.find(item=> item.id === action.id)
    //check if the action id exists in the cartItems
    let existed_item = state.cartItems.find(item => action.id === item.id)
    if(existed_item) {
      newItem.quantity += 1 
      return{
        ...state,
        total: state.total + newItem.price 
      }
    } else {
      newItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + newItem.price  
      return{
        ...state,
        cartItems: [...state.cartItems, newItem],
        total : newTotal
      }
    }
  }

  //REMOVE FROM CART function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.cartItems.find(item=> action.id === item.id)
    let new_items = state.cartItems.filter(item=> action.id !== item.id)
    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
      ...state,
      cartItems: new_items,
      total: newTotal
    }
  }
  
  //INCREASE QUANTITY function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if(action.type === ADD_QUANTITY){
    let cartItem = state.items.find(item=> item.id === action.id)
    cartItem.quantity += 1 
    let newTotal = state.total + cartItem.price
    return{
      ...state,
      total: newTotal
    }
  }

  //DECREASE QUANTITY function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if(action.type=== SUB_QUANTITY){  
    let cartItem = state.items.find(item => item.id === action.id) 
    //if the qt == 0 then it should be removed
    if(cartItem.quantity === 1){
      let new_items = state.cartItems.filter(item=>item.id !== action.id)
      let newTotal = state.total - cartItem.price
      return{
        ...state,
        cartItems: new_items,
        total: newTotal
      }
    } else {
      cartItem.quantity -= 1
      let newTotal = state.total - cartItem.price
      return{
        ...state,
        total: newTotal
      }
    }
  }

  if(action.type === 'ADD_SHIPPING'){
    return{
    ...state,
    total: state.total + 6
    }
  }

  if(action.type === 'SUB_SHIPPING'){
    return{
    ...state,
    total: state.total - 6
    }
  }

  return state
}
export default sneakerReducer;
