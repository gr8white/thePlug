import {SET_POSTS} from './actions/newsActions'

const initState = {
  posts: []
}

const newsReducer = (state = initState, action)=>{
  if(action.type === SET_POSTS) {
    return {
      posts: action.response.items
    }
  }
  
  return state
}

export default newsReducer