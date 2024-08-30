import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'; // Import Heroicons for the drawer icon
import LeftImage from '../Assets/logo/esipl_logo_new_1.png'; // Import the images correctly
import RightImage from '../Assets/logo/esipl_logo_new_2.png'; // Import the images correctly

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="bg-custom-blue text-white p-4 flex justify-between items-center h-[7vh] relative z-50">
      {/* Left Image with White Background */}
      <img src={LeftImage} alt="Left" className="w-56 h-12 bg-white p-1 rounded" />

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/" className="hover:bg-custom-orange p-2 rounded">Home</Link>
        <Link to="/gallery" className="hover:bg-custom-orange p-2 rounded">Gallery</Link>
        <div 
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="hover:bg-custom-orange p-2 rounded">
            Application
          </button>
          {isOpen && (
            <div className="absolute left-0 bg-white mt-2 rounded shadow-lg z-20 w-48">
              <Link to="/app1" className="block p-2 text-black hover:bg-custom-orange">App 1</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange">App 2</Link>
            </div>
          )}
        </div>
      </div>

      {/* Drawer Button for Small Screens */}
      <div className="lg:hidden flex items-center ml-auto">
        <button 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="focus:outline-none"
        >
          <MenuIcon className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Drawer for Small Screens */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-2/3 bg-custom-blue p-4 z-50">
          <Link to="/" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Home</Link>
          <Link to="/gallery" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Gallery</Link>
          <div>
            <button 
              className="hover:bg-custom-orange p-2 rounded w-full text-left" 
              onClick={() => setIsOpen(!isOpen)}
            >
              Application
            </button>
            {isOpen && (
              <div className="bg-white rounded mt-2">
                <Link to="/app1" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>App 1</Link>
                <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>App 2</Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Right Image with White Background */}
      <img src={RightImage} alt="Right" className="w-56 h-12 bg-white p-1 rounded" />
    </nav>
  );
}

export default Navbar;
