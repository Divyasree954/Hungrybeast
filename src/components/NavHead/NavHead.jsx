// import React from 'react'
import { Link } from 'react-router-dom';
import './Navhead.css'

function NavHead()
{
  return (
    <section id="home">
    <div className="home">
      <nav className="navbar">
      <img src="./public/hglogo 1.png" alt="Hungry Beast" className="logo" />
      <ul className="nav-links">
       <li><a href="#home">Home</a></li>
       <li><a href="#aboutus">About Us</a></li>
       <li><a href="#menu">Menu</a></li>
       <li><a href="#reviews">Reviews</a></li>
       <li><a href="#team">Team</a></li>
      </ul>
      </nav>
      <div className="content">
        <div className="header">
        <h1 className="h1">HUNGRY BEAST</h1>
        <h2 className="h2">FOOD & BEVERAGES</h2> <br /> <br /> 
        <p className="para">Best Quality Food</p> <br /> <br />
        <p className="para1" >A Really Good Place to Eat</p> <br />
        <p className="para1">Enjoy Our Delicious Meal</p> <br /> <br /> 
        <section id="menu">
          <Link to='/fullmenu'>
          
        <button className="explore-btn">Explore Menu</button>
          </Link>
        </section>
        </div>
        <div className="food-images">
          <img src="src/assets/Screenshot__237__-_Copy-removebg-preview.png" alt="" />
        </div>
     </div>
     </div>
     </section>
  );
}
export default NavHead