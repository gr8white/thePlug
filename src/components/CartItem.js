import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'

const CartItem = (item) => {
  
  //to remove the item completely
  let handleRemove = (id)=>{
    this.props.removeItem(id);
  }
  //to add the quantity
  let handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
  }
  //to substruct from the quantity
  let handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
  }
  
  return (
    <div class="box" key={item.id}>
      <nav class="level">
        {/* <!-- Left side --> */}
        <div class="level-left">
          <div class="level-item">
            <a class="delete is-large column" onClick={()=>{handleRemove(item.id)}}/>
          </div>
          <div class="level-item" style="margin-left: 25px">
            <figure class="image is-128x128" style="
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        "> 
              <img src={item.img} alt={item.img} class="" style="
              flex-shrink: 0;
              min-width: 100%
          "/>
            </figure>
          </div>
          <div class="level-item has-text-left">
            <div>
              <p class="title">{item.title}</p>
              <p class="heading">Price: ${item.price}</p>
            </div>
          </div>
        </div>
        {/* <!-- Right side --> */}
        <div class="level-right">
          <p class="heading">Quant:</p>
          <input type="number" value={item.quantity} name="quantity" min="1" max="5"/>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.cartItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
