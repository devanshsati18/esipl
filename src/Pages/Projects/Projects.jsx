import React, { useEffect, useState } from 'react';
import 'animate.css'; // Import Animate.css for animations
import projectsData from './Projects.json'; // Adjust the path to your JSON file
import {FaNewspaper } from 'react-icons/fa';

const Projects = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false); // Stop loading after data is fetched
    }, 1000); // Simulate a loading time of 1 second

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Display for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 relative">
    
      


      

      {/* Main Content */}
      <section id="main-container" className="pt-32 pb-15">
        <div className="container mx-auto px-4">
          {/* Projects List Title */}
          <div className="text-center mt-8 mb-8">
            <h3 className="text-5xl font-semibold text-orange-600 animate__animated animate__fadeInDown">
              <i className="text-4xl font-bold mb-2 text-orange-600 pt-9" aria-hidden="true"></i> Projects List
            </h3>
            <span className="block text-gray-600 text-lg pt-2">Earthcon Systems (India) Pvt. Ltd.</span>
          </div>

          {/* Project List */}
          <div className="overflow-auto mt-5 shadow-md rounded-lg bg-white py-2">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left text-sm font-medium text-gray-500">WS No</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Brief Details</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Authority/Client</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Quantity</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Type of Work</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Location</th>
                  <th className="p-4 text-left text-sm font-medium text-gray-500">Status of Work</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project, index) => {
                  const statusClass = project.StatusofWork === "Completed" ? "bg-green-100" : 
                                      project.StatusofWork === "Ongoing" ? "bg-yellow-100" : "";
                  return (
                    <tr key={index} className={`hover:bg-gray-50 transition-all duration-300 ease-in-out ${statusClass} animate__animated animate__fadeInUp`}>
                      <td className="p-4 text-sm text-gray-700">{project.WSNo}</td>
                      <td className="p-4 text-sm text-gray-700">{project.BriefDetails}</td>
                      <td className="p-4 text-sm text-gray-700">{project.AuthorityClient}</td>
                      <td className="p-4 text-sm text-gray-700">{project.Quantity}</td>
                      <td className="p-4 text-sm text-gray-700">{project.TypeofWork}</td>
                      <td className="p-4 text-sm text-gray-700">{project.Location}</td>
                      <td className="p-4 text-sm text-gray-700">{project.StatusofWork}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Projects;
