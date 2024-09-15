// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner title="Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Banner title="About Us" />
              <About />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Banner title="Our Services" />
              <Services />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Banner title="Contact Us" />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
