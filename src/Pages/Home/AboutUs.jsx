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
  const tabs = Object.keys(tabContent);

  return (
    <div className="text-center p-9">
      {/* Heading */}
      <div className="mb-8">
        <div className="text-3xl lg:text-5xl font-semibold mb-4">
          <span className="text-orange-500">Who We</span>
          <span className="text-black"> Are</span>
        </div>
        <p className="text-base lg:text-lg leading-relaxed">
          Earthcon Systems (India) Pvt. Ltd., an ISO: 9001:2015 organization, is committed to providing comprehensive services like design, supply, and construction in the fields of:
        </p>
      </div>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section - Tabs and Content */}
        <div className="lg:w-1/3 w-full bg-orange-600 text-white p-4 lg:p-8 flex flex-col">
          
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">{activeTab}</h2>
            <p className="text-base lg:text-lg leading-relaxed">
              {tabContent[activeTab].content}
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-2/3 w-full">
          <img
            src={tabContent[activeTab].imgSrc}
            alt={activeTab}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
