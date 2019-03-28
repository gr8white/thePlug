import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from '../reducers/actions/cartActions'

const CartItem = (item) => {
  
  //to remove the item completely
  let handleClick = (id)=>{
    item.removeItem(id);
  }
  
  return (
    <div className="box cart-item level" key={item.id}>
      
        {/* <div className="level-left"> */}
          <button className="delete is-large level-item" onClick={()=>{handleClick(item.id)}}/>
          <div className="level-item">
            <figure className="image is-128x128 sneakerPhoto"> 
              <img src={item.image} alt={item.image} className="" style={{flexShrink: 0, minWidth: '100%'}}/>
            </figure>
          </div>
          <p className="sneakerName is-5 level-item">{item.title}</p>
          <p className="level-item">Price: ${item.price}</p>
        {/* </div> */}
        
        <div className="level-right">
          <p className="level-item">Quant:</p>
          <input className="level-item"type="number" value={item.quantity} readOnly name="quantity" min="1" max="5"/>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
