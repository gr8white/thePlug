import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Shop from './Shop'
import Cart from './Cart'
import MyRotation from './MyRotation'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Shop}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/myrotation" component={MyRotation}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
