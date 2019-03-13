import React, { Component } from 'react';
import { connect } from 'react-redux'
import CartItem from './CartItem';

class Cart extends Component{

  render(){
    return(
      <div class="container">
        <div class="box">
          <div class="columns is-centered">
            <div class="column is-6">   
            {this.props.items.length ?
              this.prop.items.map( (item) =>
              <CartItem
                {...item}
              />
              ): (<p>Please add something to your cart.</p>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    items: state.cartReducer.cartItems
  }
}

export default connect(mapStateToProps)(Cart)
