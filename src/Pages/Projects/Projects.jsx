import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import 'animate.css'; // Import Animate.css for animations

const Projects = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Display for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      "WS": 1,
      "ProjectNumber": 9,
      "BriefDetails": "ROB6 1 Kanpur",
      "AuthorityClient": "Somdatt Builders NHAI",
      "Quantity": 16000,
      "TypeofWork": "PET Geogrid with Large Panel Fascia",
      "Location": "Uttar Pradesh",
      "StatusofWork": "Completed"
    },
    // Add more projects here as needed
  ];

  const Row = ({ index, style }) => (
    <div
      style={style}
      className="flex bg-white border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 ease-in-out shadow-sm rounded-lg mb-2"
    >
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].WS}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].ProjectNumber}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].BriefDetails}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].AuthorityClient}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].Quantity}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].TypeofWork}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].Location}</div>
      <div className="flex-1 p-4 text-sm text-gray-700 font-medium">{projects[index].StatusofWork}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate__animated animate__fadeInDown">
          Welcome to Earthcon Systems!
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full py-6 bg-white shadow-md z-10">
        <h2 className="text-3xl font-bold text-center text-orange-600 animate__animated animate__fadeInDown">
          Projects Overview
        </h2>
        <p className="text-center text-gray-600">Earthcon Systems (India) Pvt. Ltd.</p>
      </header>

      {/* Main Content */}
      <section id="main-container" className="pt-32 pb-15">
        <div className="container mx-auto px-4">
          {/* Projects List Title */}
          <div className="text-center mt-8 mb-8">
            <h3 className="text-3xl font-semibold text-blue-600">
              <i className="fa fa-newspaper-o" aria-hidden="true"></i> Projects List
            </h3>
          </div>

          {/* Project List */}
          <div className="overflow-auto mt-5 shadow-md rounded-lg bg-white">
            <List
              height={400}
              itemCount={projects.length}
              itemSize={80} // Increased item height to accommodate content
              width="100%"
            >
              {Row}
            </List>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-white shadow-inner mt-8">
        <p className="text-center text-gray-600">&copy; 2024 Earthcon Systems. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
