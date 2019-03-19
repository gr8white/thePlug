import React, { Component } from 'react';
import { connect } from 'react-redux'
import CartItem from './CartItem';
import Shipping from './Shipping'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'

class Cart extends Component{

  //to remove the item completely
  handleRemove = (id)=>{
    this.props.removeItem(id);
  }
  //to add the quantity
  handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
  }

  render(){
    return(
      <div className="container" style={{marginTop: 5.5 + 'em'}}>
        <h5>You have ordered</h5>
          <div className="columns is-centered">
            <div className="column is-8">   
            {this.props.items.length ?
              this.props.items.map( (item) =>
              <CartItem
                {...item}
                onPress={() => this.props.handleRemove()} />
              ) : (<p>Please add something to your cart.</p>)}
            </div>
        </div>
        <Shipping />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    items: state.cartItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
