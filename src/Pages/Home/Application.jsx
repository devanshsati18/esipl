import React, { useState } from 'react';
import 'animate.css'; // Import Animate.css

// Import images
import image8 from '../../Assets/What we do Photos/Repair & Rehabilitation/image1.jpg'
import image7 from '../../Assets/What we do Photos/Erosion Control/image1.png'
import imaeg6 from '../../Assets/What we do Photos/Reinforced Soil Slope/image1.png'
import image5 from '../../Assets/What we do Photos/Ground Improvement/Basal Reinforcement/image1.png'
import image4 from '../../Assets/What we do Photos/Geosynthetic Pavement Applications/Fig3-Alternate-Figure-3.jpg'
import image3 from '../../Assets/What we do Photos/Geohazard mitigation/Heading/image1.jpg'
import image2 from '../../Assets/What we do Photos/Retaining Structures/Back to Back wall/image1.png'
import image1 from '../../Assets/What we do Photos/Friction Slab cum Crash Barrier/image1.jpg';

// Dummy content for tabs
const tabContent = {
  'Retaining Structures': {
    imgSrc: image2,  // Replace with appropriate image if different
    content: "Retaining structures are essential components in civil engineering, used to hold back soil or rock and prevent erosion or collapse. They are commonly employed in situations where there's a significant difference in ground elevation.",
  },
  'Geohazard Mitigation': {
    imgSrc: image3,  // Replace with appropriate image if different
    content: "Geohazard mitigation involves strategies and techniques to reduce or manage the risks associated with geological hazards such as landslides, earthquakes, floods, and volcanic eruptions. Effective mitigation aims to protect lives, property, and infrastructure while minimizing the economic and environmental impacts of these hazards.",
  },
  'Geosynthetic Pavement Applications': {
    imgSrc: image4,  // Replace with appropriate image if different
    content: "Geosynthetics are versatile materials used in civil engineering to improve the performance and longevity of pavements. They include various types of synthetic materials, such as geotextiles, geomembranes, geogrids, and geocells. In pavement applications, geosynthetics can offer several benefits, including enhanced strength, durability, and drainage.",
  },
  'Ground Improvements': {
    imgSrc: image5,  // Replace with appropriate image if different
    content: "Ground improvement techniques are essential in civil engineering to enhance the properties of soil and rock, making them more suitable for supporting structures. These techniques are employed to address issues such as weak or compressible soils, high water content, or potential for settlement.",
  },
  'Reinforced Soil Slope': {
    imgSrc: imaeg6,  // Replace with appropriate image if different
    content: "A reinforced soil slope is a geotechnical engineering solution designed to stabilize and improve the performance of slopes made of soil. This technique combines soil with reinforcing materials to enhance its strength, reduce potential for failure, and improve overall stability.",
  },
  'Erosion Control': {
    imgSrc: image7,  // Replace with appropriate image if different
    content: "Erosion control is a critical aspect of environmental management and civil engineering, aimed at preventing soil loss, maintaining land stability, and protecting water quality. Erosion can be caused by factors such as wind, water, and human activities, and can lead to significant environmental and structural issues.",
  },
  'Repair & Rehabilitation': {
    imgSrc: image8,  // Replace with appropriate image if different
    content: "Repair and rehabilitation are essential aspects of maintaining and extending the life of infrastructure and structures. They involve addressing issues caused by wear and tear, damage, or deterioration to restore functionality, safety, and aesthetics.",
  },
  'Friction Slab Crash Barrier Construction': {
    imgSrc: image1,  // Replace with appropriate image if different
    content: "A friction slab crash barrier is a type of safety barrier designed to protect vehicles from colliding with roadside obstacles, such as bridges or retaining walls, and to prevent them from veering off the road. These barriers are particularly useful in areas where conventional barriers might not be suitable due to space constraints or aesthetic considerations",
  },
};


function Application() {
  const [activeTab, setActiveTab] = useState('Retaining Structures');

  return (
    <div className="text-center p-9 ">
      {/* Heading */}
      <div className="mb-8">
        <div className="text-3xl lg:text-5xl font-semibold mb-4">
          <span className="text-orange-500">What We</span>
          <span className="text-balck"> Do</span>
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
        <div className="lg:w-3/4 p-4 lg:p-8 flex flex-col bg-gray-300">
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
