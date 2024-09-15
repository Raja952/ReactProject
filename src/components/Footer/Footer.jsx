//// src/components/Footer.jsx
//import React from 'react';
//import './Footer.css'; // If you want to style the footer

//const Footer = () => {
//  return (
//    <footer className="footer">
//          <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
//          <h1 style={{color:"red"} }>Footer</h1>
//    </footer>
//  );
//};

//export default Footer;

// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Back to Top Button */}
            <div className="footer-back-to-top">
                <a href="#top">Back to top</a>
            </div>

            {/* Footer Links */}
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Amazon Devices</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li><a href="#">Sell on Amazon</a></li>
                        <li><a href="#">Amazon Associates</a></li>
                        <li><a href="#">Sell Your Apps</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Amazon Payment Products</h4>
                    <ul>
                        <li><a href="#">Amazon Rewards Visa</a></li>
                        <li><a href="#">Amazon Store Card</a></li>
                        <li><a href="#">Amazon Corporate Credit Line</a></li>
                        <li><a href="#">Shop with Points</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li><a href="#">Amazon and COVID-19</a></li>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Your Orders</a></li>
                        <li><a href="#">Shipping Rates & Policies</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

