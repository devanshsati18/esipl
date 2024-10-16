import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import esipllogo from '../Assets/logo/EARTHCONLOGO.png';

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
    clearTimeout(timeoutId);
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 500);
    setTimeoutId(id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [prevScrollPos, timeoutId]);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <nav className={`text-black p-4 flex items-center h-[7vh] fixed bg-white bg-opacity-60 top-0 left-0 right-0 font-bold text-2xl transition-transform duration-200 ${visible ? 'transform-none' : '-translate-y-full'} z-50`}>
      {/* Logo on the left */}
      <img className='h-16 mr-4' src={esipllogo} alt="Logo" />

      {/* Centered Content */}
      <div className="flex-grow hidden lg:flex justify-center items-center space-x-10">
        <Link to="" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300 font-bold">Home</Link>
        <div className="relative" onMouseEnter={() => handleMouseEnter('whatWeDo')} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-custom-orange p-2 rounded transition-colors duration-300">
            What We Do
          </button>
          {openDropdown === 'whatWeDo' && (
            <div className="absolute left-0 bg-white bg-opacity-50 mt-2 rounded shadow-lg z-20 w-48">
              <Link to="/RetainingStructures" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Retaining Structures</Link>
              <Link to="/GeohazardMitigation" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Geohazard Mitigation</Link>
              <Link to="/GeosyntheticPavementApplications" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Geosynthetic Pavement Applications</Link>
              <Link to="/GroundImprovements" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Ground Improvements</Link>
              <Link to="/ReinforcedSoilSlope" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Reinforced Soil Slope</Link>
              <Link to="/ErosionControl" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Erosion Control</Link>
              <Link to="/RepairRehabilitation" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Repair & Rehabilitation</Link>
              <Link to="/FrictionSlabcumCrashBarrier" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Friction Slab cum Crash Barrier</Link>
            </div>
          )}
        </div>
        <Link to="/gallery" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300 font-bold">Gallery</Link>
        <Link to="/Projects" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300 font-bold">Projects</Link>
        <div className="relative" onMouseEnter={() => handleMouseEnter('knowledgeCenter')} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-custom-orange p-2 rounded transition-colors duration-300 font-bold">
            Resource Center
          </button>
          {openDropdown === 'knowledgeCenter' && (
            <div className="absolute left-0 bg-white bg-opacity-50 mt-2 rounded shadow-lg z-20 w-48">
              <Link to="/Brochure" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Brochure</Link>
              <Link to="/CaseStudy" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Case Studies</Link>
              <Link to="/TechnicalDrawing" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Technical Drawings</Link>
              <Link to="/TechnicalPapers" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Technical Papers</Link>
              <Link to="/ThingsToAvoidBadPractice" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Things To Avoid Bad Practices</Link>
              <Link to="/ImportantCircular" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">Important Circulars</Link>
              <Link to="/IsoCertificate" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base">ISO Certificates(ESIPL & GIS)</Link>
            </div>
          )}
        </div>
        <Link to="/Career" className="hover:bg-custom-orange p-2 rounded transition-colors duration-300 font-bold">Careers</Link>
      </div>

      {/* Drawer Button for Small Screens */}
      <div className="lg:hidden flex items-center ml-auto">
        <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="focus:outline-none">
          <MenuIcon className="h-8 w-8 text-black" />
        </button>
      </div>

      {/* Drawer for Small Screens */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-2/3 bg-white bg-opacity-70 p-4 z-50">
          <button onClick={closeDrawer} className="mb-4">
            <XIcon className="h-8 w-8 text-black" />
          </button>
          <Link to="/" className="block p-2 text-black hover:bg-custom-orange font-bold" onClick={closeDrawer}>Home</Link>
          <div className="relative" onMouseEnter={() => handleMouseEnter('whatWeDo')} onMouseLeave={handleMouseLeave}>
            <button className="block w-full text-left p-2 text-black hover:bg-custom-orange font-bold" onClick={() => handleMouseEnter('whatWeDo')}>What We Do</button>
            {openDropdown === 'whatWeDo' && (
              <div className="bg-white bg-opacity-50 mt-2 rounded shadow-lg z-20 w-full">
                <Link to="/RetainingStructures" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Retaining Structures</Link>
                <Link to="/GeohazardMitigation" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Geohazard Mitigation</Link>
                <Link to="/GeosyntheticPavementApplications" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Geosynthetic Pavement Applications</Link>
                <Link to="/GroundImprovements" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Ground Improvements</Link>
                <Link to="/ReinforcedSoilSlope" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Reinforced Soil Slope</Link>
                <Link to="/ErosionControl" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Erosion Control</Link>
                <Link to="/RepairRehabilitation" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Repair & Rehabilitation</Link>
                <Link to="/FrictionSlabcumCrashBarrier" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Friction Slab cum Crash Barrier</Link>
              </div>
            )}
          </div>
          <Link to="/gallery" className="block p-2 text-black hover:bg-custom-orange font-bold" onClick={closeDrawer}>Gallery</Link>
          <Link to="/Projects" className="block p-2 text-black hover:bg-custom-orange font-bold" onClick={closeDrawer}>Projects</Link>
          <div className="relative" onMouseEnter={() => handleMouseEnter('knowledgeCenter')} onMouseLeave={handleMouseLeave}>
            <button className="block w-full text-left p-2 text-black hover:bg-custom-orange font-bold" onClick={() => handleMouseEnter('knowledgeCenter')}>Resource Centre</button>
            {openDropdown === 'knowledgeCenter' && (
              <div className="bg-white bg-opacity-50 mt-2 rounded shadow-lg z-20 w-full">
                <Link to="/Brochure" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Brochure</Link>
                <Link to="/CaseStudy" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Case Studies</Link>
                <Link to="/TechnicalDrawing" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Technical Drawings</Link>
                <Link to="/TechnicalPapers" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Technical Papers</Link>
                <Link to="/ThingsToAvoidBadPractice" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Things To Avoid Bad Practices</Link>
                <Link to="/ImportantCircular" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>Important Circulars</Link>
                <Link to="/IsoCertificate" className="block p-2 text-black hover:bg-custom-orange transition-colors duration-300 text-base" onClick={closeDrawer}>ISO Certificates(ESIPL & GIS)</Link>
              </div>
            )}
          </div>
          <Link to="/Career" className="block p-2 text-black hover:bg-custom-orange font-bold" onClick={closeDrawer}>Careers</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
