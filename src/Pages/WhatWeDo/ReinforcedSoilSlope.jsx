import React, { useState } from "react";
import { motion } from "framer-motion";

const imageSliderData = [
  "https://via.placeholder.com/400x400",
  "https://via.placeholder.com/400x400/ff6347",
  "https://via.placeholder.com/400x400/4682b4",
];

const solutionContent = {
  nailedgibionwalls: {
    title: "Nailed Gabion Walls",
    content: "Nailed gabions are primarily employed for their attractive appearance. They serve as an effective solution for erosion control and surface protection.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  mseWall: {
    title: "Mechanically Stabilized Earth Wall",
    content: "A Mechanically Stabilized Earth (MSE) wall is a type of retaining structure that combines soil with reinforcement materials to provide stability and support. MSE walls are known for their efficiency in handling high loads and for their versatility in various soil conditions. If the slope face angle steeper than 70 degrees, then it will be categorized as Reinforced Soil Walls or MSE Walls",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
  backToBackWall: {
    title: "Back-to-Back Wall",
    content: "The back-to-back wall are those which are near each other such that the reinforced portion of wall come within the active failure wedge which might form beyond the reinforced soil volume. As the walls comes closer the earth pressure by the back fill on the reinforce block decreases and at a point when the reinforcing element of the two walls overlap by O.3H2 (where H2 is the height of the shorter wall) the earth pressure becomes zero. In a position where the wall is at a distance such that D > tan(45°-(j)/2) where there is no interference of active wedge with the reinforced volume, they will behave as independent walls, and stability shall be obtained accordingly. In between these two positions the earth pressure shall be linearly interpolated for analysing sliding and over-turning.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  brokenSlopeWall: {
    title: "Broken Slope Walls",
    content: ":   This geometry is regarding change in slope of back fill near the RE Wall. Two situations can arise at site depending on the distance from the wall where the slope changes. Where, however, the change in slope takes place beyond 2H (Height of the wall) all computation of earth pressure co-efficient etc. shall be done taking surcharge slope without any modification.There could be two situations, first where the slope changes within the length of reinforcement and second where the slope changes beyond the reinforcement length but before 2H distance from the wall. Both these cases are covered in following sketches. In both cases the surcharge angle (p) is required to be modified by angle (I) and all computation of earth pressure coefficient etc. are done using modified surcharge angle. Rest of the computation is same as for wall without broken slope.",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
  superimposedWall: {
    title: "Superimposed Walls",
    content: "A 'superimposed' RE Wall refers to a scenario where one RE Wall is built on top of another or in a layered fashion. This might be done to increase the height of the wall or to add additional stability by distributing loads in a more effective manner. Total height of embankment can be covered by providing stepped RE Wall each covering one part of height, such arrangement is known as Superimposed Wall or double tiered walls. The berm provided should be fully packed or fully covered with Geocell with PCC or RCC slab so that no water should enter the RS Wall.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  smseWall: {
    title: "Shored Mechanically Stabilized Earth (SMSE) Wall",
    content: "This type of retaining wall is employed when space is limited, or a sleek retaining wall or slope is required. Such type of retaining structure offers a perfect balance between cut and fill. This system is used to stabilize steep slopes, road widening in valleys, landslide restoration, rehabilitation, etc. When a reinforced soil (RS) system and nailing or ground anchor system combined are used on a project, there are long-term retaining benefits provided by the shoring wall, including improving cut slope stability and safety during construction, reduction of lateral loads on the RS wall mass and significant contributions to global stability. This type of hybrid system is popularly known as “shored RS wall” or shored reinforced soil (SRS) system. Shored reinforced soil structure is a combination of in-situ soil nailed slope and reinforced soil structure. The reinforced soil wall/slope is constructed by connecting the reinforcement with the soil nailed structure. This solution is suitable when the required base width is not available for design of any conventional retaining structure. In steep terrains construction of conventional reinforced soil wall or any retaining structures may not be always feasible due to non-availability of required base width or sometime excavation is not feasible particularly if traffic must be maintained during construction. Hence, shored or hybrid reinforced soil structure system is good alternative in such situation.",
    image: "https://via.placeholder.com/400x250/4682b4",
  },
  bridgeAbutments: {
    title: "Bridge Tech-Abutments",
    content: "The usage of RS abutments (reinforced soil true abutment and herein after called “bridge abutment”) has gradually increased worldwide because of simple, rapid and predictable construction process which results in strong, durable and economical structure. A RS abutment essentially consists of conventional reinforced soil wall designed to support the earth pressures behind it, as well as the heavy, concentrated vertical and horizontal surcharge loads imposed on it by bridge superstructure and traffic loadings. Superstructure loads are transmitted by a reinforced concrete beam seat which distributes the stresses to the reinforced wall.",
    image: "https://via.placeholder.com/400x250/ff6347",
  },
  reinforcedGabion: {
    title: "Reinforced Gabion Gravity Wall",
    content: "A gabion gravity wall, or any gravity wall, relies on its mass to resist horizontal forces, making the wall's dimensions crucial. In a reinforced gravity wall, geosynthetic reinforcements are used to lessen the horizontal forces, which in turn reduces the required weight and overall dimensions of the wall. The use of reinforced gabion gravity wall is significant in areas where there are less availability of space at the back of an abutment etc.",
    image: "https://via.placeholder.com/400x250/4682b4",
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
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
        Reinforced Soil Slope
        </h1>
        <p className="text-2xl mt-4 text-gray-600">Mitigating risks, securing the future.</p>
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
          Retaining structures are engineering systems designed to support or hold back soil, rock, or other materials, preventing them from collapsing or sliding. These structures are essential in various construction projects where the natural slope of the land needs to be altered or stabilized.
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

export default ReinforcedSoilSlope;
