import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="https://example.com" style={{ color: "white" }}>&copy; 2025 Passport Seva. All rights reserved.</a>
      </p>
      <ul>
        <li><a href="https://example.com/privacy-policy">Privacy Policy</a></li>
        <li><a href="https://example.com/terms-of-service">Terms of Service</a></li>
        <li><a href="https://example.com/contact-us">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default Footer;