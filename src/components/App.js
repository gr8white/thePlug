import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Shop from './Shop'
import Cart from './CartPage'
import MyRotation from './MyRotation'
import Home from './Home'
import News from './News'


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
            <Route path="/news" component={News}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
