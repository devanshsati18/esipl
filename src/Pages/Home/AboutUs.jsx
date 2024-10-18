import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import 'animate.css';
import image1 from '../../Assets/KeyPeople/PawanGoel.jpg';
import image2 from '../../Assets/KeyPeople/AnilMaheshwary.jpg';
import image3 from '../../Assets/KeyPeople/RajivGoel.jpg';
import image4 from '../../Assets/KeyPeople/visson.jpeg';
import image5 from '../../Assets/KeyPeople/whoweare.jpg';

const slides = [
  {
    heading: 'Who we are',
    image: image5,
    content: 'Earthcon Systems India Private Limited is an ISO: 9001: 2015 certified organization having experience of more than 20 years. We are dedicated to driving innovation in the Geosynthetics field. With a passion for excellence and commitment to sustainability, we provide cutting-edge solutions that address the evolving needs of our clients.',
    bgColor: 'bg-gradient-to-r from-blue-400 to-purple-500',
  },
  {
    heading: 'Vision & Mission',
    image: image4,
    content: 'Our mission is to lead the way in Retaining structures, Geohazard Mitigation, Geosynthetic Pavement Applications, etc. by delivering innovative, robust and sustainable solutions. Our commitment is to provide effective, reliable and environmentally conscious solutions that address complex geotechnical challenges and safeguard communities.',
    bgColor: 'bg-gradient-to-r from-green-400 to-teal-500',
  },
  {
    heading: "From MD’s Desk",
    image: image3,
    content: "Our commitment to excellence is reflected in the meticulous care and expertise we bring to each challenge. We are grateful for your trust and excited about the opportunities to collaborate on building a stronger future.",
    bgColor: 'bg-gradient-to-r from-red-400 to-yellow-500',
    smallHeading: 'Rajiv Goel (IIT-Delhi)',
  },
  {
    heading: "Our Key Persons",
    images: [
      { src: image1, smallHeading: "Pawan Goel (Director)" },
      { src: image2, smallHeading: "Anil Maheshwary (CFO)" },
    ],
    content: "Meet our dedicated team who drive our vision forward.",
    bgColor: 'bg-gradient-to-r from-pink-400 to-orange-500',
  }
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageControls = useAnimation();
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  useEffect(() => {
    animateSlideChange();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const animateSlideChange = async () => {
    await imageControls.start({ x: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } });
    imageControls.start({ x: '100%', opacity: 0, transition: { duration: 0 } });
    imageControls.start({ x: '0%', opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } });
  };

  return (
    <div className={`h-2/3 flex flex-col relative overflow-hidden ${slides[currentIndex].bgColor}`}>
      {/* Header Section */}
      <header className="bg-white shadow-md py-6 text-center">
        <h1 className="text-5xl font-bold text-orange-600">Who We Are</h1>
      </header>

      {/* Main Content */}
      <div className="relative flex flex-1 mt-8 overflow-hidden flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden">
          {currentIndex < 3 ? (
            <div className="flex flex-col items-center">
              <motion.img
                src={slides[currentIndex].image}
                alt="Current Slide"
                className="w-full h-[380px] object-cover rounded-lg shadow-lg mb-4"
                animate={imageControls}
              />
            </div>
          ) : (
            <div className="flex justify-around items-center">
              {slides[currentIndex].images.map((img, index) => (
                <div key={index} className="flex flex-col items-center mx-2">
                  <motion.img
                    src={img.src}
                    alt={`Key Person ${index + 1}`}
                    className="w-64 h-64 object-cover rounded-full shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  />
                  <h3 className="text-xl text-white text-center mt-2">{img.smallHeading}</h3>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 z-10 h-[400px]">
          <h2 className="text-4xl font-extrabold text-white">{slides[currentIndex].heading}</h2>
          <p className="mt-4 text-lg text-white">{slides[currentIndex].content}</p>
          <h3 className="text-xl text-white mt-4">
            {currentIndex < 3 ? slides[currentIndex].smallHeading : ""}
          </h3>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-6 z-20">
        <button
          className="bg-white text-orange-600 p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition"
          onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
        >
          &lt;
        </button>
        <button
          className="bg-white text-orange-600 p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
