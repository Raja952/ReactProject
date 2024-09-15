// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginModel } from '../Pages/Login';
import './Navbar.css';


const Navbar = ({ login, setLogin }) => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul>
                <li>
                    <LoginModel Parameter={<Link>Login</Link>} setLogin={setLogin} login={login }>
                       
                    </LoginModel>
                </li>
                <li><Link to="/about">Signup</Link></li>

            </ul>
        </nav>
    );
};

export default Navbar;
