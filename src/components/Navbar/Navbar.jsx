// import React from 'react'
import { useState } from 'react';
import './navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <img src="./public/hglogo 1.png" alt="Hungry Beast" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className='navbar-link'>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {/* <div className='linksNav'> */}
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#menus">Menu</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#team">Team</a></li>
            {/* </div> */}
          </ul>
        </div>
      </nav>
     </div>
  )
}

export default Navbar