import React, { Component } from 'react'
import { addToCart } from './actions/cartActions'
import { connect } from 'react-redux'

const SneakerCard = (item) => {
  
  let handleClick = (id) => {
    item.addToCart(id);
  }

  return (
    <div className="column is-3" key={item.id}>
      <div className="box">
        <figure className="image sneakerPhoto">
          <img src={item.img} alt={item.title}/>
        </figure>
        <div className="card-content">
          <p className="title is-4">{item.title}</p>
          <p className="subtitle is-6"><b>Price: ${item.price}</b></p>
          <p className="subtitle is-8">{item.desc}</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item has-text-centered">
            Add to Rotation
          </p>
          <p className="card-footer-item button is-white" style={{height: 48 + 'px'}} onClick={()=>{handleClick(item.id)}}>
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
    items: state.itemsReducer.items
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakerCard)
