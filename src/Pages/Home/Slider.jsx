import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import 'animate.css'; // Import Animate.css

// Custom arrow components using Font Awesome
const CustomPrevArrow = (props) => (
  <button 
    className="slick-arrow slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none"
    onClick={props.onClick}
    aria-label="Previous Slide"
  >
    <i className="fas fa-chevron-left text-black"></i>
  </button>
);

const CustomNextArrow = (props) => (
  <button 
    className="slick-arrow slick-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg focus:outline-none"
    onClick={props.onClick}
    aria-label="Next Slide"
  >
    <i className="fas fa-chevron-right text-black"></i>
  </button>
);

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function CustomSlider() {
  return (
    <div className="relative w-full h-[93vh] overflow-hidden">
      <Slider {...sliderSettings} className="h-full">
        {/* Slide 1 */}
        <div className="relative h-full">
          <img 
            src={require('../../Assets/Slider/bg2.jpg')} 
            alt="Slide 1" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black bg-opacity-30">
            <h2 className="text-4xl lg:text-6xl font-bold animate__animated animate__fadeIn">Reinforced Soil Walls</h2>
            <p className="text-xl lg:text-2xl mt-2 animate__animated animate__fadeIn animate__delay-1s">Panel Fascia</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-full">
          <img 
            src={require('../../Assets/Slider/bg3.jpg')} 
            alt="Slide 2" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black bg-opacity-30">
            <h2 className="text-4xl lg:text-6xl font-bold animate__animated animate__fadeIn">Reinforced Soil Walls</h2>
            <p className="text-xl lg:text-2xl mt-2 animate__animated animate__fadeIn animate__delay-1s">Panel Fascia</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-full">
          <img 
            src={require('../../Assets/Slider/bg4.jpg')} 
            alt="Slide 3" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black bg-opacity-30">
            <h2 className="text-4xl lg:text-6xl font-bold animate__animated animate__fadeIn">Reinforced Soil Walls</h2>
            <p className="text-xl lg:text-2xl mt-2 animate__animated animate__fadeIn animate__delay-1s">Gabion and Block Fascia</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative h-full">
          <img 
            src={require('../../Assets/Slider/bg5.jpg')} 
            alt="Slide 4" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black bg-opacity-30">
            <h2 className="text-4xl lg:text-6xl font-bold animate__animated animate__fadeIn">Slide 4 Heading</h2>
            <p className="text-xl lg:text-2xl mt-2 animate__animated animate__fadeIn animate__delay-1s">Slide 4 Content</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CustomSlider;
