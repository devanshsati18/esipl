import React, { useState } from "react";
import { motion } from "framer-motion";

import image1 from '../../Assets/What we do Photos/Reinforced Soil Slope/image1.png';
import image2 from '../../Assets/What we do Photos/Reinforced Soil Slope/image2.png'

const imageSliderData = [image1,image2];

const solutionContent = {
  IncreasedStability: {
    title: "Increased Stability",
    content: "Reinforcement helps resist sliding, yielding, and other failure modes, especially in steep slopes.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  Flexibility: {
    title: "Flexibility",
    content: "Suitable for various soil types and can be adapted to specific site conditions.",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
  CostEffective: {
    title: "Cost-Effective",
    content: "Often more economical than traditional retaining wall systems for achieving similar performance.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
};

const ReinforcedSoilSlope = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageSliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleDropdown = (solution) => {
    setOpenDropdown(openDropdown === solution ? null : solution);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl font-extrabold text-transparent  pt-10 bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
        Reinforced Soil Slope
        </h1>
        {/* <p className="text-2xl mt-4 text-gray-600">Mitigating risks, securing the future.</p> */}
      </motion.div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left: Image with adjusted height */}
        <motion.div
          className="lg:w-1/3 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={imageSliderData[currentImageIndex]}
            alt="Geohazard"
            className="rounded-lg shadow-2xl w-full h-auto"
            style={{ height: '400px', objectFit: 'cover' }} // Custom height
          />
          <button
            className="mt-6 px-4 py-2 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition"
            onClick={handleNextImage}
          >
            Next Image
          </button>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="lg:w-2/3 w-full bg-white p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-orange-500 mb-4">
            Understanding Reinforced Soil Slope
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Reinforced soil slopes are engineered slopes that utilize soil reinforcement techniques to enhance stability, reduce erosion, and improve overall performance. This method combines traditional soil mechanics with geosynthetic materials or other reinforcement methods to create a stable slope that can support various structures.
          </p>
          <p className="text-gray-700 mt-4">
          Reinforced soil slopes are an effective solution for managing slopes in a variety of civil engineering applications, providing increased stability and erosion resistance while being cost-effective and adaptable to different environments.
          </p>
        </motion.div>
      </div>

      {/* Types of Solutions Section with Dropdowns */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }} // Slide-up and fade-in effect
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-center text-4xl font-bold text-gray-700 mb-10">
          Types of Solutions to Prevent Reinforced Soil Slope
        </h3>

        {/* Dropdowns for Solutions */}
        <div className="flex flex-col gap-4">
          {Object.keys(solutionContent).map((key) => (
            <div key={key} className="w-full">
              <motion.div
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg cursor-pointer"
                onClick={() => toggleDropdown(key)}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-2xl font-bold text-orange-500">
                  {solutionContent[key].title}
                </h4>
              </motion.div>
              {/* Dropdown Content */}
              {openDropdown === key && (
                <motion.div
                  className="mt-2 p-4 bg-gray-200 rounded-lg"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-6">
                    
                    {/* Content on the right */}
                    <div className="w-2/3">
                      <p className="text-gray-700">{solutionContent[key].content}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ReinforcedSoilSlope;
