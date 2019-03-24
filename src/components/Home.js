import React, { Component } from 'react'
import HomeComponent from './HomeComponent'

export default class Home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <section className="hero is-medium homeHero"> 
          <div className="hero-body"> 
            <div className="container has-text-centered homeBanner"> 
              <h1 className="title" >Welcome to thePlug</h1> 
              <h2 className="subtitle">A single source for the sneaker community covering the latest drops, news, and upcoming releases.</h2>
            </div> 
          </div> 
        </section>
        <div className="columns is-centered">
          <div className="column is-11" >
            <div className="columns topSpace">
              <div className="column">
                <HomeComponent title="Blog" index="1"/>
                <HomeComponent title="Shop" index="2"/>
                <HomeComponent title="Release Dates" index="3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
