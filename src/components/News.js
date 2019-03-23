import React, { Component } from 'react'
import * as contentful from 'contentful'
import NewsCard from './NewsCard';
import PageHeader from './PageHeader'

export class News extends Component {

  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'ptcc2nvzky4i',
    accessToken: '7564cf9303763e85ef9d681f43a329a118f5cb9458ba9448da1da1d87805f6a8'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () =>  this.client.getEntries()

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (

    <div className="page-wrapper">
      <PageHeader />
      <div className="columns is-centered">
        <div className="column is-11" >
          <div className="columns topSpace">
            <div className="column">
              <div className="box sneakerCardHolder" >
                <h1 className="title is-1">News</h1>
                <div className="columns is-1 is-multiline">
                  { this.state.posts.map(({fields}, i) =><NewsCard key={i} {...fields} />)}
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

export default News
