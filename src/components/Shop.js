import React, { Component } from 'react';
import { connect } from 'react-redux'
import SneakerCard from './SneakerCard';

class Shop extends Component{
  render(){
    return(
      <div className="columns is-centered is-mobile is-multiline">
        <div className="column is-11" style={{marginTop: 5.5 + 'em'}}>
          <div className="container">
            <div className="columns is-multiline" >
            {this.props.items.map(item=>
              <SneakerCard 
                {...item}
                addRemovePhrase="Add To"
                rotationButton= {true}
                />
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