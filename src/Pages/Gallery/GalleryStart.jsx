import React, { useEffect } from 'react';

// Import images from the assets folder
import image1 from '../../Assets/Gallery/CH-359+ (8).jpg';
import image2 from '../../Assets/Gallery/CH-359+ (9).jpg';
import image3 from '../../Assets/Gallery/CH-360+ (15).jpg';
import image4 from '../../Assets/Gallery/CH-360+ (24).jpg';

const GalleryStart = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.scrollBy(0, window.innerHeight); // Scroll down by one viewport height
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen overflow-hidden">
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${image1})` }}></div>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${image2})` }}></div>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${image3})` }}></div>
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${image4})` }}></div>

      <div className="absolute inset-0 bg-orange-700 opacity-50 z-10"></div>
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl sm:text-6xl z-20">
        Gallery
      </h1>
    </div>
  );
};

export default GalleryStart;
