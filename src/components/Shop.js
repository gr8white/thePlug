import React, { Component } from 'react';
import { connect } from 'react-redux'
import SneakerCard from './SneakerCard';

class Shop extends Component{
  render(){
    return(
      <div className="columns is-centered">
        <div className="column is-11" style={{marginTop: 1.5 + 'em'}}>
          <div className="container">
            <div className="columns is-multiline" >
            {this.props.items.map(item=>
              <SneakerCard {...item}/>
            )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.sneakers.items
  }
}

export default connect(mapStateToProps, null)(Shop)