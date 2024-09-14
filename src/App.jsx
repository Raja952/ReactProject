// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About/Index';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Default from './Pages/Default/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Pages/Account/Login';


function App() {
   
    return (
        <Router>        

            <>                
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><Link to="/" style={{ color: "white"}}>Home</Link></Nav.Link>
                            <Nav.Link href="#features"><Link to="/about" style={{ color: "white" }}>About</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/contact" style={{ color: "white" }}>Contact</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/login" style={{ color: "white" }}>Login</Link></Nav.Link>
                            
                        </Nav>
                    </Container>
                </Navbar>
                <br />      
            </>


            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>Shyam List</li>*/}
            {/*        <li>                */}
            {/*            <Link to="/">Home</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/about">About</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/contact">Contact</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/default">Default</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/default" element={<Default />} />
                <Route path="/login" element={<Login />} />
               
            </Routes>
        </Router>
    );
};

export default App;
