import React, { Component } from 'react'
import Tab from './Tab'
// Shortcut: rcc

export default class Tabs extends Component {
  render() {
    let {activeTab, changeTab} = this.props
    return (
      <div className="tabs is-boxed is-medium is-centered">
        <ul>
          <Tab 
          isActive={activeTab === 0} 
          label='Log In' 
          handleClick={() => changeTab(0)}/>
          <Tab 
          isActive={activeTab === 1}
          label='Sign Up'
          handleClick={() => changeTab(1)}/>
        </ul>
      </div>
    )
  }
}
