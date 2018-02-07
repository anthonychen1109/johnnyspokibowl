import React from 'react';

// Images
import Img1 from '../static/images/2.jpg';

const About = () =>
<div id="about" className="about container">
  <div className="about-image">
    <img src={Img1} alt="img-1"/>
  </div>
  <div className="about-text">
    <h2>About</h2>
    <p>
      Poke is a raw fish salad served as an appetizer in Hawaiian cuisine, and sometimes as a main course.
    </p>
    <br />
    <p>
      Poke can be served raw, marinated or fried, and can be found everywhere from food trucks and cafes to casual and fine dining restaurants.
    </p>
    <br />
    <p>
      Our restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.
    </p>
  </div>
</div>

export default About;
