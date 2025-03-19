import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://www.passportindia.gov.in/AppOnlineProject/images/passportSeva.gif" alt="" />
      </div>
      <div className="header-text">
        <h1>Passport Seva</h1>
        <p>Your Gateway to the World</p>
      </div>
    </header>
  );
};

export default Header;