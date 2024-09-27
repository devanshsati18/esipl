import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

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
        "AuthorityClient": "Somdatt Buiders NHAI",
        "Quantity": 16000,
        "TypeofWork": "PET Geogrid with Large Panel Fascia",
        "Location": "Uttar Pradesh",
        "StatusofWork": "Completed"
       },
  ];

  const Row = ({ index, style }) => (
    <div style={style} className="flex bg-white border-b border-gray-200 hover:bg-gray-50 transition duration-200">
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].WS}</div>
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].ProjectNumber}</div>
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].BriefDetails }</div>
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].AuthorityClient}</div>
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].Quantity}</div>
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].TypeofWork}</div>
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].Location}</div>
      <div className="flex-1 p-4 text-sm text-gray-500">{projects[index].StatusofWork}</div>
    </div>
  );

  return (
    <div className="flex flex-col">
      {showWelcome && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fadeInOut">
          Welcome to Earthcon Systems!
        </div>
      )}
      <section id="main-container" className="pt-8 pb-15">
        <div className="container mx-auto px-4">
          <div className="text-center mt-8">
            <h2 className="text-3xl font-semibold">
              <span className="text-yellow-500">
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> PROJECTS 
              </span>
              LIST
              <span className="block text-sm text-gray-600">Earthcon Systems (India) Pvt. Ltd.</span>
            </h2>
          </div>
          <div className="overflow-auto mt-5 shadow-md rounded-lg">
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
    </div>
  );
};

export default Projects;
