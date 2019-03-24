import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import sneakersReducer from './sneakersReducer'
import newsReducer from './newsReducer'
import releaseReducer from './realeaseReducer'

const rootReducer = combineReducers({
  cart: cartReducer, 
  sneakers: sneakersReducer,
  news: newsReducer,
  releases: releaseReducer

})

export default rootReducer