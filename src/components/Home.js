import React, { Component } from 'react'
import HomeComponent from './HomeComponent'
import Header from './Header'


export default class Home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="columns is-centered">
          <div className="column is-11" >
            <div className="columns topSpace">
              <div className="column">
                <HomeComponent title="Blog"/>
                <HomeComponent title="Shop"/>
                <HomeComponent title="Release Dates"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
