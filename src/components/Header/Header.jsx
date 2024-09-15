// src/components/Header.js

import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <a href="#">
          <img
            src=""
            alt="Logo"
          />
        </a>
      </div>

      {/* Search Bar */}
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <button className="header-search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="header-nav">
        <a href="#" className="header-link">
          <div>
            <span>Hello, Sign in</span>
            <strong>Account & Lists</strong>
          </div>
        </a>
        <a href="#" className="header-link">
          <div>
            <span>Returns</span>
            <strong>& Orders</strong>
          </div>
        </a>
        <a href="#" className="header-link header-cart">
          <i className="fa fa-shopping-cart"></i>
          <strong>Cart</strong>
        </a>
      </nav>
    </header>
  );
};

export default Header;

