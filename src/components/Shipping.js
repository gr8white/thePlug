import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { addShipping } from './actions/cartActions'

class Shipping extends Component{

  componentWillUnmount() {
    if(this.refs.shipping.checked){
      this.props.substractShipping()
    }
  }

  handleChecked = (e) =>{
    if(e.target.checked){
      this.props.addShipping();
    }
    else{
      this.props.substractShipping();
    }
  }

  render(){
    return(
      <div className="box" style={{display: 'block'}}>
        <div className='level'>
          <div className='level-left'>
<div className=" level-item checkout">
          <button className="button is-primary">Checkout</button>
        </div>
          </div>
          <div className='level-right'>
<div className="level-item collection " style={{display: 'block'}}>
          <li className="collection-item " >
            <label>
              <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
              <span>Shipping(+$6)</span>
            </label>
          </li>
          <li className="collection-item"><b>Total: ${this.props.total}</b></li>
        </div>
          </div>
        </div>
        
        
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    addedItems: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
    substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shipping)