import React from 'react';
import './about.css';
import chickenFriedRice from '../../assets/chicken-biryani.jpg';

const About = () => {
  return (
    <section id="aboutus">
    <div className="about-container">
      <div className="container">
        <h1>About Us</h1>
      </div>
        <h2>We Deliver Best &</h2>
       
        <h3>Delicious Food For You</h3>
      <div id="images-div">
        <div className="info-div">
          <p>Enjoy our food experience</p>
          <p>We don't just make food</p>
          <p>We make people's choices.</p>

          <div className="count">
            <h3>100+</h3>
            <p>Delicious foods in</p>
            <p>our menu</p>
          </div>
          <button className="menu-button">View Our Menu</button>
        </div>

        <div>
          <img src={chickenFriedRice} alt="Chicken Biryani" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
