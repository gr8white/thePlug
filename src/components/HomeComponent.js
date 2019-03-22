import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogCard from './BlogCard'
import SneakerCard from './SneakerCard'
import shuffle from './functions/functions'

class HomeComponent extends Component {

  render(){
    return (
    <div className="box ">
      <h1 className="title is-1">{this.props.title}</h1>
      <div className="columns is-multiline">
      {this.props.title == "Shop" ? shuffle(this.props.sneakers).slice(0, 4).map(item=>
        <SneakerCard 
          {...item}
          addRemovePhrase="Add To"
          rotationButton= {true}
        />)
      :this.props.title == "Blog" ? this.props.blogs.slice(0, 4).map(item=>
        <BlogCard 
          {...item}
        />)
      :this.props.releases.slice(0, 4).map(item=>
        <BlogCard 
          {...item}
        />)
      } 
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sneakers: state.sneakers.items,
    blogs: state.blogs.items,
    releases:state.releases.items
  }
}

export default connect(mapStateToProps, null)(HomeComponent)

{/* {this.props.items.length ?
              this.props.items.map( (item) =>
              <CartItem
                {...item}
                onPress={() => this.props.handleRemove()} />
              ) : (<p>Please add something to your cart.</p>)}

{/*    */}