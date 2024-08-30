import React from 'react';

// Example images for the photo gallery
const galleryImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
  '/images/gallery9.jpg',
];

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Earthcon Systems (India) Pvt. Ltd.</h2>
          <p className="text-sm mb-4">
            Earthcon Systems (India) Pvt. Ltd., an ISO: 9001:2015 organization is committed to provide comprehensive services like design, supply, and construction.
          </p>
          <p className="text-sm mb-2">
            <strong>Address:</strong> D-40, Pocket D, Okhla Phase I, Okhla Industrial Area, New Delhi, Delhi 110020
          </p>  
          <p className="text-sm mb-2">
            <strong>Email:</strong> info@esipl.net
          </p>
          <p className="text-sm mb-2">
            <strong>Phone No:</strong> 9899222244, 9899222245
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">PU Concrete Form Liner</a></li>
            <li><a href="#" className="hover:text-gray-400">Soil Erosion</a></li>
            <li><a href="#" className="hover:text-gray-400">MSE/ RE/ RS Wall Construction</a></li>
            <li><a href="#" className="hover:text-gray-400">Projects of ESIPL</a></li>
            <li><a href="#" className="hover:text-gray-400">On Going Project</a></li>
            <li><a href="#" className="hover:text-gray-400">Client Gallery</a></li>
            <li><a href="#" className="hover:text-gray-400">News Updates</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Photo Gallery Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-24 object-cover rounded" // Adjust height here
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line and Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Earthcon Systems (India) Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
