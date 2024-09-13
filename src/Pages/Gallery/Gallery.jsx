import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GallerySection from './GallerySection';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const sections = [
  { id: 1, images: [/* array of image URLs for section 1 */] },
  { id: 2, images: [/* array of image URLs for section 2 */] },
  { id: 3, images: [/* array of image URLs for section 3 */] },
  { id: 4, images: [/* array of image URLs for section 4 */] },
];

const Gallery = () => {
  return (
    <div className="Gallery">
      {/* Gallery Header */}
      <motion.div
        className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: 'url(/path/to/your/bg-image.jpg)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-5xl font-bold">Gallery</h1>
      </motion.div>

      {/* Gallery Sections */}
      {sections.map((section) => (
        <GallerySection key={section.id} images={section.images} />
      ))}
    </div>
  );
}

export default Gallery;
