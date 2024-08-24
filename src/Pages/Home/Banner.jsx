import React from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Banner = () => {
  const textProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 1000 },
  });

  return (
    <div className="relative w-3/4 mx-auto">
      <Slider {...settings}>
        <div className="relative h-56 md:h-96">
          <img src="../../Assets/bg2.JPG" className="absolute block w-full h-full object-cover" alt="Slide 1" />
          <animated.div style={textProps} className="absolute bottom-5 left-5 bg-black text-white px-4 py-2 rounded">
            <h2 className="text-xl font-bold">Slide 1 Text</h2>
          </animated.div>
        </div>
        <div className="relative h-56 md:h-96">
          <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full h-full object-cover" alt="Slide 2" />
          <animated.div style={textProps} className="absolute bottom-5 left-5 bg-black text-white px-4 py-2 rounded">
            <h2 className="text-xl font-bold">Slide 2 Text</h2>
          </animated.div>
        </div>
        <div className="relative h-56 md:h-96">
          <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full h-full object-cover" alt="Slide 3" />
          <animated.div style={textProps} className="absolute bottom-5 left-5 bg-black text-white px-4 py-2 rounded">
            <h2 className="text-xl font-bold">Slide 3 Text</h2>
          </animated.div>
        </div>
        <div className="relative h-56 md:h-96">
          <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full h-full object-cover" alt="Slide 4" />
          <animated.div style={textProps} className="absolute bottom-5 left-5 bg-black text-white px-4 py-2 rounded">
            <h2 className="text-xl font-bold">Slide 4 Text</h2>
          </animated.div>
        </div>
        <div className="relative h-56 md:h-96">
          <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full h-full object-cover" alt="Slide 5" />
          <animated.div style={textProps} className="absolute bottom-5 left-5 bg-black text-white px-4 py-2 rounded">
            <h2 className="text-xl font-bold">Slide 5 Text</h2>
          </animated.div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
