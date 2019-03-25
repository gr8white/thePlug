import React, { Component } from 'react';
import { connect } from 'react-redux'
import SneakerCard from './SneakerCard';
import FilterBar from './FilterBar'

class MyRotation extends Component{
  render(){
    return(
      <div className="page-wrapper content-wrap" style={{marginTop: 5.5 + 'rem'}}>
        <div className="columns is-centered" >
          <div className="column is-11" >
            <div className="columns" >
              <div className="column is-one-quarter">
                <FilterBar/>
              </div>
              <div className="column is-three-quarters">
                <div className="box sneakerCardHolder" display="block">
                  <h1 className="title ">My Rotation</h1>
                  <div className="columns is-multiline">
                  {this.props.items.length ?
                    this.props.items.map( (item) =>
                    <SneakerCard
                      {...item} 
                      addRemovePhrase="Remove From"
                      rotationButton={false}
                      />
                    ) : ( <h2 style={{marginLeft: 12 + 'px', marginBottom: 10 + 'px'}}>Add sneakers to your rotation to view them here.</h2> )}
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
    items: state.sneakers.rotationItems
  }
}

export default connect(mapStateToProps, null)(MyRotation)