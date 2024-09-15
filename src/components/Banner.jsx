// src/components/Banner.jsx
import React from 'react';
import './Banner.css'; // If you want to style the banner

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
