import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as contentful from 'contentful'
import Navbar from './Navbar'
import Shop from './Shop'
import Cart from './CartPage'
import MyRotation from './MyRotation'
import Home from './Home'
import News from './NewsPage'
import { connect } from 'react-redux';
import {setPosts} from '../reducers/actions/newsActions'
import {setSneakers} from '../reducers/actions/sneakerActions'

class App extends Component {

  client = contentful.createClient({
    space: 'ptcc2nvzky4i',
    accessToken: '7564cf9303763e85ef9d681f43a329a118f5cb9458ba9448da1da1d87805f6a8'
  })

  componentWillMount() {
    this.fetchPosts('thePlugBlogs').then(this.props.setPosts);
    this.fetchPosts('thePlugSneakers').then(this.props.setSneakers);
  }

  fetchPosts = (content_type) =>  this.client.getEntries({'content_type':(content_type)})

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="page-container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/myrotation" component={MyRotation}/>
            <Route path="/news" component={News}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.posts,
    sneakers: state.sneakers.sneakers
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    setPosts: (response)=> {dispatch(setPosts(response)); console.log(response)},
    setSneakers: (response)=> {dispatch(setSneakers(response)); console.log(response)}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
