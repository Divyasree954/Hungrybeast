// import React from 'react'
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
        <button className="explore-btn">Explore Menu</button>
        </section>
        </div>
        <div className="food-images">
          <img className="image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7UYexyoKy3sprQedbjd-SnC12PXNDC30_w&s" />
          <img className="image2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVKqKN0m0QppdWMgYBhIb9tbHbLVHfEVOfw&s"  />
          <img className="image3" src="https://th.bing.com/th/id/R.4bc8aa8ad16b4cc22f736d87e18d54dd?rik=0ezaCa3egimXUQ&riu=http%3a%2f%2fverascooking.com%2fwp-content%2fuploads%2f2014%2f06%2fStrawberry-Sundae-13-of-15.jpg&ehk=%2bRs91se6RlPd8fKl9YyC1EJTRNOTLx9wmXuqKoKhqrU%3d&risl=&pid=ImgRaw&r=0" alt="Food Item 3" />
          <img className="image4" src="https://www.freshtohome.com/blog/wp-content/uploads/2024/08/ChickenStarter2.png"/>
          <img className="image6" src="https://images.getrecipekit.com/20220904015448-veg-20fried-20rice.png?aspect_ratio=16:9&quality=90&" alt="" />
          <img  className="image5"src="https://www.archanaskitchen.com/images/archanaskitchen/0-Contest/recipe-contest-share-the-best-non-veg-recipe-from-your-kitchen.jpg" alt="" />
        </div>
     </div>
     </div>
     </section>
  );
}
export default NavHead