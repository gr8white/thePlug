import React, { Component } from 'react'
import { connect } from 'react-redux'

const BlogCard = (item) => {
  return (
    <div class="column is-one-fourth" key={item.id}>
      <div class="box">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div class="card-content">
          <h1 class="title is-4">{item.title}</h1>
          <div class="content">
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
    items: state.blogs.items
  }
}

export default connect(mapStateToProps, null)(BlogCard)
