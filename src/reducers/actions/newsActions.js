export const SET_POSTS = 'SET_POSTS';

export const setPosts=(response)=>{
  return{
    type: SET_POSTS,
    response
  }
}