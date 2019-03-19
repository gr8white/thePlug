import React, { Component } from 'react'
import { addToCart, addToRotation, removeFromRotation } from './actions/sneakerActions'
import { connect } from 'react-redux'

const SneakerCard = (item) => {
  
  let handleAddToCart = (id) => {
    item.addToCart(id);
  }

  let handleAddToRotation = (id) => {
    item.addToRotation(id);
  }

  let handleRemoveFromRotation = (id) => {
    item.removeFromRotation(id);
  }

  let AddToRotationButton = (props) => {
    return (
      <p className="card-footer-item button is-white has-text-centered rotationButton" onClick={()=>{handleAddToRotation(item.id)}}>
        {item.addRemovePhrase} Rotation
    </p> )
  }

  let RemoveFromRotationButton = (props) => {
    return (
      <p className="card-footer-item button is-white has-text-centered rotationButton" onClick={()=>{handleRemoveFromRotation(item.id)}}>
        {item.addRemovePhrase} Rotation
    </p> )
  }

  let WhichButton = (props) => {
    const rotationButton = props.rotationButton;
    if (rotationButton) {
      return <AddToRotationButton />
    } else {
      return <RemoveFromRotationButton />
    }
  }

  return (
    <div className="column is-3" key={item.id}>
      <div className="card sneakerCard">
        <figure className="image sneakerPhoto is-5by3">
          <img src={item.img} alt={item.title}/>
        </figure>
        <div className="card-content" style={{height: 111 + 'px'}}>
          <p className="title is-5">{item.title}</p>
          <p className="subtitle is-7"><b>Price: ${item.price}</b></p>
        </div>
        <footer className="card-footer">
          <WhichButton rotationButton={item.rotationButton}/>
          <p className="card-footer-item button is-white cart-icon" style={{height: 48 + 'px'}} onClick={()=>{handleAddToCart(item.id)}}>
            <span>
              <i className="fa fa-shopping-cart"></i>
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.sneakers.items
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addToCart: (id)=>{dispatch(addToCart(id))},
    addToRotation: (id)=>{dispatch(addToRotation(id))},
    removeFromRotation: (id)=>{dispatch(removeFromRotation(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakerCard)
