import React from 'react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const slides = [
  {
    img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    heading: 'Heading 1',
    content: 'Content for the first image.',
  },
  {
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    heading: 'Heading 2',
    content: 'Content for the second image.',
  },
  {
    img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    heading: 'Heading 3',
    content: 'Content for the third image.',
  },
];

export function NewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: (
      <button
        style={{
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
    ),
    nextArrow: (
      <button
        style={{
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    ),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Diagonal cut overlay */}
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
        }}
      ></div>

      {/* Carousel */}
      <Slider {...settings} className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative flex items-center justify-center h-full w-full">
            <img
              src={slide.img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-6 rounded-lg shadow-lg"
              style={{
                maxWidth: '80%',
                textAlign: 'center',
              }}
            >
              <h1 className="text-4xl font-bold mb-4 text-white underline">{slide.heading}</h1>
              <p className="text-lg text-white">{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full shadow-md z-20"
        onClick={() => document.querySelector('.slick-prev').click()}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full shadow-md z-20"
        onClick={() => document.querySelector('.slick-next').click()}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default NewSlider;
