import React, { useState } from 'react';
import Slider from 'react-slick';

export function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const slideInOut = `
    @keyframes slide-in {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slide-out {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    .animate-slide-in {
      animation: slide-in 1s ease-out;
    }
    .animate-slide-out {
      animation: slide-out 1s ease-in;
    }
  `;

  const slidesContent = [
    {
      heading: "Building tomorrow's foundation today",
      /* content: "Content for image 1 with more details here.", */
    },
    {
      heading: "Creating tomorrow's landmarks with today's expertise",
      /* content: "Content for image 2 with more details here.", */
    },
    {
      heading: "Crafting the pillars of progress for tomorrow",
      /* content: "Content for image 3 with more details here.", */
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style>
        {slideInOut}
      </style>
      <Slider {...settings} className="w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 165, 0, 0.75)', // Orange background with 75% opacity
          clipPath: 'polygon(0% 0%, 60% 0%, 20% 100%, 0% 100%)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centers content vertically
          alignItems: 'flex-start',
          padding: '1rem', // Padding to avoid text touching the edges
          boxSizing: 'border-box', // Ensures padding is included in width/height
        }}
      >
        <div className="text-left">
          <h1
            className={`text-white text-2xl md:text-3xl lg:text-4xl font-bold ${currentSlide === 0 ? 'animate-slide-in' : 'animate-slide-out'}`}
            style={{ 
              overflowWrap: 'break-word', 
              wordBreak: 'break-word', 
              margin: 0, 
              lineHeight: '1.2', 
              maxWidth: '90%' // Constrain width if necessary
            }} 
          >
            {slidesContent[currentSlide].heading}
          </h1>
          <p
            className={`text-white text-sm md:text-base lg:text-lg ${currentSlide === 0 ? 'animate-slide-in' : 'animate-slide-out'}`}
            style={{ 
              overflowWrap: 'break-word', 
              wordBreak: 'break-word', 
              margin: '0.5rem 0 0 0', 
              lineHeight: '1.5' 
            }} 
          >
            {slidesContent[currentSlide].content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomSlider;