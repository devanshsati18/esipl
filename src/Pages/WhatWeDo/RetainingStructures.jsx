import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from '../../Assets/What we do Photos/Retaining Structures/image1.jpg'
import image2 from '../../Assets/What we do Photos/Retaining Structures/Back to Back wall/image1.png'
import image3 from '../../Assets/What we do Photos/Retaining Structures/Bridge Tech-Abutments/image2.png'
import image4 from '../../Assets/What we do Photos/Retaining Structures/Broken Slope/image4.png'
import image5 from '../../Assets/What we do Photos/Retaining Structures/Mechanically Stabilized Earth Wall/image5.png'
import image6 from '../../Assets/What we do Photos/Retaining Structures/Nailed Gabion Wall/image6.png'
import image7 from '../../Assets/What we do Photos/Retaining Structures/Reinforced Gabion Gravity Wall/image7.png'
import image8 from '../../Assets/What we do Photos/Retaining Structures/Shored Mechanically Stabilized Earth Wall/image8.png'
import image9 from '../../Assets/What we do Photos/Retaining Structures/Super-imposed Wall/image9.png'
const imageSliderData = [image1];

const solutionContent = {
  mseWall: {
    title: "Mechanically Stabilized Earth Wall",
    content: "A Mechanically Stabilized Earth (MSE) wall combines soil with reinforcement materials to provide stability and support. MSE walls efficiently handle high loads and are versatile in various soil conditions.",
    image: image5,
  },
  backToBackWall: {
    title: "Back-to-Back Wall",
    content: "Back-to-back walls are placed close enough that the reinforced portions overlap, reducing earth pressure on the reinforced blocks.",
    image: image2,
  },
  brokenSlopeWall: {
    title: "Broken Slope Wall",
    content: "This design addresses changes in slope near the retaining wall, ensuring stability and support.",
    image: image4,
  },
  superimposedWall: {
    title: "Superimposed Wall",
    content: "A superimposed RE wall is built on top of another to increase height and stability.",
    image: image9,
  },
  smseWall: {
    title: "Shored Mechanically Stabilized Earth Wall",
    content: "This type of retaining wall is ideal for limited spaces or when a sleek appearance is required.",
    image: image8,
  },
  bridgeTech: {
    title: "Bridge Tech-Abutments",
    content: "RS abutments provide a strong and economical solution for supporting bridge superstructures.",
    image: image3,
  },
  reinforcedGabion: {
    title: "Reinforced Gabion Gravity Wall",
    content: "Gabion gravity walls rely on mass to resist horizontal forces, making them effective in controlling erosion.",
    image: image7,
  },
  nailedGabion: {
    title: "Nailed Gabion Walls",
    content: "Nailed gabions provide both aesthetic appeal and effective erosion control.",
    image: image6,
  },
};

const RetrainingStructures = () => {
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
          Retaining Structures
        </h1>
        <p className="text-2xl mt-4 text-gray-600">Supporting the stability of our landscapes.</p>
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
            alt="Retaining Structure"
            className="rounded-lg shadow-2xl w-full h-auto"
            style={{ height: '400px', objectFit: 'cover' }}
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
            Understanding Retaining Structures
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Retaining structures are essential engineering systems designed to support or hold back soil, rock, or other materials, preventing collapse or sliding. They play a crucial role in various construction projects.
          </p>
          <p className="text-gray-700 mt-4">
            Examples include Mechanically Stabilized Earth walls, Back-to-Back walls, and more, each serving unique functions in stabilizing slopes and supporting structures.
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
          Types of Retaining Structures
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
                    <div className="w-2/3 text-xl">
                      <p className="text-gray-700">{solutionContent[key].content}</p>
                    </div>
                    <img
                      src={solutionContent[key].image}
                      alt={solutionContent[key].title}
                      className="w-1/3 rounded-lg"
                    />
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

export default RetrainingStructures;
