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
      
      <div>
      <PageHeader color="is-info" title="Code Blog">
  Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
</PageHeader>
      <br/>
      { this.state.posts.map(({fields}, i) =>
        <NewsCard key={i} {...fields} />
        )}
    </div>


      
    )
  }
}

export default News
