import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogCard from './BlogCard'
import SneakerCard from './SneakerCard'
import NewsCard from './NewsCard'
import shuffle from './functions/functions'

class HomeComponent extends Component {

  render(){
    return (
    <div className="box" key={this.props.id}>
      <h1 className="title is-1">{this.props.title}</h1>
      <div className="columns is-multiline">
      {this.props.title == "Shop" ? shuffle(this.props.sneakers).slice(0, 4).map(item=>
        <SneakerCard 
          {...item}
          addRemovePhrase="Add To"
          rotationButton= {true}
        />)
      :this.props.title == "News" ? shuffle(this.props.news).slice(0, 3).map(item=>
        <NewsCard 
          {...item.fields}
        />)
      :this.props.news.slice(0, 4).map(item=>
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
    sneakers: state.sneakers.sneakers,
    news: state.news.posts,
    // releases:state.sneakers.releases.items
  }
}

export default connect(mapStateToProps, null)(HomeComponent)
