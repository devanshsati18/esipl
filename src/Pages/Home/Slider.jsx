import React, { useState } from 'react';
import Slider from 'react-slick';
import bg1 from '../../Assets/Slider/bg1.jpg';
import bg2 from '../../Assets/Slider/bg2.webp';
import bg3 from '../../Assets/Slider/bg3.jpg';

export function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesContent = [
    {
      heading: "Building tomorrow's foundation today",
      content: "Your reliable partner in progress.",
    },
    {
      heading: "Creating tomorrow's landmarks with today's expertise",
      content: "Innovative solutions for modern challenges.",
    },
    {
      heading: "Crafting the pillars of progress for tomorrow",
      content: "Experience, commitment, and excellence.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div
        style={{
          height: '10px',
          width: '10px',
          borderRadius: '50%',
          background: i === currentSlide ? 'black' : 'white',
          margin: '0 5px',
        }}
      />
    ),
  };

  const slideInOut = `
    @keyframes slide-in {
      0% { transform: translateX(-100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes slide-out {
      0% { transform: translateX(0); opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-slide-in { animation: slide-in 2s ease-out; }
    .animate-slide-out { animation: slide-out 2s ease-in; }
  `;

  return (
    <div className="relative w-full h-screen overflow-hidden object-contain">
      <style>{slideInOut}</style>
      <Slider {...settings} className="w-full h-full">
        <div className="relative w-full h-full">
          <img src={bg1} alt="image 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-full">
          <img src={bg2} alt="image 2" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-full">
          <img src={bg3} alt="image 3" className="w-full h-full object-cover" />
        </div>
      </Slider>
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: 0,
          width: '100%',
          height: '40%', // Height of the overlay
          background: 'rgba(255, 165, 0, 0.75)',
          clipPath: 'polygon(0% 0%,60% 0%, 25% 70%, 0% 71%)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: '1rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
          transform: 'translateY(33%)', // Pushes the overlay down by 33%
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
              maxWidth: '90%',
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
              lineHeight: '1.5',
              maxWidth: '90%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {slidesContent[currentSlide].content}
          </p>
        </div>
      </div>

      {/* Optional: Bottom Dots for the Bottom Carousel */}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        {slidesContent.map((_, index) => (
          <div
            key={index}
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              background: index === currentSlide ? 'black' : 'white',
              display: 'inline-block',
              margin: '0 5px',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomSlider;
