import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import JSZip from 'jszip';
import { kml as toGeoJSON } from 'togeojson';
import 'leaflet/dist/leaflet.css';
import Gislogo from '../Assets/logo/Gislogo.jpg'

import MapComponent from './mapcontents';

// Path to the KMZ file
const kmzFilePath = '/projectlocationsgis.kml'; // Path if placed in the public folder

function Footer() {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    const fetchKmlFromKmz = async () => {
      try {
        const response = await fetch(kmzFilePath);
        if (!response.ok) throw new Error('Network response was not ok');

        const kmzBlob = await response.blob();
        const zip = await JSZip.loadAsync(kmzBlob);
        const kmlFileName = Object.keys(zip.files).find((fileName) => fileName.endsWith('.kml'));

        if (kmlFileName) {
          const kmlBlob = await zip.file(kmlFileName).async('text');
          const kml = new window.DOMParser().parseFromString(kmlBlob, 'text/xml');
          const geoJson = toGeoJSON(kml);
          setGeoJsonData(geoJson);
        }
      } catch (error) {
        console.error("Error fetching KMZ file:", error);
      }
    };

    fetchKmlFromKmz();
  }, []);

  return (
    <footer className="bg-gray-300 text-black py-8 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* About Section */}
        <div className="flex-1">
          <img src=''></img>
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
        <img src={Gislogo}></img>
          <h2 className="text-2xl font-bold mb-4">Globe Infra Solutions</h2>
          <p className="text-sm mb-4">
          Globe Infra Solutions is an ISO: 9001:2015 organization is a sister concern Company of Earthcon Systems (India) Pvt. Ltd.
          </p>
        </div>

        {/* KMZ File Map Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
          <p className="text-sm mb-4">
            Below are the project locations displayed on the map.
          </p>
          
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
