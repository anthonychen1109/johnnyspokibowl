import React, { Component } from 'react';
import Modal from 'react-modal';

//MODAL STYLES
const customStyles = {
  overlay : {
   zIndex            : 9999,
   position          : 'fixed',
   top               : 0,
   left              : 0,
   right             : 0,
   bottom            : 0,
   backgroundColor   : 'rgba(255, 255, 255, 0.75)'
 },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class GalleryModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className="gal-modal">
      <img
        src={this.props.image}
        alt={this.props.image}
        onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          >
            <img className="modal-img"
              src={this.props.image}
              alt={this.props.image}
              style={customStyles}
            />
        </Modal>
      </div>
    )
  }
}

export default GalleryModal;
