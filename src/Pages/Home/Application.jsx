import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import 'animate.css'; // Import Animate.css

// Import images
import SoilWallsImage from './OIP.jpeg';
import SlopesImage from './OIP.jpeg';
import ImprovementImage from './OIP.jpeg';
import NailingImage from './OIP.jpeg';
import RockfallImage from './OIP.jpeg';
import PavementImage from './OIP.jpeg';
import ErosionImage from './OIP.jpeg';
import LinerImage from './OIP.jpeg';

// Dummy content for tabs
const tabContent = {
  'MSE/ RE/ RS Wall Construction': {
    imgSrc: SoilWallsImage,  // Replace with appropriate image if different
    content: 'Content for MSE/ RE/ RS Wall Construction.',
  },
  'Reinforced Soil Slopes (RSS)': {
    imgSrc: SlopesImage,  // Replace with appropriate image if different
    content: 'Content for Reinforced Soil Slopes (RSS).',
  },
  'Erosion Control': {
    imgSrc: ErosionImage,  // Replace with appropriate image if different
    content: 'Content for Erosion Control.',
  },
  'Concrete Form-liner': {
    imgSrc: LinerImage,  // Replace with appropriate image if different
    content: 'Content for Concrete Form-liner.',
  },
  'Soil Nailing': {
    imgSrc: NailingImage,  // Replace with appropriate image if different
    content: 'Content for Soil Nailing.',
  },
  'Crash Barrier Construction': {
    imgSrc: RockfallImage,  // Replace with appropriate image if different
    content: 'Content for Crash Barrier Construction.',
  },
  'RS Wall Repair & Rehabilitation': {
    imgSrc: ImprovementImage,  // Replace with appropriate image if different
    content: 'Content for RS Wall Repair & Rehabilitation.',
  },
};


function Application() {
  const [activeTab, setActiveTab] = useState('MSE/ RE/ RS Wall Construction');

  return (
    <div className="text-center p-9 ">
      {/* Heading */}
      <div className="mb-8">
        <div className="text-3xl lg:text-5xl font-semibold mb-4">
          <span className="text-orange-500">Application</span>
          {/* <span className="text-black"> Us</span> */}
        </div>
        {/* <p className="text-base lg:text-lg leading-relaxed">
          Earthcon Systems (India) Pvt. Ltd., an ISO: 9001:2015 organization, is committed to providing comprehensive services like design, supply, and construction in the fields of:
        </p> */}
      </div>
      
      {/* Main content section */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Section - Slider for buttons */}
        <div className="lg:w-1/4 bg-orange-600 text-white p-4 lg:p-8 flex flex-col">
          {/* Buttons for Tabs */}
          <div className="overflow-x-auto lg:overflow-visible whitespace-nowrap lg:flex lg:flex-col">
            <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`py-2 px-4 mb-2 rounded-lg border-2 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                    activeTab === tab
                      ? 'bg-white text-black border-black transform scale-105'
                      : 'bg-orange-700 text-white border-orange-700'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-3/4 p-4 lg:p-8 flex flex-col">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1 animate__animated animate__fadeIn">
              <img
                src={tabContent[activeTab].imgSrc}
                alt={activeTab}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 animate__animated animate__fadeIn">
              <h2 className="text-xl lg:text-2xl font-bold mb-4">{activeTab}</h2>
              <p className="text-base lg:text-lg leading-relaxed">
                {tabContent[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
