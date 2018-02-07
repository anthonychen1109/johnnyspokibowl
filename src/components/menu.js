import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from './header';
import Contact from './contact';
import Footer from './footer';
import GalleryModal from './modal';
import PokeBase from './poke_base';
import Proteins from './proteins';

// Images
import Menu1 from '../static/images/menu-1.jpg';
import Menu2 from '../static/images/menu-2.jpg';

const images = [
  'dragon_bowl.jpg',
  'eel_bowl.jpg',
  'garden_bowl.jpg',
  'hawaiian_classic.jpg',
  'johnnys_classic_bowl.jpg',
  'salmon_lover_bowl.jpg',
  'spicy_bowl.jpg',
  'spicy_house_bowl.jpg'
]

const Menu = () => {
  return (
    <div>
      <Header />
      <nav>
        <ul className="topnav" id="dropdownClick">
          <li className="logo"><Link to="/">Johnny's Poki Bowl</Link></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#contact">Contact</a></li>
          <li id="test" className="dropdownIcon">
            <a href="javascript:void(0);"
              onClick={this.dropdownMenu}
              >
              &#9776;
            </a>
          </li>
        </ul>
      </nav>

      <div id="menu" className="menu container">
        <h2>Our Menu</h2>
        <img src={Menu1} alt="menu1"/>
        <img src={Menu2} alt="menu2"/>
        <hr />
        <h2>Signature Poke Bowls</h2>
        <div className="signature">
          {images.map((item, index) => {
            return (
              <GalleryModal key={index} image={require(`../static/images/dish_image/${item}`)}/>
            )
          })}
        </div>
        <PokeBase />
        <Proteins />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Menu;
