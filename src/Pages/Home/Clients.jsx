import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

// Import images from internal folder
import client1 from "../../Assets/Clients/client1.jpg";
import client2 from "../../Assets/Clients/client2.jpg";
import client3 from "../../Assets/Clients/client3.jpg";
import client4 from "../../Assets/Clients/client4.jpg";
import client5 from "../../Assets/Clients/client5.jpg";
import client6 from "../../Assets/Clients/client6.jpg";
/* import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png"; */

function Clients() {
    // Arrays of imported image paths
    const row1 = [client1, client2, client3, client4, client5, client6];
    const row2 = [client1, client2, client3, client4, client5, client6];
  
    const marqueeAnimation = useSpring({
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(-100%)" },
        config: { duration: 30000 },
        reset: true,
        loop: true,
      });
    
      const marqueeReverseAnimation = useSpring({
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(0%)" },
        config: { duration: 30000 },
        reset: true,
        loop: true,
        delay: 3000,
      });
    
      return (
        <div className="w-screen h-screen flex items-center justify-center bg-white text-black">
          <div className="w-full max-w-6xl flex flex-col items-center">
            <div className="text-4xl font-medium text-orange-500 mb-2">Our Clients</div>
            <div className="text-lg font-light text-gray-600 mb-10">
              Earthcon Systems (India) Pvt. Ltd.
            </div>
            <div className="overflow-hidden w-full relative">
              <animated.div
                className="flex whitespace-nowrap"
                style={marqueeAnimation}
              >
                {row1.map((el, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2">
                    <img src={el} className="w-40 h-auto rounded-lg shadow-md" alt={`client-${index}`} />
                  </div>
                ))}
              </animated.div>
              <animated.div
                className="absolute top-0 left-0 flex whitespace-nowrap"
                style={marqueeReverseAnimation}
              >
                {row1.map((el, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2">
                    <img src={el} className="w-40 h-auto rounded-lg shadow-md" alt={`client-${index}`} />
                  </div>
                ))}
              </animated.div>
            </div>
            <div className="overflow-hidden w-full relative mt-10">
              <animated.div
                className="flex whitespace-nowrap"
                style={marqueeAnimation}
              >
                {row2.map((el, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2">
                    <img src={el} className="w-40 h-auto rounded-lg shadow-md" alt={`logo-${index}`} />
                  </div>
                ))}
              </animated.div>
              <animated.div
                className="absolute top-0 left-0 flex whitespace-nowrap"
                style={{
                  ...marqueeReverseAnimation,
                  transform: "translateX(-100%)", // Reverse the direction for row2
                  from: { transform: "translateX(100%)" },
                  to: { transform: "translateX(0%)" },
                }}
              >
                {row2.map((el, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2">
                    <img src={el} className="w-40 h-auto rounded-lg shadow-md" alt={`logo-${index}`} />
                  </div>
                ))}
              </animated.div>
            </div>
            <Link to="/more" className="mt-10 text-blue-600 underline">
              View More
            </Link>
          </div>
        </div>
      );
  }
  

export default Clients;
