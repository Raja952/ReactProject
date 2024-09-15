// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // If you want to style the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
