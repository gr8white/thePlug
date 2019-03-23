import React, { Component } from 'react'
import HomeComponent from './HomeComponent'
import SneakerCard from './SneakerCard'


export default class Home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <section className="hero is-medium has-bg-img"> 
          <div className="hero-body"> 
            <div className="container has-text-centered homeBanner"> 
              <h1 className="title" >The 5 Best Sneaker Apps to Stay on Top of Every Drop in 2019</h1>
            </div> 
          </div> 
        </section>
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
