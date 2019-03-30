import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './images/sneaker-images/2w4o22.gif'
import LogInModal from './LogIn/LogInModal'


class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false,
      activeTab: 0
    };
    
    this.toggleModal = this.toggleModal.bind(this);
    this.changeTab = this.changeTab.bind(this)
  }

  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }

  changeTab(newTab) {
    this.setState({activeTab: newTab})
  }

  render() {
    return(
      <div>
        <nav className="navbar is-primary level is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" href="/">
            <img src={logo} width='.87rem'/>
            <Link to="/" className="navbar-item"><strong>thePlug</strong></Link>
          </div>
          
          <div role="button" className="navbar-burger burger" data-target="navMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className="navbar-menu" id="menu">
          <div className="navbar-start">
            <Link to="/shop" className="navbar-item" style={{marginLeft: 50 + 'px'}}>
              Shop
            </Link>
            <Link to="/news" className="navbar-item">
              News
            </Link>
            <Link to="/myrotation" className="navbar-item">
              MyRotation
            </Link>
          </div>
          
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-primary" onClick={()=>{this.toggleModal()}}>Sign In</div>
                <Link className="button is-primary" to="/cart"><i className="fa fa-shopping-cart"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <LogInModal 
        closeModal={this.toggleModal} 
        modalState={this.state.modalState}
        activeTab={this.state.activeTab}
        changeTab={this.changeTab}
      />
      </div>
      
    )
  }
}

export default Navbar;