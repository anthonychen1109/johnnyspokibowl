import React from 'react';
import Iframe from 'react-iframe';

const Contact = () =>
  <div>
    <div id="contact" className="contact">
      <div className="contact-location container">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.519150422743!2d-76.18566346718715!3d39.525341079478586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c3d5adaa7e47%3A0x127ee0081eb1a1e7!2s939+Beards+Hill+Rd+c%2C+Aberdeen%2C+MD+21001!5e0!3m2!1sen!2sus!4v1518022003773"
        height="450px"
        width="100%"
        position="relative"
        allowFullScreen/>
      </div>
      <div className="contact-info container">
        <div className="contact-box">
          <h2 className="contact-header">Contact</h2>
          <br />
          <p>
            <strong>
              939 Beards Hill Rd Suite #C
            <br />
              Aberdeen MD 21001
            </strong>
          </p>
          <br />
          <p><strong>HOURS</strong></p>
          <p className="hours">
            Monday 10:30 AM to 9:00 PM
            <br />
            Tuesday 10:30 AM to 9:00 PM
            <br />
            Wednesday 10:30 AM to 9:00 PM
            <br />
            Thursday 10:30 AM to 9:00 PM
            <br />
            Friday 10:30 AM to 9:30 PM
            <br />
            Saturday 10:30 AM to 9:30 PM
            <br />
            Sunday 11:30 AM to 9:30 PM
          </p>
        </div>
      </div>
    </div>
  </div>

export default Contact;
