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
    <div className="box" key={item.id}>
      <nav className="level">
        {/* <!-- Left side --> */}
        <div className="level-left">
          <div className="level-item">
            <button className="delete is-large column" onClick={()=>{handleRemove(item.id)}}/>
          </div>
          <div className="level-item" style={{marginLeft: '25px'}}>
            <figure className="image is-128x128" style=
            {{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'}}> 
              <img src={item.img} alt={item.img} className="" style={{flexShrink: 0, minWidth: '100%'}}/>
            </figure>
          </div>
          <div className="level-item has-text-left">
            <div>
              <p className="title">{item.title}</p>
              <p className="heading">Price: ${item.price}</p>
            </div>
          </div>
        </div>
        {/* <!-- Right side --> */}
        <div className="level-right">
          <p className="heading">Quant:</p>
          <input type="number" value={item.quantity} readOnly name="quantity" min="1" max="5"/>
        </div>
      </nav>
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
