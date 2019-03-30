import React, { Component } from 'react'
import { addToCart, addToRotation, removeFromRotation } from '../reducers/actions/sneakerActions'
import { connect } from 'react-redux'
import SneakerModal from './SneakerModal'

let AddToRotationButton = (props) => {
  return (
    <p className="card-footer-item button is-white has-text-centered rotationButton" id="rotationButton" onClick={()=>{props.addToRotation(props.id)}}>
      {props.addRemovePhrase}  Rotation
    </p> 
  )
}

let RemoveFromRotationButton = (props) => {
  return (
    <p className="card-footer-item button is-white has-text-centered rotationButton" id="rotationButton" onClick={()=>{props.removeFromRotation(props.id)}}>
      {props.addRemovePhrase} <br/> Rotation
  </p> )
}

let WhichButton = (props) => {
  const rotationButton = props.rotationButton;
  if (rotationButton) {
    return <AddToRotationButton {...props}/>
  } else {
    return <RemoveFromRotationButton {...props}/>
  }
}

class SneakerCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }

  handleAddToCart = (id) => {
    this.props.addToCart(id);
  }

  // handleAddToCart() {
  //   this.props.addToCart
  // }

  handleAddToRotation = (id) => {
    this.props.addToRotation(id);
  }

  handleRemoveFromRotation = (id) => {
    this.props.removeFromRotation(id);
  }

  
  render() {
    return (
      <div className="column is-3 modal-button" key={this.props.id} data-target="modal-card">
        <div className="card sneakerCard">
          <figure className="image sneakerPhoto is-5by3" onClick={()=>{this.toggleModal()}}>
            <img src={this.props.image} alt={this.props.title} />
          </figure>
          <div className="card-content" style={{height: 111 + 'px'}}>
            <p className="title is-5">{this.props.title}</p>
            <p className="subtitle is-7"><b>Price: ${this.props.price}</b></p>
          </div>
          <footer className="card-footer">
            <WhichButton
              rotationButton={this.props.rotationButton}
              {...this.props}
            />
            <p className="card-footer-item button is-white cart-icon" style={{height: 48 + 'px'}} onClick={()=>{this.handleAddToCart(this.props.id)}}>
              <span>
                <i className="fa fa-shopping-cart"></i>
              </span>
            </p>
          </footer>
        </div>
        <SneakerModal 
          closeModal={this.toggleModal} 
          modalState={this.state.modalState} 
          title={this.props.title}
          image={this.props.image}
        />
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    items: state.sneakers.sneakers
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
