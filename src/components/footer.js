import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hoursModalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openHoursModal = this.openHoursModal.bind(this);
    this.closeHoursModal = this.closeHoursModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openHoursModal() {
    this.setState({hoursModalIsOpen: true})
  }

  closeHoursModal() {
    this.setState({hoursModalIsOpen: false});
  }

  render() {
    return (
      <nav>
        <ul className="footer">
          <li>939 Beards Hill Rd Suite #c Aberdeen MD 21001</li>
            <li className="footer-hours" onClick={this.openHoursModal}>
              <a href="#">Hours</a>
            </li>
            <li>
              <Modal
                  isOpen={this.state.hoursModalIsOpen}
                  onRequestClose={this.closeHoursModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center">Hours</p>
                  <ul className="modal-hours">
                    <li>Monday: 10:30am-9:00pm</li>
                    <li>Tuesday: 10:30am-9:00pm</li>
                    <li>Wednesday: 10:30am-9:00pm</li>
                    <li>Thursday: 10:30am-9:00pm</li>
                    <li>Friday: 10:30am-9:30pm</li>
                    <li>Saturday: 10:30am-9:30pm</li>
                    <li>Sunday: 11:30am-9:30pm</li>
                  </ul>
              </Modal>
            </li>
          <li>mon-thurs: 10:30am-9:00pm</li>
          <li>fri-sat: 10:30am-9:30pm</li>
          <li>sun: 11:30am-9:30pm</li>
            <li className="footer-pin">
              <a href="#" onClick={this.openModal}>&#x1f4cc; map</a>
            </li>
            <li>
              <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center">Johnny's Poki Bowl</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.519150422743!2d-76.18566346718715!3d39.525341079478586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c3d5adaa7e47%3A0x127ee0081eb1a1e7!2s939+Beards+Hill+Rd+c%2C+Aberdeen%2C+MD+21001!5e0!3m2!1sen!2sus!4v1518022003773"
                  width="100%"
                  height="auto"
                  frameBorder="0"
                  allowFullScreen>
                </iframe>
              </Modal>
            </li>
        </ul>
      </nav>
    )
  }
}

export default Footer;
