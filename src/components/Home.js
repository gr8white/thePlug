import React, { Component } from 'react'
import HomeComponent from './HomeComponent'


export default class Home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <section class="hero is-medium has-bg-img"> 
          <div class="hero-body"> 
            <div class="container has-text-centered homeBanner"> 
              <h1 class="title" >The 5 Best Sneaker Apps to Stay on Top of Every Drop in 2019</h1>
            </div> 
          </div> 
        </section>
          <div class="columns is-centered">
            <div class="column is-11" >
              <div class="columns topSpace">
                <div class="column">
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
