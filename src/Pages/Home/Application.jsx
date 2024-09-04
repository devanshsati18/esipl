import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import 'animate.css'; // Import Animate.css for animations
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'; // Heroicons

// Card component
const Card = ({ heading, imageSrc, content, link }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid transparent',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)', // Shadow for the card
        transition: 'all 0.3s',
        borderRadius: '8px',
        padding: '16px',
        transform: 'scale(1)',
        ':hover': {
          borderColor: '#FFA500', // Orange color on hover
          boxShadow: '0 6px 12px rgba(0,0,0,0.3)', // Shadow on hover
          transform: 'scale(1.05)',
        },
      }}
    >
      <h3
        style={{
          color: '#FFA500',
          fontSize: '28px', // Increased font size
          fontWeight: 'bold',
          marginBottom: '8px',
          textDecoration: 'underline',
        }}
      >
        {heading}
      </h3>
      <img
        src={imageSrc}
        alt={heading}
        style={{
          width: '100%',
          height: '250px', // Increased height
          objectFit: 'cover',
          marginBottom: '16px',
          borderRadius: '8px',
        }}
      />
      <ul style={{ marginBottom: '16px', color: 'black', listStyleType: 'disc', paddingLeft: '20px' }}>
        {content.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <a
        href={link}
        style={{
          color: '#FFA500',
          textDecoration: 'underline',
        }}
      >
        Learn More
      </a>
    </div>
  );
};

// Application page
const Application = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Change slide every 4 seconds
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
          border: 'none',
        }}
      >
        <ChevronLeftIcon style={{ width: '24px', height: '24px' }} />
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
          border: 'none',
        }}
      >
        <ChevronRightIcon style={{ width: '24px', height: '24px' }} />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: '32px', position: 'relative', height: '100vh', width: '100vw', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', borderRadius: '8px' }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '42px',
          fontWeight: 'bold',
          color: '#FFA500',
          marginBottom: '32px',
          textDecoration: 'underline',
          animation: 'fadeIn 2s', // Animate.css
        }}
        
      >
        Application
      </h1>
      <h3 className=' text-center text-3xl pb-5'>
      Earthcon Systems (India) Pvt. Ltd.
      </h3>
      
      <Slider {...settings}>
        <div>
          <Card
            heading="MSE/ RE/ RS Wall Construction"
            imageSrc="https://via.placeholder.com/600x400"
            content={[
              'Point 1 about MSE/RE/RS Wall Construction.',
              'Point 2 about MSE/RE/RS Wall Construction.',
              'Point 3 about MSE/RE/RS Wall Construction.',
            ]}
            link="#"
          />
        </div>
        <div>
          <Card
            heading="Reinforced Soil Slopes (RSS)"
            imageSrc="https://via.placeholder.com/600x400"
            content={[
              'Point 1 about Reinforced Soil Slopes (RSS).',
              'Point 2 about Reinforced Soil Slopes (RSS).',
              'Point 3 about Reinforced Soil Slopes (RSS).',
            ]}
            link="#"
          />
        </div>
        <div>
          <Card
            heading="Erosion Control"
            imageSrc="https://via.placeholder.com/600x400"
            content={[
              'Point 1 about Erosion Control.',
              'Point 2 about Erosion Control.',
              'Point 3 about Erosion Control.',
            ]}
            link="#"
          />
        </div>
        <div>
          <Card
            heading="Concrete Form-liner"
            imageSrc="https://via.placeholder.com/600x400"
            content={[
              'Point 1 about Concrete Form-liner.',
              'Point 2 about Concrete Form-liner.',
              'Point 3 about Concrete Form-liner.',
            ]}
            link="#"
          />
        </div>
        <div>
          <Card
            heading="Soil Nailing"
            imageSrc="https://via.placeholder.com/600x400"
            content={[
              'Point 1 about Soil Nailing.',
              'Point 2 about Soil Nailing.',
              'Point 3 about Soil Nailing.',
            ]}
            link="#"
          />
        </div>
        <div>
          <Card
            heading="Crash Barrier Construction"
            imageSrc="https://via.placeholder.com/600x400"
            content={[
              'Point 1 about Crash Barrier Construction.',
              'Point 2 about Crash Barrier Construction.',
              'Point 3 about Crash Barrier Construction.',
            ]}
            link="#"
          />
        </div>
        <div>
          <Card
            heading="RS Wall Repair & Rehabilitation"
            imageSrc="https://via.placeholder.com/600x400"
            content={[
              'Point 1 about RS Wall Repair & Rehabilitation.',
              'Point 2 about RS Wall Repair & Rehabilitation.',
              'Point 3 about RS Wall Repair & Rehabilitation.',
            ]}
            link="#"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Application;
