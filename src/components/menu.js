import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from './header';
import Contact from './contact';
import Footer from './footer';
import GalleryModal from './modal';
import PokeBase from './poke_base';
import Proteins from './proteins';
import Toppings from './toppings';
import Sauce from './sauce';

// Images
import Menu1 from '../static/images/menu-1.jpg';
import Menu2 from '../static/images/menu-2.jpg';

const signature = [
  {
    name: "Johnny's Classic (Raw)",
    img: 'johnnys_classic_bowl.jpg'
  },
  {
    name: 'Salmon Lover (Raw)',
    img: 'salmon_lover_bowl.jpg'
  },
  {
    name: 'Hawaiian Classic (Raw)',
    img:'hawaiian_classic.jpg'
  },
  {
    name: 'Spicy Bowl (Raw)',
    img:'spicy_bowl.jpg'
  },
  {
    name: 'Eel Bowl (Cooked)',
    img:'eel_bowl.jpg'
  },
  {
    name: 'Garden Bowl (Cooked)',
    img:'garden_bowl.jpg'
  },
  {
    name: 'Dragon Bowl (Cooked)',
    img:'dragon_bowl.jpg'
  },
  {
    name: 'Spicy House Bowl (Cooked)',
    img:'spicy_house_bowl.jpg'
  }
]

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

//   componentDidMount () {
//     const script = document.createElement("script");
//
//     script.src = "https://www.fbgcdn.com/widget/js/ewm2.js";
//     script.async = true;
//
//     document.body.appendChild(script);
// }

  dropdownMenu() {
      let x = document.getElementById('dropdownClick');
      if (x.className === 'topnav') {
        x.className = 'responsive animated slideInDown';
      } else {
        x.className = 'topnav';
      }
    }

  render () {
    return (
      <div>
        <nav>
          <ul className="topnav" id="dropdownClick">
            <li className="logo"><a href="/">Johnny's Poki Bowl</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a data-glf-cuid="b6cb6133-f364-495b-ad68-298f3197fae3" data-glf-ruid="abdffdf9-c8cb-474b-9e45-24b0911fdbcf" href="#">Order Online</a></li>
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
        <Header />
        <div id="menu" className="menu container">
          <h2>Signature Poke Bowls</h2>
          <div className="signature">
            {signature.map((item, index) => {
              return (
                <div className="signature-items" key={index}>
                  <GalleryModal image={require(`../static/images/dish_image/${item.img}`)}/>
                  <p>{item.name}</p>
                </div>
              )
            })}
          </div>
          <PokeBase />
          <Proteins />
          <Toppings />
          <Sauce />
        </div>
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Menu;
