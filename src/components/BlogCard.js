import React, { Component } from 'react'
import { connect } from 'react-redux'

const BlogCard = (item) => {
  return (
    <div className="column is-one-fourth" key={item.id}>
      <div className="box">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title is-4">{item.title}</h1>
          <div className="content">
            {item.body}<a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
          </div>
        </div>
      </div>
    </div>
        
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.news.posts
  }
}

export default connect(mapStateToProps, null)(BlogCard)
