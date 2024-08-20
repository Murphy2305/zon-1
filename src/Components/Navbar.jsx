import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../Styles/Navbar.css';
import photo from '../assets/phone.png';
import logo from '../assets/LOGO.jpg';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const handleToggle = () => {
    setShowNavList(!showNavList);
  };

  return (
    <>
    <div className="navbar tocenter">
      <div className="nav-first tocenter">
        <Link to='/'>        <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <p className="navbar-challenge">
          <img src={photo} alt="Phone" className="navbar-phone" />
          5 Day Challenge
        </p>
      </div>

      <div className={`nav-list tocenter ${showNavList ? 'show' : ''}`}>
        <Link to="/pricing" className="nav-item">Pricing</Link>
        <Link to="/testimonials" className="nav-item">Testimonials</Link>
        <Link to="/academy" className="nav-item">Zonbase Academy</Link>
        
      </div>
      <button className="navbar-free">
          Get Started for free
        </button>

      <div className="nav-right tocenter">
        
        <div className="toggle-button" onClick={handleToggle}>
          {showNavList ? '✖' : '☰'} {/* Unicode for X and hamburger icon */}
        </div>
      </div>

    </div>
    <hr />
    </>
  );
}

export default Navbar;
