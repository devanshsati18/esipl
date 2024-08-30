// Application.jsx

import React from 'react';
import 'animate.css'; // Import Animate.css for animations

// Card component
const Card = ({ heading, imageSrc, content, link }) => {
  return (
    <div className="bg-white border border-transparent hover:border-orange-500 shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 p-4 rounded-lg animate__animated animate__fadeIn">
      <h3 className="text-orange-500 text-xl font-bold mb-2">{heading}</h3>
      <img src={imageSrc} alt={heading} className="w-full h-40 object-cover mb-4 rounded-md" />
      <p className="mb-4">{content}</p>
      <a href={link} className="text-orange-500 underline hover:no-underline">
        Learn More
      </a>
    </div>
  );
};

// Application page
const Application = () => {
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold text-orange-500 mb-8 animate__animated animate__fadeIn">
        Application
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          heading="MSE/ RE/ RS Wall Construction"
          imageSrc="https://via.placeholder.com/600x400"
          content="Some points about MSE/RE/RS Wall Construction."
          link="#"
        />
        <Card
          heading="Reinforced Soil Slopes (RSS)"
          imageSrc="https://via.placeholder.com/600x400"
          content="Some points about Reinforced Soil Slopes (RSS)."
          link="#"
        />
        <Card
          heading="Erosion Control"
          imageSrc="https://via.placeholder.com/600x400"
          content="Some points about Erosion Control."
          link="#"
        />
        <Card
          heading="Concrete Form-liner"
          imageSrc="https://via.placeholder.com/600x400"
          content="Some points about Concrete Form-liner."
          link="#"
        />
        <Card
          heading="Soil Nailing"
          imageSrc="https://via.placeholder.com/600x400"
          content="Some points about Soil Nailing."
          link="#"
        />
        <Card
          heading="Crash Barrier Construction"
          imageSrc="https://via.placeholder.com/600x400"
          content="Some points about Crash Barrier Construction."
          link="#"
        />
        <Card
          heading="RS Wall Repair & Rehabilitation"
          imageSrc="https://via.placeholder.com/600x400"
          content="Some points about RS Wall Repair & Rehabilitation."
          link="#"
        />
      </div>
    </div>
  );
};

export default Application;
