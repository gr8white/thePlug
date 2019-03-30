import React from 'react'
import * as Markdown from 'react-markdown'
import NewsModal from './NewsModal'

class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }
  
  render(){
    return (
      <div className="column is-one-third modal-button" data-target="modal-card">
        <div className="card is-shady newsCard">
          <div className="card-image">
            <figure className="image is-4by3" onClick={this.toggleModal}>
              <img src={this.props.icon} alt="Placeholder image" className="newsCardImage" style={{objectFit: 'cover'}}/>
            </figure>
          </div>
          <div className="card-content"  style={{height: 256 + 'px'}}>
            <div className="content newsCardContent">
              <h4>{this.props.title}</h4>
              <Markdown source={(this.props.content || '' ).split(" ").splice(1,20).join(" ").concat('...')} />
              <span className="button is-link modal-button" onClick={this.toggleModal}>Read Story</span>
            </div>
          </div>
        </div>
        <NewsModal 
          closeModal={this.toggleModal} 
          modalState={this.state.modalState} 
          title={this.props.title}
          content={this.props.content}
          image={this.props.icon}
        />
      </div>
    )
  }
}

export default NewsCard