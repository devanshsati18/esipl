import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'; // Import Heroicons for the drawer icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevVisible) => {
      if (prevScrollPos > currentScrollPos) {
        return true;
      } else {
        return false;
      }
    });
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`text-white p-4 flex justify-center items-center h-[7vh] fixed top-0 left-0 right-0 transition-transform duration-300 ${visible ? 'transform-none' : '-translate-y-full'} z-50 bg-transparent hover:bg-blue-500 hover:bg-opacity-70 hover:delay-300`}
    >
      {/* Centered Content */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Desktop Menu */}
        <Link to="/esipl" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Home</Link>
        <Link to="/gallery" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">What We Do</Link>
        <Link to="/gallery" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Gallery</Link>
        <Link to="/gallery" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Projects</Link>
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">
            Knowledge Center
          </button>
          {isOpen && (
            <div className="absolute left-0 bg-white mt-2 rounded shadow-lg z-20 w-48">
              <Link to="/app1" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Company Profile</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Core Studies</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Technical Drawings</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Technical Papers</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Installation Guides</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Technical Presentation</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Things To Avoid Bad Practices</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Important Circulars</Link>
              <Link to="/app2" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">ISO Certificates(ESIPL & Globe)</Link>
            </div>
          )}
        </div>
        <Link to="/gallery" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Careers</Link>
        
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
        <div className="lg:hidden fixed top-0 right-0 w-2/3 bg-blue-500 p-4 z-50" style={{ backgroundColor: 'rgba(0, 0, 255, 0.75)' }}>
          <Link to="/" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Home</Link>
          <Link to="/gallery" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>What We Do</Link>
          <Link to="/gallery" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Gallery</Link>
          <Link to="/gallery" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Projects</Link>
          <Link to="/gallery" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Knowledge Center</Link>
          <Link to="/gallery" className="block p-2 hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Careers</Link>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
