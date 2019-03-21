import React from 'react'

const HCItem = () => {
  return (
    <div class="column is-one-fourth">
      <div class="box">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div class="card-content">
          <h1 class="title is-4">Component</h1>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
          </div>
        </div>
      </div>
    </div>
        
  )
}

export default HCItem
