import React, { useEffect } from 'react';

const GalleryStart = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.scrollBy(0, window.innerHeight); // Scroll down by one viewport height
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen overflow-hidden">
      {/* Replace these URLs with your image paths */}
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('image1.jpg')" }}></div>
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('image2.jpg')" }}></div>
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('image3.jpg')" }}></div>
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('image4.jpg')" }}></div>

      <div className="absolute inset-0 bg-orange-700 opacity-50 z-10"></div>
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl sm:text-6xl z-20">
        Gallery
      </h1>
    </div>
  );
};

export default GalleryStart;
