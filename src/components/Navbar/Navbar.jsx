import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import './navbar.css'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Effect to handle background color change
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.backgroundColor = '#FFFFFF'; // Set page background to white
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.backgroundColor = ''; // Reset background color
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup function
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 w-full z-50 h-15">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src="./public/hglogo 1.png" alt="Hungry Beast" className="logo ml-0 mt-[-10px]" />
        <ul className="hidden md:flex gap-7">
          <a href="#home" className="text-[#FBC02D] hover:text-gray-400">Home</a>
          <a href="#aboutus" className="text-[#FBC02D] hover:text-gray-400">About Us</a>
          <a href="#menus" className="text-[#FBC02D] hover:text-gray-400">Menu</a>
          <a href="#reviews" className="text-[#FBC02D] hover:text-gray-400">Reviews</a>
          {/* <a href="#Team" className="text-[#FBC02D] hover:text-gray-400">Contact Us</a> */}
        </ul>
        <img
  onClick={() => setShowMobileMenu(true)}
  src={assets.menu_icon}
  className="menu-icon md:hidden w-7 cursor-pointer"
  alt="Menu Icon"
/>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-black z-50 transform ${
          showMobileMenu ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
        <img
  onClick={() => setShowMobileMenu(false)}
  src={assets.cross_icon}
  className="close-icon w-6 cursor-pointer"
  alt="Close Icon"
/>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10 text-[#FBC02D]">
  <a onClick={() => setShowMobileMenu(false)} href="#home" className="text-lg hover:text-gray-400">
    Home
  </a>
  <hr className="w-28 border-t-0.5 border-[#000] mt-[-18px] opacity-50 shadow-sm" />
  <a onClick={() => setShowMobileMenu(false)} href="#aboutus" className="text-lg hover:text-gray-400">
    About Us
  </a>
  <hr className="w-28 border-t-0.5 border-[#000] mt-[-18px] opacity-50 shadow-sm" />
  <a onClick={() => setShowMobileMenu(false)} href="#menus" className="text-lg hover:text-gray-400">
    Menu
  </a>
  <hr className="w-28 border-t-0.5 border-[#000] mt-[-18px] opacity-50 shadow-sm" />

  <a onClick={() => setShowMobileMenu(false)} href="#reviews" className="text-lg hover:text-gray-400">
    Reviews
  </a>
  <hr className="w-28 border-t-0.5 border-[#000] mt-[-18px] opacity-50 shadow-sm" />

  {/* <a onClick={() => setShowMobileMenu(false)} href="#Team" className="text-lg hover:text-gray-400">
    Contact Us
  </a> */}
  {/* <hr className="w-28 border-t-0.5 border-[#000] mt-[-18px] opacity-50 shadow-sm" /> */}
</ul>

      </div>
    </div>
  );
};

export default Navbar;
