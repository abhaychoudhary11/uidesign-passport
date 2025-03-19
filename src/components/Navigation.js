import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="search-btn">🔍</button>
      </div>
      <ul>
      <li><a href="#apply">Home</a></li>
        <li><a href="#apply">What's New</a></li>
        <li><a href="#apply">Apply</a></li>
        <li><a href="#track">Track</a></li>
        <li><a href="#manage">Contact Us</a></li>
        <li><a href="#help">Help</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
