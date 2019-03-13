import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

class MyRotation extends Component{

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  render(){
    // let itemList = this.props.items.map( (item) =>{
    //   return(
    //     <div className="column is-3" key={item.id}>
    //       <div className="box">
    //         <figure className="image sneakerPhoto">
    //             <img src={item.img} alt={item.title}/>
    //           </figure>
    //         <div className="card-content">
              
    //           <p className="title is-4">{item.title}</p>
    //           <p className="subtitle is-6"><b>Price: ${item.price}</b></p>
    //           <p className="subtitle is-8">{item.desc}</p>
    //         </div>
    //         <footer className="card-footer">
    //           <p className="card-footer-item has-text-centered">
    //             Add to Rotation
    //           </p>
    //           <p className="card-footer-item button is-white" style={{height: 48 + 'px'}} onClick={()=>{this.handleClick(item.id)}}>
    //             <span>
    //               <i className="fa fa-shopping-cart"></i>
    //             </span>
    //           </p>
    //         </footer>
    //       </div>
    //     </div>
    //   )
    // })
    return(
      // // <div className="page-wrapper">
      //   <div className="columns is-centered">
      //     <div className="column is-11" style={{marginTop: 1.5 + 'em'}}>
      //         <div className="container">
      //           {/* <h1 className="title is-1">Our items</h1> */}
      //           <div className="columns is-multiline" >
      //             {itemList}
      //           </div>
      //         </div>
      //   </div>
      // </div>
      <p>hi there</p>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.sneakers.items
  }
}
const mapDispatchToProps = (dispatch)=>({
  addToCart: (id) => { dispatch(addToCart(id)); }
})
export default connect(mapStateToProps, mapDispatchToProps)(MyRotation)