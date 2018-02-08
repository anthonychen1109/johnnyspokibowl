import React from 'react';

// Images
import Logo from '../static/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo"/>
        <span class="glf-button" data-glf-cuid="b6cb6133-f364-495b-ad68-298f3197fae3" data-glf-ruid="abdffdf9-c8cb-474b-9e45-24b0911fdbcf" > See MENU & Order</span>
      </div>
    </div>
  )
}

export default Header;
