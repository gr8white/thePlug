import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Shop from './Shop'
import Cart from './CartPage'
import MyRotation from './MyRotation'
import Home from './Home'
import Footer from './Footer'

class App extends Component {
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
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
