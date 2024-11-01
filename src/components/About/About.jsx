import React from 'react';






import './about.css';

import chickenFriedRice from '../../assets/chicken-biryani.jpg';

const About = () => {
  return (
    

    <div className="about-container" >
      
      <center>
        <h1>We Deliver Best & 
          <br></br>Delicious Food For You</h1>
      </center>
      
      <div id="images-div">
        <div >
          <p>Enjoy our food experience</p>
          <p>We don't just make food,</p>
          <p>We make people's choices.</p>
          <h2>100+</h2>
          <p>Delicious foods in</p>
          <p>our menu</p>
        </div>
        
       
        <div>
          <img src={chickenFriedRice} alt="Chicken biryani.jpg" />
        </div>
      </div> 
      <div className="button-container">
  <button className="menu-button">View Our Menu</button>
</div>

    </div>
  );
};

export default About;