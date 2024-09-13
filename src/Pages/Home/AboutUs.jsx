// src/AboutUs.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import 'animate.css';

const slides = [
  {
    heading: 'Who we are',
    image: 'https://via.placeholder.com/1200x800?text=Image+1',
    content: 'Earthcon Systems India Private Limited is an ISO: 9001: 2015 certified organization having experience of more than 20 years. We are dedicated to driving innovation in the Geosynthetics field. With a passion for excellence and commitment to sustainability, we provide cutting-edge solutions that address the evolving needs of our clients.',
  },
  {
    heading: 'Vision & Mission',
    image: 'https://via.placeholder.com/1200x800?text=Image+2',
    content: 'Our mission is to lead the way in Retaining structures, Geohazard Mitigation, Geosynthetic Pavement Applications, etc. by delivering innovative, robust and sustainable solutions. Our commitment is to provide effective, reliable and environmentally conscious solutions that address complex geotechnical challenges and safeguard communities.',
  },
  {
    heading: "From MD’s Desk ",
    image: 'https://via.placeholder.com/1200x800?text=Image+3',
    content: "Our commitment to excellence is reflected in the meticulous care and expertise we bring to each challenge. We are grateful for your trust and excited about the opportunities to collaborate on building a stronger future.",
  },
  {
    heading: "Our Key Persons ",
    image: 'https://via.placeholder.com/1200x800?text=Image+4',
    content: "Additional content will go there ",
  }
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState((currentIndex + 1) % slides.length);
  const imageControls = useAnimation();
  const intervalRef = useRef(null);

  useEffect(() => {
    // Automatically change slides every 8 seconds
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  useEffect(() => {
    // Trigger slide change animation
    animateSlideChange();
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setNextIndex(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setNextIndex(prevIndex);
    setCurrentIndex(prevIndex);
  };

  const animateSlideChange = async () => {
    // Animate the outgoing image
    await imageControls.start({
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    });

    // Prepare the incoming image
    imageControls.start({
      x: '100%',
      opacity: 0,
      transition: { duration: 0 }
    });

    // Animate the incoming image into view
    imageControls.start({
      x: '0%',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    });
  };

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* Fixed Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/50 to-white z-0"></div>

      {/* Fixed Heading */}
      <header className="w-full bg-white text-center py-4 z-10">
        <h1 className="text-4xl font-bold text-orange-600">Who we are</h1>
      </header>

      {/* Main Content */}
      <div className="relative flex flex-1 mt-16 overflow-hidden">
        {/* Content Section */}
        <div className="flex flex-col justify-center p-4 w-full md:w-1/2 z-10 relative align-text-top">
          <h2 className="text-xl font-bold align-text-top">{slides[currentIndex].heading}</h2>
          <p className="mt-2">{slides[currentIndex].content}</p>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute w-full h-full flex"
            animate={imageControls}
            initial={{ x: '0%', opacity: 1 }}
          >
            <motion.img
              src={slides[currentIndex].image}
              alt="Current Slide"
              className="w-full h-auto object-cover"
              style={{ position: 'absolute', top: 0 }}
            />
            <motion.img
              src={slides[nextIndex].image}
              alt="Next Slide"
              className="w-full h-auto object-cover"
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: 0 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-4 z-20">
        <button
          className="bg-orange-600 text-white p-2 rounded-full"
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <button
          className="bg-orange-600 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
