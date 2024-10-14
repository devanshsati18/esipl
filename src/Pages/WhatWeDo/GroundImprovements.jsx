import React, { useState } from "react";
import { motion } from "framer-motion";

import image1 from '../../Assets/What we do Photos/Ground Improvement/Basal Reinforcement/image1.png'
import image2 from '../../Assets/What we do Photos/Ground Improvement/Dynamic Compaction/DC.jpg'
import image3 from '../../Assets/What we do Photos/Ground Improvement/Stone or Sand Column/image3.png'
import image4 from '../../Assets/What we do Photos/Ground Improvement/Prefabricated Vertical Drain (PVD)/Screenshot 2024-10-14 163953.png'
import image5 from '../../Assets/What we do Photos/Ground Improvement/Prefabricated Vertical Drain (PVD)/image5.jpg'
import image6 from '../../Assets/What we do Photos/Ground Improvement/Prefabricated Vertical Drain (PVD)/image6.jpg' 

const imageSliderData = [image5,image6];

const solutionContent = {
    BasalReinforcement: {
    title: "Basal Reinforcement",
    content: "Basal reinforcement is a ground improvement technique that enhances the stability and load-bearing capacity of weak soils, particularly under structures like embankments or retaining walls. This method involves installing a grid or layer of reinforcement (often made of Geogrids, Geocells or geotextiles) at the base of the structure.",
    image: image1,
  },
  StoneSandColumn:  {
    title: "Stone/Sand Column",
    content: "Stone Column or Sand Column ground improvement techniques are effective methods used to enhance the load-bearing capacity and stability of soft or weak soils. Stone columns involve the installation of vertical columns filled with gravel or crushed stone into the ground to improve soil strength and reduce settlement. Sand columns are like stone columns but use sand as the filling material. They are particularly effective in granular soils.",
    image: image3,
  },
  PrefabricatedVerticalDrain:  {
    title: "Prefabricated Vertical Drain (PVD’s)",
    content: "Prefabricated Vertical Drains (PVDs) are an effective ground improvement technique used to accelerate the consolidation of soft, compressible soils. They facilitate the rapid dissipation of excess pore water pressure, promoting quicker soil stabilization. PVDs are slender, prefabricated drainage elements made from a core material (typically a plastic or geosynthetic) that allows water to flow through while providing mechanical support. They are installed vertically into the ground at specified intervals.",
    image: image4,
  },
  DynamicCompaction:{
    title: "Dynamic Compaction",
    content: "Dynamic compaction is a ground improvement technique used to enhance the density and strength of soil, particularly in loose or weak soils. It involves dropping a heavy weight from a specified height onto the ground surface, which causes the soil to compact and rearrange.",
    image: image2,
  },
};

const GroundImprovements = () => {
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
    <div className="min-h-screen bg-gray-100 p-8 py-20">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
        Ground Improvements
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
            Understanding Ground Improvements
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Ground improvement refers to a variety of techniques used to enhance the physical properties of soil to increase its strength, stability, and load-bearing capacity. This process can involve methods such as compaction, grouting, soil stabilization, and the use of geosynthetics. The goal is to make the ground more suitable for construction and reduce the risk of settlement, erosion, or failure in engineering projects.
          </p>
          {/* <p className="text-gray-700 mt-4">
            Examples include designing and reinforcing infrastructure to withstand seismic activity, implementing erosion control techniques, and safeguarding road infrastructure from potential landslides.
          </p> */}
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
          Types of Ground Improvements
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
                    {/* Image on the left */}
                    <img
                      src={solutionContent[key].image}
                      alt={solutionContent[key].title}
                      className="w-1/3 h-auto rounded-lg shadow-md"
                    />
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

export default GroundImprovements;