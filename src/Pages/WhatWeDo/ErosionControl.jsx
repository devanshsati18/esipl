import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from '../../Assets/What we do Photos/Erosion Control/image1.png';
import image2 from '../../Assets/What we do Photos/Erosion Control/image2.png';

const imageSliderData = [image1,image2];

const solutionContent = {
    SoilConservation: {
    title: "Soil Conservation",
    content: "Protects topsoil, which is essential for agriculture and ecosystem health.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  WaterQualityProtection: {
    title: "Water Quality Protection",
    content: "Reduces sediment runoff into rivers and lakes, improving water quality.",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
  infrastructureProtection: {
    title: "Infrastructure Protection",
    content: "Prevents damage to roads, bridges, and other structures from erosion-related issues.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  HabitatPreservation: {
    title: "Habitat Preservation",
    content: "Maintains natural landscapes and habitats for wildlife.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
};

const ErosionControl = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

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
        <h1 className="text-7xl font-extrabold pt-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
          Erosion Control
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
            Understanding Erosion Control
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Erosion control refers to a range of practices and techniques aimed at preventing soil erosion, which can occur due to water, wind, or human activities. Effective erosion control is essential for maintaining soil health, protecting waterways, and preventing land degradation.
          </p>
          <p className="text-gray-700 mt-4">
          Erosion control is vital for sustainable land management, providing ecological, economic, and aesthetic benefits. Implementing effective erosion control measures can significantly enhance soil stability and protect natural resources.
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
          Benifits of Erosion Control
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

export default ErosionControl;
