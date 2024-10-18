import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Gislogo from '../Assets/logo/Gislogo.jpg';

function Footer() {
  return (
    <footer className="bg-gray-300 text-black py-8 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Earthcon Systems (India) Pvt. Ltd.</h2>
          <p className="text-sm mb-4">
            Earthcon Systems (India) Pvt. Ltd., an ISO: 9001:2015 organization is committed to providing comprehensive services like design, supply, and construction.
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
          <h2 className="text-2xl font-bold mb-4">Globe Infra Solutions</h2>
          <p className="text-sm mb-4">
            Globe Infra Solutions is an ISO: 9001:2015 organization and a sister concern Company of Earthcon Systems (India) Pvt. Ltd.
          </p>
        </div>

        {/* Google Maps Iframe Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
          <p className="text-sm mb-4">
            Below are the project locations displayed on the map.
          </p>
          {/* Embed Google Maps */}
          <iframe 
            src="https://www.google.com/maps/d/u/0/embed?mid=13MVp0yf69XHfw-Bf31x5N2G1pT9wik4&ehbc=2E312F" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen 
          ></iframe>
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
