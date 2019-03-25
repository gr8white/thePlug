import { combineReducers } from 'redux'
import sneakerReducer from './sneakerReducer'
import newsReducer from './newsReducer'

const rootReducer = combineReducers(
  {
    sneakers: sneakerReducer,
    news: newsReducer
  }
)

export default rootReducer