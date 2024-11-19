import { useParams } from 'react-router-dom';
import { MenuData } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './filterdata.css'
const FullMenu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleBackClick = () => {
        window.history.back(); // Go back to the previous scroll position
      };
  const { categoryName } = useParams();
  const selectedCategory = MenuData.find((category) => category.title === categoryName);
  if (!selectedCategory) {
    return <h2>Category not found</h2>;
  }

  return (
    <div className='filter'>
    <div className="filter-menu">
      <h2>{selectedCategory.title}</h2>
      <div className='rc'>
          <img src={selectedCategory.image} className='filter-img' alt="" />
      <div className="filter-lists">
        {selectedCategory.items.map((item, index) => (
          <div key={index}  className="item-card">
            <p >{item.name}</p>
            <p>-₹{item.price}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    {/* <Link to='/'> */}
          <div className='text-center p-7 text-black'>
            <button onClick={handleBackClick} className='filter-btn 
    bg-orange-450 text-black font-semibold py-2 px-4 rounded-lg 
    shadow-md transition-transform duration-300 transform hover:scale-105 
    hover:bg-orange-450 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-40 
    focus:ring-opacity-50'>
              Back
            </button>
          </div>
        {/* </Link> */}
    </div>
  );
};

export default FullMenu;
