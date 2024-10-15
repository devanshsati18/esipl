import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevVisible => (prevScrollPos > currentScrollPos));
    setPrevScrollPos(currentScrollPos);
  };

  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 500); // 1 second delay for closing
    setTimeoutId(id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // Clean up timeout on unmount
    };
  }, [prevScrollPos, timeoutId]);

  return (
    <nav className={`text-black p-4 flex justify-center items-center h-[7vh] fixed top-0 left-0 right-0 transition-transform duration-200 ${visible ? 'transform-none' : '-translate-y-full'} z-50 bg-transparent hover:bg-blue-500 hover:bg-opacity-70 hover:delay-300`}>
      {/* Centered Content */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Home</Link>
        <div className="relative" onMouseEnter={() => handleMouseEnter('whatWeDo')} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">
            What We Do
          </button>
          {openDropdown === 'whatWeDo' && (
            <div className="absolute left-0 bg-white bg-opacity-50 mt-2 rounded shadow-lg z-20 w-48">
              <Link to="/RetainingStructures" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Retaining Structures</Link>
              <Link to="/GeohazardMitigation" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Geohazard Mitigation</Link>
              <Link to="/GeosyntheticPavementApplications" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Geosynthetic Pavement Applications</Link>
              <Link to="/GroundImprovements" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Ground Improvements</Link>
              <Link to="/ReinforcedSoilSlope" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Reinforced Soil Slope</Link>
              <Link to="/ErosionControl" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Erosion Control</Link>
              <Link to="/RepairRehabilitation" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Repair & Rehabilitation</Link>
              <Link to="/FrictionSlabcumCrashBarrier" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Friction Slab cum Crash Barrier</Link>
            </div>
          )}
        </div>
        <Link to="/gallery" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Gallery</Link>
        <Link to="/Projects" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Projects</Link>
        <div className="relative" onMouseEnter={() => handleMouseEnter('knowledgeCenter')} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">
            Resource Center
          </button>
          {openDropdown === 'knowledgeCenter' && (
            <div className="absolute left-0 bg-white bg-opacity-50 mt-2 rounded shadow-lg z-20 w-48">
              <Link to="/Brochure" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Brochure</Link>
              <Link to="/CaseStudy" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Case Studies</Link>
              <Link to="/TechnicalDrawing" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Technical Drawings</Link>
              <Link to="/TechnicalPapers" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Technical Papers</Link>
              <Link to="/ThingsToAvoidBadPractice" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Things To Avoid Bad Practices</Link>
              <Link to="/ImportantCircular" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">Important Circulars</Link>
              <Link to="/IsoCertificate" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300">ISO Certificates(ESIPL & GIS)</Link>
            </div>
          )}
        </div>
        <Link to="/careers" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">Careers</Link>
      </div>

      {/* Drawer Button for Small Screens */}
      <div className="lg:hidden flex items-center ml-auto">
        <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="focus:outline-none">
          <MenuIcon className="h-8 w-8 text-black" />
        </button>
      </div>

      {/* Drawer for Small Screens */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-2/3 bg-blue-500 p-4 z-50" style={{ backgroundColor: 'rgba(0, 0, 255, 0.75)' }}>
          <Link to="/" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Home</Link>
          <Link to="/what-we-do" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>What We Do</Link>
          <Link to="/gallery" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Gallery</Link>
          <Link to="/projects" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Projects</Link>
          <Link to="/knowledge-center" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Knowledge Center</Link>
          <Link to="/careers" className="block p-2 text-black hover:bg-custom-orange" onClick={() => setIsDrawerOpen(false)}>Careers</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
