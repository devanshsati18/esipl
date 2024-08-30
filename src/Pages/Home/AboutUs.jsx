// AboutUs.jsx

import React, { useState } from 'react';
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
  'Reinforced Soil Walls': {
    imgSrc: SoilWallsImage,
    content: 'Content for Reinforced Soil Walls.',
  },
  'Reinforced Soil Slopes': {
    imgSrc: SlopesImage,
    content: 'Content for Reinforced Soil Slopes.',
  },
  'Ground Improvement': {
    imgSrc: ImprovementImage,
    content: 'Content for Ground Improvement.',
  },
  'Slope Stabilization/Soil Nailing': {
    imgSrc: NailingImage,
    content: 'Content for Slope Stabilization/Soil Nailing.',
  },
  'Rockfall Protection': {
    imgSrc: RockfallImage,
    content: 'Content for Rockfall Protection.',
  },
  'Geosynthetic Pavement Applications': {
    imgSrc: PavementImage,
    content: 'Content for Geosynthetic Pavement Applications.',
  },
  'Erosion Control for High Embankments': {
    imgSrc: ErosionImage,
    content: 'Content for Erosion Control for High Embankments.',
  },
  'PU Form Liner': {
    imgSrc: LinerImage,
    content: 'Content for PU Form Liner.',
  },
};

function AboutUs() {
  const [activeTab, setActiveTab] = useState('Reinforced Soil Walls');

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="lg:w-2/5 bg-orange-600 text-white p-8 flex flex-col"> {/* Expanded width */}
        {/* About Us Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Earthcon Systems (India) Pvt. Ltd., an ISO: 9001:2015 organization is committed to providing comprehensive services like design, supply, and construction.
            Address: D-40, Pocket D, Okhla Phase I, Okhla Industrial Area New Delhi, Delhi 110020
            Email: info@esipl.net
            Phone No.: 9899222244, 9899222245
          </p>
        </div>

        {/* Buttons for Tabs */}
        <div className="flex flex-wrap lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 mb-2 rounded-lg border-2 transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-white text-black border-black transform scale-105'
                  : 'bg-darkOrange text-white border-darkOrange'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-3/5 p-8 flex flex-col">
        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex-1 animate__animated animate__fadeIn">
            <img
              src={tabContent[activeTab].imgSrc}
              alt={activeTab}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 animate__animated animate__fadeIn">
            <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
            <p>{tabContent[activeTab].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
