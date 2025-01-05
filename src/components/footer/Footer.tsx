import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
      <p className="footer-text">What are you waiting for?</p>
      <h2 className="footer-desc">Let's build something briliante</h2>
      <ul className="footer-list">
        <li className="item">About</li>
        <li className="item">Home</li>
        <li className="item">Services</li>
        <li className="item">Instagram</li>
        <li className="item">Youtube</li>
        <li className="item">Netflix</li>
        <li className="item">Contact as</li>
      </ul>
      <span className="footer-title">
       © Digital wolf we do our best to make your business success.
      </span>
      </div>
    </footer>
  );
};

export default Footer;
