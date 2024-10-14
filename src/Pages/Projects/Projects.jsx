import React, { useEffect, useState } from 'react';
import 'animate.css'; // Import Animate.css for animations
import projectsData from './Projects.json'; // Adjust the path to your JSON file

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
      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate__animated animate__fadeInDown">
          Welcome to Earthcon Systems!
        </div>
      )}

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-orange-500 bg-opacity-50 flex items-center justify-center z-20">
          <div className="loader animate__animated animate__fadeIn">
            <div className="spinner-border text-white" role="status">
              <span className="sr-only">Projects</span>
            </div>
          </div>
        </div>
      )}

      

      {/* Main Content */}
      <section id="main-container" className="pt-32 pb-15">
        <div className="container mx-auto px-4">
          {/* Projects List Title */}
          <div className="text-center mt-8 mb-8">
            <h3 className="text-3xl font-semibold text-blue-600 animate__animated animate__fadeInDown">
              <i className="fa fa-newspaper-o" aria-hidden="true"></i> Projects List
            </h3>
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
