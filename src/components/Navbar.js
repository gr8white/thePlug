import React from 'react';
import { Link } from 'react-router-dom'
import logo from './images/sneaker-images/logo-gif/2w4o22.gif'


const Navbar = () =>{
  return(
    <nav className="navbar is-primary level is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} width='.87rem'/>
          <Link to="/" className="navbar-item"><strong>thePlug</strong></Link>
        </a>
        
        <a role="button" className="navbar-burger burger" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="menu">
        <div className="navbar-start">
          <Link to="/shop" className="navbar-item" style={{marginLeft: 50 + 'px'}}>
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