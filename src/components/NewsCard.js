import React from 'react'
import * as Markdown from 'react-markdown'

const NewsCard = (props) => {
  return (
  <div className="column is-one-third modal-button" data-target="modal-card">
    <div className="card is-shady newsCard">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.icon} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h4>{props.title}</h4>
          <Markdown source={props.content.split(" ").splice(0,20).join(" ").concat('...')} />
          <span className="button is-link modal-button">Modal card</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsCard

