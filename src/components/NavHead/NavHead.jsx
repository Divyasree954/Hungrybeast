import { Link } from 'react-router-dom';
import './Navhead.css';
import { assets } from '../../assets/assets';

const NavHead = () => {
  return (
    <section id="home">
      <div className="home">
        <div className="content">
          <div className="header ml-10">
            <h1 className="h1 ">HUNGRY BEAST</h1>
            <h2 className="h2">FOOD & BEVERAGES</h2> <br /> <br />
            <p className="para">Best Quality Food</p> <br /> <br />
            <p className="para1">A Really Good Place to Eat</p> <br />
            <p className="para1">Enjoy Our Delicious Meal</p> <br /> <br />
            <section id="menu">
              <Link to='/fullmenu'>
                <button className="explore-btn">Explore Menu</button>
              </Link>
            </section>
          </div>
          <div className="homeimgs" >
            <img src={assets.homeimgs}  alt="" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default NavHead;
