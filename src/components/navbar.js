import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dropdownMenu = this.dropdownMenu.bind(this);
  }

  dropdownMenu() {
    let x = document.getElementById('dropdownClick');
    if (x.className === 'topnav') {
      x.className = 'responsive';
    } else {
      x.className = 'topnav';
    }
  }

  render() {
    return (
      <nav>
        <ul className="topnav" id="dropdownClick">
          <li className="logo"><a href="">Johnny's Poki Bowl</a></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/menu">Menu</Link></li>
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
    );
  }
}

export default Navbar;
