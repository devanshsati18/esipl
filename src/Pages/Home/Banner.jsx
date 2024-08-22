// Banner.js
import React from 'react';
import 'animate.css';
import '../../CSS/BannerStyle.css'; // Custom styles (see below)

const Banner = ({ imageUrl, text, animationClass }) => {
  return (
    <div className="w-full flex items-center justify-between bg-gray-100 p-4 relative overflow-hidden">
      {/* Text Section */}
      <div className="flex-shrink-0 w-3/4 max-w-md relative z-10">
        <div className={`text-left animate__animated ${animationClass}`}>
          <h1 className="text-4xl font-bold">{text}</h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-grow w-1/4 relative">
        <img
          src={imageUrl}
          alt="Banner"
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      {/* Blurring Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 z-0"></div>
    </div>
  );
};

export default Banner;
