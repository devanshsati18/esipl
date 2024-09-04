import React, { useState, useEffect } from 'react';
import 'animate.css'; // Import Animate.css
import { FaImages } from 'react-icons/fa'; // Import an icon for the gallery heading
import './Gallery.css'; // Import custom CSS

const Images = [
  require('../../Assets/Gallery/CH-359+ (1).jpg'),
  require('../../Assets/Gallery/CH-359+ (10).jpg'),
  require('../../Assets/Gallery/CH-359+ (11).jpg'),
  require('../../Assets/Gallery/CH-359+ (12).jpg'),
  require('../../Assets/Gallery/CH-359+ (4).jpg'),
  require('../../Assets/Gallery/CH-359+ (8).jpg'),
  require('../../Assets/Gallery/CH-359+ (9).jpg'),
  require('../../Assets/Gallery/CH-360+ (15).jpg'),
  require('../../Assets/Gallery/CH-360+ (24).jpg'),
  require('../../Assets/Gallery/CH-360+ (5).jpg'),
  require('../../Assets/Gallery/CH-363+ (20).jpg'),
  require('../../Assets/Gallery/CH-363+ (55).jpg'),
  require('../../Assets/Gallery/CH-367+  (16).jpg'),
];
const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState(Images.slice(0, 12)); // Initially display first 12 images
    const [fadeClass, setFadeClass] = useState(Array(12).fill('fade-in')); // Array to manage fade classes
  
    useEffect(() => {
      const interval = setInterval(() => {
        const currentImages = [...galleryImages];
        const currentImageIndexes = currentImages.map(image => Images.indexOf(image));
  
        let randomIndex;
        let newImageIndex;
  
        // Find a random index and a new image index that are not currently visible
        do {
          randomIndex = Math.floor(Math.random() * currentImages.length);
          newImageIndex = Math.floor(Math.random() * Images.length);
        } while (currentImageIndexes.includes(newImageIndex) || currentImageIndexes[randomIndex] === newImageIndex);
  
        // Trigger fade out for the image being replaced
        setFadeClass(prevState => {
          const newFadeClass = [...prevState];
          newFadeClass[randomIndex] = 'fade-out'; // Custom class for fade out
          return newFadeClass;
        });
  
        // Replace the image after the fade-out animation is complete
        setTimeout(() => {
          currentImages[randomIndex] = Images[newImageIndex];
  
          // Trigger fade in for the new image
          setFadeClass(prevState => {
            const newFadeClass = [...prevState];
            newFadeClass[randomIndex] = 'fade-in'; // Custom class for fade in
            return newFadeClass;
          });
  
          setGalleryImages(currentImages);
        }, 3000); // Timeout to match the fade-out duration (3 seconds)
  
      }, 6000); // Interval for image replacement (6 seconds)
  
      return () => clearInterval(interval);
    }, [galleryImages]);
  
    return (
      <div className="gallery-container">
        <h1 className="gallery-heading">
          <FaImages className="gallery-icon" /> Gallery
        </h1>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className={`gallery-item ${fadeClass[index]}`}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
