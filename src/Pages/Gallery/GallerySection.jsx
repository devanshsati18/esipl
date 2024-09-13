import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSpring, animated } from 'react-spring';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GallerySection = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [loadCount, setLoadCount] = useState(4);

  useEffect(() => {
    setVisibleImages(images.slice(0, loadCount));
  }, [images, loadCount]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setLoadCount(prevCount => Math.min(prevCount + 4, images.length));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={props} className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {visibleImages.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image}
            effect="blur"
            className="w-full h-auto object-cover rounded-lg"
            placeholderSrc="placeholder-image-url.jpg" // Optional placeholder image
          />
        ))}
      </div>
    </animated.div>
  );
};

export default GallerySection;
