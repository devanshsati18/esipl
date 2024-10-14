import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images from assets folder
import image1 from '../../Assets/What we do Photos/Friction Slab cum Crash Barrier/image1.jpg';
import image2 from '../../Assets/What we do Photos/Friction Slab cum Crash Barrier/image2.jpg';
import image3 from '../../Assets/What we do Photos/Friction Slab cum Crash Barrier/image3.jpg';
import image4 from '../../Assets/What we do Photos/Friction Slab cum Crash Barrier/image4.jpg';

const imageSliderData = [image1, image2, image3];

const solutionContent = {
  EnhancedSafety: {
    title: "Enhanced Safety",
    content: "The combination of the friction slab and crash barrier improves vehicle control during impacts, reducing the risk of serious accidents.",
    image: image1, // Direct reference to the image
  },
  StructuralStability: {
    title: "Structural Stability",
    content: "The friction slab provides a stable foundation that can support heavy loads while enhancing friction between the vehicle tires and the surface.",
    image: image2, // Direct reference to the image
  },
  CostEffective: {
    title: "Cost-Effective",
    content: "Integrating two functions into a single structure can save on materials, labour, and installation costs compared to separate systems.",
    image: image3, // Direct reference to the image
  },
  Durability: {
    title: "Durability",
    content: "Typically constructed from reinforced concrete, these systems are designed to withstand environmental stresses and vehicle impacts.",
    image: image4, // Direct reference to the image
  },
};

const FrictionSlabcumCrashBarrier = () => {
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
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
          Friction Slab cum Crash Barrier
        </h1>
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
            Understanding Friction Slab cum Crash Barrier
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A friction slab cum crash barrier is a specialized structural component used in highway and road safety systems. This design combines a friction slab and a crash barrier into a single unit, providing both stability for vehicles and protection against potential hazards.
          </p>
          <p className="text-gray-700 mt-4">
            Friction slabs cum crash barriers play a crucial role in enhancing road safety by combining structural stability with protective features. They are designed to manage vehicle impacts effectively, promoting safer driving environments on various road types.
          </p>
        </motion.div>
      </div>

      {/* Types of Solutions Section with Dropdowns */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-center text-4xl font-bold text-gray-700 mb-10">
          Types of Solutions to Prevent Friction Slab cum Crash Barrier
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

export default FrictionSlabcumCrashBarrier;
