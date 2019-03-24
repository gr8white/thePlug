import React, { Component } from 'react'
import HomeComponent from './HomeComponent'
import SneakerCard from './SneakerCard'
import { Link } from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <section className="hero is-medium homeHero"> 
          <div className="hero-body"> 
            <div className="container has-text-centered homeBanner"> 
              <h1 className="title" >Welcome to thePlug</h1> 
              <h2 className="subtitle">A single source for the sneaker community covering the latest drops, news, and upcoming releases.</h2>
              {/* <Link to='/news'>
                <div class="button is-primary">
                  Read News
                </div>
              </Link> */}
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
