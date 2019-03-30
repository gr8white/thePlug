import React from 'react'

const SneakerModal = ({closeModal, modalState, image, title}) => {
  if(!modalState) {
    return null;
  }
  
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}/>
      <div className="modal-content">
        <p className="image">
          <img src={image} alt={title}/>
        </p>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>
  )
}

export default SneakerModal
