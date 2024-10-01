import React, { useState } from "react";
import { motion } from "framer-motion";

const imageSliderData = [
  "https://via.placeholder.com/400x400/ff6347",
  "https://via.placeholder.com/400x400/4682b4",
  "https://via.placeholder.com/400x400/ffa500",
];

const solutionContent = {
  mseWall: {
    title: "Mechanically Stabilized Earth Wall",
    content: "A Mechanically Stabilized Earth (MSE) wall combines soil with reinforcement materials to provide stability and support. MSE walls efficiently handle high loads and are versatile in various soil conditions. They can be categorized into different types based on their fascia, including panel, block, gabion, geocell, welded wire mesh, and wrap-around fascia.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  backToBackWall: {
    title: "Back-to-Back Wall",
    content: "Back-to-back walls are placed close enough that the reinforced portions overlap. This arrangement reduces earth pressure on the reinforced blocks and enhances overall stability. As the walls get closer, the earth pressure exerted by the backfill on the reinforced blocks decreases.",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
  brokenSlopeWall: {
    title: "Broken Slope Wall",
    content: "This design addresses changes in slope near the retaining wall. Two scenarios can occur: if the slope change takes place beyond 2H (height of the wall), all calculations are made without modifications. If the slope changes within the reinforcement length, modifications to earth pressure coefficients are required.",
    image: "https://via.placeholder.com/400x250/ffa500",
  },
  superimposedWall: {
    title: "Superimposed Wall",
    content: "A superimposed RE wall is built on top of another to increase height and stability. This layered construction distributes loads more effectively and can be designed with stepped configurations, ensuring that no water infiltrates the reinforced soil wall.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  smseWall: {
    title: "Shored Mechanically Stabilized Earth Wall",
    content: "This type of retaining wall is ideal for limited spaces or when a sleek appearance is required. It stabilizes steep slopes and is useful for road widening and landslide restoration. This system combines soil nailing with reinforced soil for enhanced stability and safety.",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
  bridgeTech: {
    title: "Bridge Tech-Abutments",
    content: "RS abutments, or reinforced soil abutments, provide a strong and economical solution for supporting bridge superstructures. They consist of a reinforced soil wall designed to withstand vertical and horizontal loads from traffic and the bridge structure itself.",
    image: "https://via.placeholder.com/400x250/ffa500",
  },
  reinforcedGabion: {
    title: "Reinforced Gabion Gravity Wall",
    content: "Gabion gravity walls rely on mass to resist horizontal forces. Reinforcements reduce the required dimensions and weight, making them suitable for areas with limited space. They are effective in controlling erosion and providing support.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  nailedGabion: {
    title: "Nailed Gabion Walls",
    content: "Nailed gabions are primarily used for their aesthetic appeal while serving as an effective erosion control solution. They protect surfaces and provide stabilization in various environments.",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
};

const RetrainingStructures = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSolution, setCurrentSolution] = useState("mseWall");

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageSliderData.length - 1 ? 0 : prevIndex + 1
    );
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

      {/* Types of Solutions Section with Entry Animation */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-center text-4xl font-bold text-gray-700 mb-10">
          Types of Retaining Structures
        </h3>

        {/* Cards with hover effects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Mechanically Stabilized Earth Wall Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "mseWall" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("mseWall")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Mechanically Stabilized Earth Wall</h4>
            <p className="text-gray-600 mt-2">Combines soil with reinforcement materials for stability.</p>
          </motion.div>

          {/* Back-to-Back Wall Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "backToBackWall" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("backToBackWall")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Back-to-Back Wall</h4>
            <p className="text-gray-600 mt-2">Walls placed closely to optimize earth pressure.</p>
          </motion.div>

          {/* Broken Slope Wall Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "brokenSlopeWall" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("brokenSlopeWall")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Broken Slope Wall</h4>
            <p className="text-gray-600 mt-2">Designed for changes in slope near retaining walls.</p>
          </motion.div>

          {/* Superimposed Wall Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "superimposedWall" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("superimposedWall")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Superimposed Wall</h4>
            <p className="text-gray-600 mt-2">Layered walls for increased height and stability.</p>
          </motion.div>

          {/* Shored Mechanically Stabilized Earth Wall Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "smseWall" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("smseWall")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Shored Mechanically Stabilized Earth Wall</h4>
            <p className="text-gray-600 mt-2">Ideal for steep slopes and limited space.</p>
          </motion.div>

          {/* Bridge Tech-Abutments Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "bridgeTech" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("bridgeTech")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Bridge Tech-Abutments</h4>
            <p className="text-gray-600 mt-2">Reinforced soil abutments for bridge support.</p>
          </motion.div>

          {/* Reinforced Gabion Gravity Wall Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "reinforcedGabion" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("reinforcedGabion")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Reinforced Gabion Gravity Wall</h4>
            <p className="text-gray-600 mt-2">Effective for erosion control and support.</p>
          </motion.div>

          {/* Nailed Gabion Walls Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-8 bg-white rounded-lg shadow-xl transform transition-all ${
              currentSolution === "nailedGabion" ? "border-4 border-orange-500" : ""
            }`}
            onClick={() => setCurrentSolution("nailedGabion")}
          >
            <h4 className="text-2xl font-bold text-orange-500">Nailed Gabion Walls</h4>
            <p className="text-gray-600 mt-2">Aesthetic and functional erosion control solution.</p>
          </motion.div>
        </div>

        {/* Solution Detail Section */}
        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h4 className="text-3xl font-bold text-orange-500 mb-4">
              {solutionContent[currentSolution].title}
            </h4>
            <p className="text-gray-700">{solutionContent[currentSolution].content}</p>
            <img
              src={solutionContent[currentSolution].image}
              alt={solutionContent[currentSolution].title}
              className="mt-4 rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RetrainingStructures;
