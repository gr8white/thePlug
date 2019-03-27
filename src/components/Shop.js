import React, { Component } from 'react';
import { connect } from 'react-redux'
import SneakerCard from './SneakerCard';
import FilterBar from './FilterBar'

class Shop extends Component{
  render(){
    return(
      <div className="page-wrapper" style={{marginTop: 5.5 + 'rem'}}>
        <div className="columns is-centered" >
          <div className="column is-11" >
            <div className="columns" >
              <div className="column is-one-quarter">
                <FilterBar/>
              </div>
              <div className="column is-three-quarters">
                <div className="box " display="block">
                  <h1 className="title is-1">Shop</h1>
                  <div className="columns is-multiline">
                  {this.props.items.map(({fields}, i)=>
                    <SneakerCard 
                      key={i}
                      {...fields}
                      addRemovePhrase="Add To"
                      rotationButton= {true}
                    />
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.sneakers.sneakers
  }
}

export default connect(mapStateToProps, null)(Shop)