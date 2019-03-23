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
      <div className="page-wrapper" style={{marginTop: 3.5 + 'rem'}}>
        <div className="columns is-centered">
          <div className="column is-8" >
            <div className="columns topSpace">
              <div className="column">
                <div className="box sneakerCardHolder">
                  <h5 className='title'>Your Cart</h5>
                  <div className="columns is-centered">
                    <div className="column">   
                        {this.props.items.length ?
                          this.props.items.map( (item) =>
                          <CartItem
                            {...item}
                            onPress={() => this.props.handleRemove()} />
                          ) : (<p>Please add something to your cart.</p>)}
                        </div>
                    </div>
                </div>
                <Shipping />
              </div>
            </div>
          </div>
        </div>
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
