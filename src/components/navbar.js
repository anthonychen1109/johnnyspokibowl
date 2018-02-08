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
          <li><a href="/menu">Menu</a></li>
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
    );
  }
}

export default Navbar;
