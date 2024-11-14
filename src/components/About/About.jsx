import React from 'react';
import './about.css';
import chickenFriedRice from '../../assets/chicken-biryani.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="aboutus">
    <div className="about-container">
      <div className="container">
        <h1>About Us</h1>
      </div>
        <h2 className="h2">We Deliver Best &</h2>
        <h3 className="h3">Delicious Food For You</h3>
      <div id="images-div">
        <div className="info-div">
          <p>Enjoy our food experience <br />We don't just make food We make people's choices.</p>
          <div className="count">
            <h3 className="hundred">100+</h3>
            <p>Delicious foods in
            our menu</p>
          </div>
          <Link to='/fullmenu'>
          <button className="menu">View Our Menu</button>
          </Link>
        </div>
        <div>
          <img className="image" src={chickenFriedRice} alt="Chicken Biryani" />
        </div>
      </div>
    </div>
    </section>
  );
};
export default About;
