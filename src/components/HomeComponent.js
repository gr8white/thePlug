import React from 'react'
import HCItem from './HCItem'

const HomeComponent = (props) => {
  return (
    <div class="box ">
      <h1 class="title is-1">{props.title}</h1>
      <div class="columns is-multiline">
        <HCItem />
        <HCItem />
        <HCItem />
        <HCItem />
      </div>
    </div>
  )
}

export default HomeComponent
