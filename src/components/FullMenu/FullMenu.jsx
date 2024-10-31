// src/components/Menu.js
// import React from 'react';
import { MenuData } from '../../assets/assets'; // Ensure the path to the assets is correct
import './fullmenu.css'; // Import the CSS file for styling

const FullMenu = () => {
  return (
    <div className="p-6  min-h-screen menu-container">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Menu
      </h1>

      {MenuData.map((section, index) => (
        
        <div
          key={section._id}
          className={`flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto my-8 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >

          {/* Section Image */}
         
          <img
  src={section.image}
  alt={section.title}
  className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] rounded-lg shadow-md mb-4 md:mb-0 object-cover max-h-64"
/>


          {/* Menu Items */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold text-center md:text-left">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between px-4 py-2  shadow-md rounded-lg"
                >
                  <span className="font-bold text-white">{item.name}</span>
                  <span className="text-white">₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullMenu;