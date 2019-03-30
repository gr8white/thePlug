import React from 'react'
import Tabs from './Tabs'
import LogIn from './LogIn'
import SignUp from './SignUp'

const LogInModal = ({ closeModal, modalState, activeTab, changeTab }) => {
  if(!modalState) {
    return null
  }
  
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div class="modal-content" style={{width: 30 + '%'}}>
        <div className="box">
          <div className="container" style={{width: 100 + '%'}}>
            <Tabs activeTab={activeTab} changeTab={changeTab} />
            {activeTab === 0 ? <LogIn /> : null}
            {activeTab === 1 ? <SignUp /> : null}
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={closeModal} ></button>
    </div>
  )
}

export default LogInModal
