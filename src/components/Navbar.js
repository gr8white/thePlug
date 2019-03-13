import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () =>{
  return(
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Shop
          </Link>
          <Link to="/myrotation" className="navbar-item">
            MyRotation
          </Link>
        </div>
        
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/cart">My cart</Link>
              <Link className="button is-primary" to="/cart"><i className="fa fa-shopping-cart"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;