import React from 'react';

// Images
import Logo from '../static/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Header;
