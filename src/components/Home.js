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
                <HomeComponent title="Shop" index="1"/>
                <HomeComponent title="News" index="2"/>
                <HomeComponent title="Release Dates" index="3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
